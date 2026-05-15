export const FEATURE_FLAGS = {
  WINTER_MODE: false,
  SUMMER_MODE: true,
} as const

export type FeatureFlag = keyof typeof FEATURE_FLAGS
