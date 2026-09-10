import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ConsultationForm } from "./ConsultationForm";
import { fr } from "@/data/locales/fr";
import { en } from "@/data/locales/en";
import { ar } from "@/data/locales/ar";

const fetchMock = vi.fn();
beforeEach(() => {
  vi.stubGlobal("fetch", fetchMock);
  vi.stubEnv("VITE_WEB3FORMS_ACCESS_KEY", "test-only-key");
  fetchMock.mockReset();
});
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  vi.useRealTimers();
});

function fillEmail() {
  fireEvent.change(screen.getByLabelText(fr.form.nameLabel), {
    target: { value: "Test Visitor" },
  });
  fireEvent.change(screen.getByRole("textbox", { name: fr.emailLabel }), {
    target: { value: "visitor@example.com" },
  });
  fireEvent.change(screen.getByLabelText(fr.form.messageLabel), {
    target: { value: "Fictional consultation request for testing." },
  });
}

describe("ConsultationForm", () => {
  it("explains invalid fields without sending a request", async () => {
    render(<ConsultationForm t={fr} />);
    fireEvent.click(screen.getByRole("button", { name: fr.form.submit }));
    expect(await screen.findByText(fr.form.emailError)).toBeVisible();
    expect(screen.getByText(fr.form.requiredError)).toBeVisible();
    expect(screen.getByLabelText(fr.form.messageLabel)).toHaveAttribute(
      "aria-invalid",
      "true"
    );
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("keeps email routing stable, includes context and shows a persistent confirmation", async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
    window.history.replaceState({}, "", "/en/contact?private=value#details");
    render(<ConsultationForm t={fr} />);
    fillEmail();
    fireEvent.change(screen.getByLabelText(fr.form.topicLabel), {
      target: { value: "family" },
    });
    fireEvent.click(screen.getByRole("button", { name: fr.form.submit }));
    const confirmation = await screen.findByRole("status");
    expect(confirmation).toHaveTextContent(fr.form.confirmationMessage);
    expect(confirmation).toHaveFocus();
    expect(
      screen.getByRole("button", { name: fr.form.newRequest })
    ).toBeDisabled();
    const payload = fetchMock.mock.calls[0][1].body as FormData;
    expect(payload.get("subject")).toBe(
      "Nouvelle demande de consultation - Site Web"
    );
    expect(payload.get("email")).toBe("visitor@example.com");
    expect(payload.get("Sujet de la demande")).toBe("Droit de la famille");
    expect(payload.get("Page d’origine")).toBe(
      "https://maitre-haifaguedhami.me/en/contact"
    );
    expect(payload.get("Langue du site")).toBe("Français");
    expect(payload.has("to_email")).toBe(false);
    expect(payload.has("Numéro WhatsApp")).toBe(false);
    window.history.replaceState({}, "", "/");
  });

  it("accepts WhatsApp without email, normalizes Arabic digits and omits the previous email", async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
    render(<ConsultationForm t={ar} />);
    fireEvent.change(screen.getByLabelText(ar.form.nameLabel), {
      target: { value: "زائر تجريبي" },
    });
    fireEvent.change(screen.getByRole("textbox", { name: ar.emailLabel }), {
      target: { value: "unused@example.com" },
    });
    fireEvent.click(
      screen.getByRole("radio", { name: ar.form.methods.whatsapp })
    );
    expect(
      screen.queryByRole("textbox", { name: ar.emailLabel })
    ).not.toBeInTheDocument();
    fireEvent.change(screen.getByLabelText(ar.form.phoneLabel), {
      target: { value: "٩٨ ١٢٣ ٤٥٦" },
    });
    fireEvent.change(screen.getByLabelText(ar.form.messageLabel), {
      target: { value: "هذا طلب تجريبي للاستشارة فقط" },
    });
    fireEvent.click(screen.getByRole("button", { name: ar.form.submit }));
    await screen.findByRole("status");
    const payload = fetchMock.mock.calls[0][1].body as FormData;
    expect(payload.get("Numéro WhatsApp")).toBe("+21698123456");
    expect(payload.has("email")).toBe(false);
    expect(payload.get("Contact souhaité")).toBe("WhatsApp");
    expect(payload.get("Langue du site")).toBe("العربية");
  });

  it("rejects invalid WhatsApp numbers and preserves the draft after delivery failure", async () => {
    fetchMock.mockResolvedValue({
      ok: false,
      json: async () => ({ success: false }),
    });
    render(<ConsultationForm t={en} />);
    fireEvent.change(screen.getByLabelText(en.form.nameLabel), {
      target: { value: "Test" },
    });
    fireEvent.click(
      screen.getByRole("radio", { name: en.form.methods.whatsapp })
    );
    fireEvent.change(screen.getByLabelText(en.form.phoneLabel), {
      target: { value: "123abc" },
    });
    fireEvent.change(screen.getByLabelText(en.form.messageLabel), {
      target: { value: "Please keep this fictional draft." },
    });
    fireEvent.click(screen.getByRole("button", { name: en.form.submit }));
    expect(await screen.findByText(en.form.phoneError)).toBeVisible();
    expect(fetchMock).not.toHaveBeenCalled();
    fireEvent.change(screen.getByLabelText(en.form.phoneLabel), {
      target: { value: "98123456" },
    });
    fireEvent.click(screen.getByRole("button", { name: en.form.submit }));
    expect(await screen.findByRole("alert")).toHaveTextContent(
      en.form.failureMessage
    );
    expect(screen.getByLabelText(en.form.messageLabel)).toHaveValue(
      "Please keep this fictional draft."
    );
    expect(screen.getByRole("button", { name: en.form.submit })).toBeEnabled();
  });

  it("lists countries with calling codes and formats a French national number without duplicating its leading zero", async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
    render(<ConsultationForm t={fr} />);
    fillEmail();
    fireEvent.click(
      screen.getByRole("radio", { name: fr.form.methods.whatsapp })
    );
    const countrySelect = screen.getByLabelText(fr.form.countryLabel);
    expect((countrySelect as HTMLInputElement).value).toContain("Tunisie");
    fireEvent.focus(countrySelect);
    expect(
      screen
        .getAllByRole("option")
        .filter((option) => option.id.includes("-country-"))
    ).toHaveLength(245);
    fireEvent.change(countrySelect, { target: { value: "France" } });
    const france = screen.getByRole("option", { name: /France.*33/ });
    expect(france.querySelector("img")).toHaveAttribute(
      "src",
      expect.stringContaining("FR.svg")
    );
    fireEvent.keyDown(countrySelect, { key: "Enter" });
    fireEvent.change(screen.getByLabelText(fr.form.phoneLabel), {
      target: { value: "06 12 34 56 78" },
    });
    fireEvent.click(screen.getByRole("button", { name: fr.form.submit }));
    await screen.findByRole("status");
    expect(
      (fetchMock.mock.calls[0][1].body as FormData).get("Numéro WhatsApp")
    ).toBe("+33612345678");
  });

  it("does not send twice while a request is pending", async () => {
    fetchMock.mockImplementation(() => new Promise(() => {}));
    render(<ConsultationForm t={fr} />);
    fillEmail();
    const button = screen.getByRole("button", { name: fr.form.submit });
    fireEvent.click(button);
    fireEvent.click(button);
    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    expect(button).toBeDisabled();
    expect(screen.getByLabelText(fr.form.nameLabel)).toBeDisabled();
  });

  it("times out without claiming delivery or losing the draft", async () => {
    vi.useFakeTimers();
    fetchMock.mockImplementation(
      (_url, { signal }) =>
        new Promise((_resolve, reject) => {
          signal.addEventListener("abort", () =>
            reject(new DOMException("Aborted", "AbortError"))
          );
        })
    );
    render(<ConsultationForm t={fr} />);
    fillEmail();
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: fr.form.submit }));
    });
    await act(async () => {
      await vi.advanceTimersByTimeAsync(20_000);
    });
    expect(screen.getByRole("alert")).toHaveTextContent(fr.form.timeoutMessage);
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: fr.emailLabel })).toHaveValue(
      "visitor@example.com"
    );
  });
});
