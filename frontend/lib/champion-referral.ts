const VISITOR_KEY = "tgc_visitor_key";
const REFERRAL_CODE_KEY = "tgc_champion_referral";

function randomId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID().replace(/-/g, "");
  }
  return `v${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;
}

export function getOrCreateVisitorKey(): string {
  if (typeof window === "undefined") return "";
  try {
    const existing = window.localStorage.getItem(VISITOR_KEY);
    if (existing && existing.length >= 8) return existing;
    const next = randomId();
    window.localStorage.setItem(VISITOR_KEY, next);
    return next;
  } catch {
    return randomId();
  }
}

export function rememberChampionReferral(inviteCode: string): void {
  if (typeof window === "undefined") return;
  const code = inviteCode.trim().toUpperCase();
  if (!/^TGC[A-F0-9]{8}$/.test(code)) return;
  try {
    window.localStorage.setItem(REFERRAL_CODE_KEY, code);
  } catch {
    // Storage may be unavailable
  }
}

export function getRememberedChampionReferral(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const code = (window.localStorage.getItem(REFERRAL_CODE_KEY) || "")
      .trim()
      .toUpperCase();
    return /^TGC[A-F0-9]{8}$/.test(code) ? code : null;
  } catch {
    return null;
  }
}

export function clearRememberedChampionReferral(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(REFERRAL_CODE_KEY);
  } catch {
    // ignore
  }
}
