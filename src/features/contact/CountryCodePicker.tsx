import { useEffect, useMemo, useRef, useState, type Ref } from "react";
import { ChevronDown, Check } from "lucide-react";
import type { CountryCode } from "libphonenumber-js/min";
import styles from "./Contact.module.css";

// Ship SVG flags with the website so they render consistently on Windows too.
const flags = import.meta.glob<string>(
  "/node_modules/country-flag-icons/3x2/*.svg",
  {
    eager: true,
    query: "?url&no-inline",
    import: "default",
  }
);
type Country = { country: CountryCode; name: string; callingCode: string };
function searchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase()
    .trim();
}

export function CountryCodePicker({
  id,
  value,
  onChange,
  onBlur,
  inputRef,
  countries,
  searchLabel,
  emptyLabel,
  disabled,
}: {
  id: string;
  value: CountryCode;
  onChange: (value: CountryCode) => void;
  onBlur: () => void;
  inputRef: Ref<HTMLInputElement>;
  countries: Country[];
  searchLabel: string;
  emptyLabel: string;
  disabled: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);
  const selected = countries.find((item) => item.country === value)!;
  const filtered = useMemo(
    () =>
      countries.filter((item) =>
        searchText(
          `${item.name} ${item.country} +${item.callingCode}`
        ).includes(searchText(query))
      ),
    [countries, query]
  );
  const label = `${selected.name} (\u200e+${selected.callingCode}\u200e)`;

  useEffect(() => {
    if (open)
      listRef.current?.children[active]?.scrollIntoView?.({ block: "nearest" });
  }, [active, open]);

  function show() {
    setQuery("");
    setActive(
      Math.max(
        0,
        countries.findIndex((item) => item.country === value)
      )
    );
    setOpen(true);
  }
  function choose(country: CountryCode) {
    onChange(country);
    setOpen(false);
    setQuery("");
  }
  function flag(country: CountryCode) {
    return (
      <img
        className={styles.countryFlag}
        src={flags[`/node_modules/country-flag-icons/3x2/${country}.svg`]}
        alt=""
        width={24}
        height={16}
        loading="lazy"
      />
    );
  }

  return (
    <div
      className={styles.countryPicker}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
          onBlur();
        }
      }}
    >
      <div className={styles.countryInput}>
        {flag(value)}
        <input
          id={id}
          ref={inputRef}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={open}
          aria-controls={`${id}-list`}
          aria-activedescendant={
            open && filtered[active]
              ? `${id}-${filtered[active].country}`
              : undefined
          }
          autoComplete="off"
          disabled={disabled}
          value={open ? query : label}
          placeholder={open ? searchLabel : label}
          onFocus={show}
          onClick={() => {
            if (!open) show();
          }}
          onChange={(event) => {
            setQuery(event.target.value);
            setActive(0);
            setOpen(true);
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown" || event.key === "ArrowUp") {
              event.preventDefault();
              if (!open) show();
              else
                setActive((index) =>
                  filtered.length
                    ? (index +
                        (event.key === "ArrowDown" ? 1 : -1) +
                        filtered.length) %
                      filtered.length
                    : 0
                );
            } else if (event.key === "Enter" && open) {
              event.preventDefault();
              if (filtered[active]) choose(filtered[active].country);
            } else if (event.key === "Escape" && open) {
              event.preventDefault();
              setOpen(false);
            } else if (event.key === "Tab") setOpen(false);
          }}
        />
        <ChevronDown size={16} aria-hidden="true" />
      </div>
      {open && (
        <div className={styles.countryMenu}>
          <ul
            id={`${id}-list`}
            role="listbox"
            aria-labelledby={id + "-label"}
            ref={listRef}
          >
            {filtered.map((item, index) => (
              <li
                key={item.country}
                id={`${id}-${item.country}`}
                role="option"
                aria-selected={value === item.country}
                className={index === active ? styles.activeCountry : undefined}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => choose(item.country)}
              >
                {flag(item.country)}
                <span className={styles.countryName}>{item.name}</span>
                <span dir="ltr">+{item.callingCode}</span>
                {value === item.country && (
                  <Check size={14} aria-hidden="true" />
                )}
              </li>
            ))}
          </ul>
          {!filtered.length && <p role="status">{emptyLabel}</p>}
        </div>
      )}
    </div>
  );
}
