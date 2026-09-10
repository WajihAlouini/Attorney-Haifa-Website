import { useEffect, useId, useMemo, useRef, useState } from "react";
import {
  getCountries,
  getCountryCallingCode,
  parsePhoneNumberFromString,
  type CountryCode,
} from "libphonenumber-js/min";
import { Controller, useForm } from "react-hook-form";
import { Check, Mail, MessageCircle } from "lucide-react";
import type { Translation } from "@/types";
import { trackFormSubmission } from "@/utils/analyticsHelpers";
import styles from "./Contact.module.css";
import { CountryCodePicker } from "./CountryCodePicker";

type Method = "email" | "whatsapp";
type Topic = keyof Translation["form"]["topics"];
interface Inputs {
  name: string;
  preference: Method;
  email?: string;
  phone?: string;
  country: CountryCode;
  topic: Topic;
  message: string;
  botcheck: boolean;
}

// Keep this subject stable: the owner's Outlook rule forwards it to the lawyer.
const SUBJECT = "Nouvelle demande de consultation - Site Web";
const ENDPOINT = ["https://", "api.web3forms", ".com", "/submit"].join("");
const methods: Record<Method, string> = {
  email: "Email",
  whatsapp: "WhatsApp",
};
const topics: Record<Topic, string> = {
  unspecified: "Non précisé",
  family: "Droit de la famille",
  property: "Droit immobilier",
  business: "Droit des affaires",
  criminal: "Droit pénal",
  other: "Autre demande",
};

// Accept Arabic and Persian numerals as well as Latin digits.
function normalizePhone(value: string) {
  return value
    .replace(/[٠-٩۰-۹]/g, (digit) =>
      String(digit.charCodeAt(0) - (digit >= "۰" ? 0x6f0 : 0x660))
    )
    .trim();
}

function parseNationalNumber(value: string, country: CountryCode) {
  const national = normalizePhone(value);
  if (!/^[\d\s().-]+$/.test(national)) return undefined;
  return parsePhoneNumberFromString(national, {
    defaultCountry: country,
    extract: false,
  });
}

