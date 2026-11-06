"use client";

export default function CookieSettings() {
  return (
    <button
      className="btn btn-outline"
      onClick={() => { try { localStorage.removeItem("ebenoba-consent"); } catch {} window.dispatchEvent(new Event("ebenoba-consent-reset")); }}
    >
      Change my cookie choice
    </button>
  );
}
