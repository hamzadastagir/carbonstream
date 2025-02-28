import { z } from "zod"

// Define the schema for AI settings
export const aiSettingsSchema = z.object({
  // Model configuration
  model: z.object({
    name: z.string().default("gpt-4"),
    temperature: z.number().min(0).max(2).default(0.7),
    maxTokens: z.number().positive().default(2048),
  }),

  // API configuration
  api: z.object({
    endpoint: z.string().url().default("https://api.openai.com/v1"),
    timeout: z.number().positive().default(30000), // 30 seconds
    retries: z.number().nonnegative().default(3),
  }),

  // Rate limiting
  rateLimit: z.object({
    requestsPerMinute: z.number().positive().default(60),
    burstLimit: z.number().positive().default(10),
  }),

  // Caching configuration
  cache: z.object({
    enabled: z.boolean().default(true),
    ttl: z.number().positive().default(3600), // 1 hour in seconds
    maxSize: z.number().positive().default(1000), // Maximum number of cached items
  }),

  // Logging configuration
  logging: z.object({
    level: z.enum(["error", "warn", "info", "debug"]).default("info"),
    enabled: z.boolean().default(true),
  }),
})

// Export the type derived from the schema
export type AISettings = z.infer<typeof aiSettingsSchema>

// Default settings
export const defaultAISettings: AISettings = {
  model: {
    name: "gpt-4",
    temperature: 0.7,
    maxTokens: 2048,
  },
  api: {
    endpoint: "https://api.openai.com/v1",
    timeout: 30000,
    retries: 3,
  },
  rateLimit: {
    requestsPerMinute: 60,
    burstLimit: 10,
  },
  cache: {
    enabled: true,
    ttl: 3600,
    maxSize: 1000,
  },
  logging: {
    level: "info",
    enabled: true,
  },
}

// Helper function to validate and merge settings
export function createAISettings(settings: Partial<AISettings> = {}): AISettings {
  return aiSettingsSchema.parse({
    ...defaultAISettings,
    ...settings,
  })
} 