export function ConsultationForm({
  t,
}: {
  t: Pick<Translation, "form" | "emailLabel" | "submitting">;
}) {
  const copy = t.form;
  const countries = useMemo(() => {
    const names = new Intl.DisplayNames([copy.locale], { type: "region" });
    return getCountries()
      .map((country) => ({
        country,
        name: names.of(country) || country,
        callingCode: getCountryCallingCode(country),
      }))
      .sort((a, b) => a.name.localeCompare(b.name, copy.locale));
  }, [copy.locale]);
  const id = useId();
  const [sent, setSent] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const [failure, setFailure] = useState<"failed" | "timeout" | null>(null);
  const requestRef = useRef<AbortController | null>(null);
  const cooldownRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const confirmationRef = useRef<HTMLDivElement>(null);
  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      preference: "email",
      country: "TN",
      topic: "unspecified",
      message: "",
      botcheck: false,
    },
    shouldUnregister: true,
  });
  const preference = watch("preference", "email");
  const country = watch("country", "TN");

  useEffect(
    () => () => {
      requestRef.current?.abort();
      if (cooldownRef.current) clearTimeout(cooldownRef.current);
    },
    []
  );

  useEffect(() => {
    if (sent) confirmationRef.current?.focus();
  }, [sent]);

  async function submit(data: Inputs) {
    if (data.botcheck || requestRef.current || sent) return;
    setFailure(null);
    const controller = new AbortController();
    requestRef.current = controller;
    let timedOut = false;
    const timeout = setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, 20_000);
    try {
      const key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (!key) throw new Error("Missing form configuration");
      const payload = new FormData();
      payload.append("access_key", key);
      payload.append("subject", SUBJECT);
      payload.append("from_name", "Site Web - Haifa Guedhami Alouini");
      payload.append("name", data.name.trim());
      payload.append("Contact souhaité", methods[data.preference]);
      if (data.preference === "email") {
        payload.append("email", data.email!.trim());
      } else {
        const phone = parseNationalNumber(data.phone!, data.country);
        if (!phone?.isPossible()) throw new Error("Invalid WhatsApp number");
        payload.append("Numéro WhatsApp", phone.number);
      }
      payload.append("Sujet de la demande", topics[data.topic]);
      payload.append("message", data.message.trim());
      payload.append("Langue du site", copy.language);
      // Exclude query strings and fragments, which may contain personal information.
      payload.append(
        "Page d’origine",
        `https://maitre-haifaguedhami.me${window.location.pathname}`
      );
      payload.append("botcheck", "");
      const response = await fetch(ENDPOINT, {
        method: "POST",
        body: payload,
        signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || result.success !== true)
        throw new Error("Submission not confirmed");
      if (controller.signal.aborted) return;
      reset();
      setSent(true);
      setCooldown(true);
      cooldownRef.current = setTimeout(() => setCooldown(false), 30_000);
      // Analytics must never turn a successful submission into a visible failure.
      try {
        trackFormSubmission("contact");
      } catch {
        /* Delivery already succeeded. */
      }
    } catch {
      if (!controller.signal.aborted || timedOut)
        setFailure(timedOut ? "timeout" : "failed");
    } finally {
      clearTimeout(timeout);
      requestRef.current = null;
    }
  }

  if (sent)
    return (
      <div
        className={styles.confirmation}
        role="status"
        tabIndex={-1}
        ref={confirmationRef}
      >
        <Check size={28} aria-hidden="true" />
        <h3>{copy.confirmationTitle}</h3>
        <p>{copy.confirmationMessage}</p>
        {cooldown && <p className={styles.hint}>{copy.cooldownMessage}</p>}
        <button
          type="button"
          className="btn primary"
          disabled={cooldown}
          onClick={() => setSent(false)}
        >
          {copy.newRequest}
        </button>
      </div>
    );

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(submit)}
      noValidate
      aria-busy={isSubmitting}
    >
      <input
        type="checkbox"
        hidden
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        {...register("botcheck")}
      />
      <fieldset className={styles.fields} disabled={isSubmitting}>
        <div className={styles.detailsRow}>
          <div className={styles.field}>
            <label htmlFor={`${id}-name`}>{copy.nameLabel}</label>
            <input
              id={`${id}-name`}
              autoComplete="name"
              maxLength={100}
              placeholder={copy.namePlaceholder}
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? `${id}-name-error` : undefined}
              {...register("name", { validate: (value) => !!value.trim() })}
            />
            {errors.name && (
              <span id={`${id}-name-error`} className={styles.fieldError}>
                {copy.requiredError}
              </span>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor={`${id}-topic`}>{copy.topicLabel}</label>
            <select id={`${id}-topic`} {...register("topic")}>
              {(Object.keys(topics) as Topic[]).map((topic) => (
                <option key={topic} value={topic}>
                  {copy.topics[topic]}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.contactGroup}>
          <fieldset className={styles.methodGroup}>
            <legend>{copy.preferenceLabel}</legend>
            <div className={styles.methodChoices}>
              {(Object.keys(methods) as Method[]).map((method) => (
                <label className={styles.methodChoice} key={method}>
                  <input
                    type="radio"
                    value={method}
                    {...register("preference")}
                  />
                  <span>
                    {method === "email" ? (
                      <Mail size={18} aria-hidden="true" />
                    ) : (
                      <MessageCircle size={18} aria-hidden="true" />
                    )}
                    {copy.methods[method]}
                    <Check
                      size={15}
                      className={styles.methodCheck}
                      aria-hidden="true"
                    />
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          {preference === "email" ? (
            <div className={styles.field} key="email">
              <label htmlFor={`${id}-email`}>{t.emailLabel}</label>
              <input
                id={`${id}-email`}
                type="email"
                dir="ltr"
                autoComplete="email"
                maxLength={254}
                placeholder={copy.emailPlaceholder}
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={
                  errors.email ? `${id}-email-error` : undefined
                }
                {...register("email", {
                  required: true,
                  validate: (value) =>
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value?.trim() || ""),
                })}
              />
              {errors.email && (
                <span id={`${id}-email-error`} className={styles.fieldError}>
                  {copy.emailError}
                </span>
              )}
            </div>
          ) : (
            <div className={styles.phoneRow} key="phone">
              <div
                className={styles.field}
                dir={copy.locale === "ar" ? "rtl" : "ltr"}
              >
                <label id={`${id}-country-label`} htmlFor={`${id}-country`}>
                  {copy.countryLabel}
                </label>
                <Controller
                  name="country"
                  control={control}
                  rules={{ deps: ["phone"] }}
                  render={({ field }) => (
                    <CountryCodePicker
                      id={`${id}-country`}
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      inputRef={field.ref}
                      countries={countries}
                      searchLabel={copy.countrySearch}
                      emptyLabel={copy.countryEmpty}
                      disabled={isSubmitting}
                    />
                  )}
                />
              </div>
              <div
                className={styles.field}
                dir={copy.locale === "ar" ? "rtl" : "ltr"}
              >
                <label htmlFor={`${id}-phone`}>{copy.phoneLabel}</label>
                <input
                  id={`${id}-phone`}
                  type="tel"
                  dir="ltr"
                  autoComplete="tel-national"
                  maxLength={30}
                  placeholder={country === "TN" ? "98 123 456" : "…"}
                  aria-required="true"
                  aria-invalid={!!errors.phone}
                  aria-describedby={
                    errors.phone ? `${id}-phone-error` : undefined
                  }
                  {...register("phone", {
                    required: true,
                    validate: (value, values) =>
                      !!parseNationalNumber(
                        value || "",
                        values.country
                      )?.isPossible(),
                  })}
                />
                {errors.phone && (
                  <span id={`${id}-phone-error`} className={styles.fieldError}>
                    {copy.phoneError}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor={`${id}-message`}>{copy.messageLabel}</label>
          <textarea
            id={`${id}-message`}
            rows={4}
            maxLength={3000}
            placeholder={copy.messagePlaceholder}
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={
              errors.message ? `${id}-message-error` : undefined
            }
            {...register("message", {
              validate: (value) => value.trim().length >= 10,
            })}
          />
          {errors.message && (
            <span id={`${id}-message-error`} className={styles.fieldError}>
              {copy.messageError}
            </span>
          )}
        </div>
      </fieldset>
      {failure && (
        <p className={styles.submissionError} role="alert">
          {failure === "timeout" ? copy.timeoutMessage : copy.failureMessage}
        </p>
      )}
      <button type="submit" className="btn primary" disabled={isSubmitting}>
        {isSubmitting ? t.submitting : copy.submit}
      </button>
    </form>
  );
}
