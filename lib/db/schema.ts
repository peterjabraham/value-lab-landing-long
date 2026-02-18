import {
  pgTable,
  uuid,
  varchar,
  text,
  boolean,
  integer,
  jsonb,
  timestamp,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";

// ── LEADS ──

export const leads = pgTable(
  "leads",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    companyName: varchar("company_name", { length: 255 }),
    firstName: varchar("first_name", { length: 100 }),
    lastName: varchar("last_name", { length: 100 }),
    jobTitle: varchar("job_title", { length: 150 }),
    phone: varchar("phone", { length: 50 }),
    companySize: varchar("company_size", { length: 50 }),
    sector: varchar("sector", { length: 100 }),
    revenueRange: varchar("revenue_range", { length: 50 }),
    source: varchar("source", { length: 50 }),
    utmSource: varchar("utm_source", { length: 100 }),
    utmMedium: varchar("utm_medium", { length: 100 }),
    utmCampaign: varchar("utm_campaign", { length: 100 }),
    consentMarketing: boolean("consent_marketing").default(false),
    crmId: varchar("crm_id", { length: 100 }),
    calendlyEventUri: varchar("calendly_event_uri", { length: 255 }),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
  },
  (table) => [
    index("idx_leads_email").on(table.email),
    index("idx_leads_source").on(table.source),
  ]
);

// ── DIAGNOSTIC SESSIONS ──

export const diagnosticSessions = pgTable("diagnostic_sessions", {
  id: uuid("id").primaryKey().defaultRandom(),
  leadId: uuid("lead_id").references(() => leads.id),
  sessionId: varchar("session_id", { length: 255 }).notNull(),
  status: varchar("status", { length: 20 }).default("in_progress"),
  currentStep: integer("current_step").default(1),
  startedAt: timestamp("started_at", { withTimezone: true }).defaultNow(),
  completedAt: timestamp("completed_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

// ── DIAGNOSTIC ANSWERS ──

export const diagnosticAnswers = pgTable(
  "diagnostic_answers",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    sessionId: uuid("session_id")
      .references(() => diagnosticSessions.id)
      .notNull(),
    questionKey: varchar("question_key", { length: 50 }).notNull(),
    answerText: text("answer_text"),
    answerJson: jsonb("answer_json"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  },
  (table) => [
    index("idx_diagnostic_answers_session").on(table.sessionId),
  ]
);

// ── DIAGNOSTIC RESULTS ──

export const diagnosticResults = pgTable("diagnostic_results", {
  id: uuid("id").primaryKey().defaultRandom(),
  sessionId: uuid("session_id")
    .references(() => diagnosticSessions.id)
    .notNull()
    .unique(),
  leadId: uuid("lead_id").references(() => leads.id),
  strategicFit: varchar("strategic_fit", { length: 20 }),
  dataReadiness: varchar("data_readiness", { length: 20 }),
  pilotAppetite: varchar("pilot_appetite", { length: 20 }),
  opportunityAreas: jsonb("opportunity_areas"),
  matchedCaseIds: text("matched_case_ids").array(),
  recommendedPath: varchar("recommended_path", { length: 50 }),
  summaryPdfKey: varchar("summary_pdf_key", { length: 255 }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

// ── POLICY ASSESSMENTS ──

export const policyAssessments = pgTable(
  "policy_assessments",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    leadId: uuid("lead_id").references(() => leads.id),
    sessionId: varchar("session_id", { length: 255 }),
    policyUrl: varchar("policy_url", { length: 500 }),
    policyFileKey: varchar("policy_file_key", { length: 255 }),
    companyContext: jsonb("company_context"),
    complianceScore: integer("compliance_score"),
    obligationsAssessed: integer("obligations_assessed"),
    compliantCount: integer("compliant_count"),
    partialCount: integer("partial_count"),
    gapCount: integer("gap_count"),
    findings: jsonb("findings"),
    reportPdfKey: varchar("report_pdf_key", { length: 255 }),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  },
  (table) => [
    index("idx_policy_session").on(table.sessionId),
  ]
);

// ── CASE STUDIES ──

export const caseStudies = pgTable(
  "case_studies",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    title: varchar("title", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull().unique(),
    summary: text("summary").notNull(),
    fullContent: text("full_content"),
    sector: varchar("sector", { length: 100 }).notNull(),
    function: varchar("function", { length: 100 }),
    valueDriver: varchar("value_driver", { length: 100 }),
    companySize: varchar("company_size", { length: 50 }),
    region: varchar("region", { length: 100 }),
    aiType: varchar("ai_type", { length: 100 }),
    outcomes: jsonb("outcomes"),
    tags: text("tags").array(),
    sourceUrl: varchar("source_url", { length: 500 }),
    sourceType: varchar("source_type", { length: 50 }),
    verified: boolean("verified").default(false),
    isSample: boolean("is_sample").default(false),
    published: boolean("published").default(true),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
  },
  (table) => [
    index("idx_cases_sector").on(table.sector),
    index("idx_cases_function").on(table.function),
    index("idx_cases_value_driver").on(table.valueDriver),
  ]
);

// ── CASE LIBRARY SESSIONS ──

export const caseLibrarySessions = pgTable("case_library_sessions", {
  id: uuid("id").primaryKey().defaultRandom(),
  leadId: uuid("lead_id").references(() => leads.id),
  sessionId: varchar("session_id", { length: 255 }),
  filtersUsed: jsonb("filters_used"),
  casesViewed: text("cases_viewed").array(),
  convertedAt: timestamp("converted_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

// ── APP HANDOFF TOKENS ──

export const appHandoffTokens = pgTable(
  "app_handoff_tokens",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    leadId: uuid("lead_id")
      .references(() => leads.id)
      .notNull(),
    appType: varchar("app_type", { length: 50 }).notNull(),
    token: varchar("token", { length: 255 }).notNull().unique(),
    claims: jsonb("claims"),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    usedAt: timestamp("used_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  },
  (table) => [
    index("idx_handoff_token").on(table.token),
  ]
);

// ── PAGE EVENTS ──

export const pageEvents = pgTable(
  "page_events",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    sessionId: varchar("session_id", { length: 255 }).notNull(),
    leadId: uuid("lead_id").references(() => leads.id),
    eventType: varchar("event_type", { length: 50 }),
    pagePath: varchar("page_path", { length: 255 }),
    eventData: jsonb("event_data"),
    referrer: varchar("referrer", { length: 500 }),
    userAgent: text("user_agent"),
    ipCountry: varchar("ip_country", { length: 2 }),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  },
  (table) => [
    index("idx_events_session").on(table.sessionId),
    index("idx_events_created").on(table.createdAt),
  ]
);
