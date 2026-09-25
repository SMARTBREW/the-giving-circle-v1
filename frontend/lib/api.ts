import { config } from "@/lib/config";
import { safeJsonParse } from "@/lib/safe-json";

export type ApiResponse = {
  success: boolean;
  message: string;
};

export type CauseChampionResponse = ApiResponse & {
  inviteCode?: string;
  inviteUrl?: string;
  inviteDisplayUrl?: string;
};

function apiUrl(path: string): string {
  const base = config.apiUrl.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export async function postJson<
  TBody extends Record<string, unknown>,
  TResponse extends ApiResponse = ApiResponse,
>(path: string, body: TBody): Promise<TResponse> {
  let response: Response;
  try {
    response = await fetch(apiUrl(path), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    throw new Error(
      "Could not reach the API. Is the backend running on the configured URL?",
    );
  }

  const raw = await response.text();
  const data = safeJsonParse<TResponse>(raw, {
    success: false,
    message:
      response.headers.get("content-type")?.includes("application/json")
        ? "Something went wrong. Please try again."
        : `API returned ${response.status}. Check NEXT_PUBLIC_API_URL (expected FastAPI, not Next.js).`,
  } as TResponse);

  if (!response.ok || !data.success) {
    throw new Error(
      data.message || "Something went wrong. Please try again.",
    );
  }

  return data;
}

export type CauseChampionPayload = {
  fullName: string;
  email: string;
  mobile: string;
  city: string;
  selectedCauseId: string;
  selectedReasonId: string;
  otherCauseDetail?: string;
  otherReasonDetail?: string;
  agreed: true;
  referredByInviteCode?: string;
  visitorKey?: string;
};

export type NgoPartnerPayload = {
  organizationName: string;
  country: string;
  contactPerson: string;
  email: string;
  phone: string;
  selectedFocusId: string;
  otherFocusDetail?: string;
  agreed: true;
};

export function submitCauseChampion(payload: CauseChampionPayload) {
  return postJson<CauseChampionPayload, CauseChampionResponse>(
    "/api/submit/cause-champion",
    payload,
  );
}

export function submitNgoPartner(payload: NgoPartnerPayload) {
  return postJson("/api/submit/ngo-partner", payload);
}

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  agree: true;
};

export function submitContact(payload: ContactPayload) {
  return postJson("/api/submit/contact", payload);
}

export function trackChampionReferralOpen(payload: {
  inviteCode: string;
  visitorKey: string;
}) {
  return postJson("/api/submit/champion-referral-open", payload);
}
