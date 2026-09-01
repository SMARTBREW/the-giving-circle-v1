"use client";

import { featureFlags } from "@/lib/feature-flags";

export function useFeatureFlag(
  flag: keyof typeof featureFlags,
  userId?: string,
) {
  const isEnabled = featureFlags[flag];

  if (userId && typeof window !== "undefined") {
    const enabledUsers = localStorage.getItem(`feature_${flag}_users`);
    if (enabledUsers && enabledUsers.includes(userId)) {
      return true;
    }
  }

  return isEnabled;
}
