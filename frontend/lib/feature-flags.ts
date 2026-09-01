export const featureFlags = {
  newDashboard: process.env.NEXT_PUBLIC_FEATURE_NEW_DASHBOARD === "true",
  experimentalAPI: process.env.NEXT_PUBLIC_FEATURE_EXPERIMENTAL_API === "true",
  betaFeatures: process.env.NEXT_PUBLIC_FEATURE_BETA === "true",
} as const;
