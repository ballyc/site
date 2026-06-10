## ENGINEER REVIEW

Reviewed: 2026-06-08 · Branch: n/a (not a git repo)

| Section | Issues found | Critical gaps |
|---------|--------------|---------------|
| Scope | accepted as-is | — |
| Architecture | 2 | 0 |
| Code quality | 2 | 0 |
| Tests | 2 gaps (→EVAL) | 0 |
| Performance | 0 | 0 |
| Outside voice | 5 new findings | 0 |

### Implementation tasks

- [ ] **T1 (P1)** — Workflow sequence — Add "Failure modes" to the ordered workflow list
  - From: Architecture — `Failure modes` section (SKILL.md:231) is not listed in the Step 0 → … → Report sequence at SKILL.md:15
  - Files: SKILL.md:15
  - Verify: Read SKILL.md:15 and confirm "Failure modes" appears in the sequence between Performance and Outside Voice

- [ ] **T2 (P1)** — Write guard — Add AskUserQuestion confirmation before report write-back
  - From: Architecture — SKILL.md:239 appends to the plan file without user confirmation; target file may be a skill definition, read-only, or wrong path
  - Files: SKILL.md:239–242 (Write the report section)
  - Verify: Run skill on a plan; confirm AskUserQuestion fires showing target path before any write

- [ ] **T3 (P2)** — Report template — Add `### Low-confidence signals` appendix section
  - From: Code quality — SKILL.md:56 sends confidence 3–4 findings to "appendix only" but the report template (SKILL.md:244–271) has no appendix section
  - Files: SKILL.md:244–271
  - Verify: Report template contains `### Low-confidence signals` with format: `- [P?] (confidence: N/10) file:line — one-line description`

- [ ] **T4 (P2)** — Outside voice dispatch — Replace `<paste the plan content>` placeholder with explicit Read-then-inject instruction
  - From: Code quality — SKILL.md:219 has a literal `<paste the plan content>` placeholder the LLM must substitute; if missed, subagent reviews nothing
  - Files: SKILL.md:213–228
  - Verify: Instruction explicitly says "Read the plan file with the Read tool, then inject the full content into the prompt below"

- [ ] **T5 (P2)** — Outside voice dispatch — Append "Decisions made" block to subagent prompt
  - From: Outside voice finding 4 — subagent receives plan only, not the decision log; re-surfaces already-resolved issues
  - Files: SKILL.md:213–228
  - Verify: Before dispatching Task, skill compiles a `## Decisions made` block listing each finding → choice and appends it to the subagent prompt

- [ ] **T6 (P2)** — Decision tracking — Maintain a running decision log throughout the session
  - From: Outside voice finding 8 — skipped AskUserQuestions can silently appear as implementation tasks in the report; model can't reliably recall which were skipped in long sessions
  - Files: SKILL.md (add to "How to surface every issue" section)
  - Verify: Skill instructs: after each AskUserQuestion, record `finding → choice (or SKIPPED/DEFERRED)` in an in-session log; report populated from log, not from recall

- [ ] **T7 (P2)** — WebSearch scope — Cap at 3 searches, prioritized by highest-risk patterns
  - From: Outside voice finding 6 — SKILL.md:98 runs one search per pattern/library; a non-trivial plan triggers 5–10 sequential searches before any AskUserQuestion fires
  - Files: SKILL.md:98–103
  - Verify: Scope section instructs "max 3 WebSearch calls; prioritize novel concurrency approaches and custom-rolled solutions over commodity library lookups"

- [ ] **T8 (P2)** — Verification gate — Extend to allow plan-document quoting
  - From: Outside voice finding 3 — SKILL.md:67 requires quoting `file:line` from code; for plan documents, the code doesn't exist yet; the gate can't be satisfied
  - Files: SKILL.md:67–78
  - Verify: Gate instructions include: "For plan documents (not yet written code), `file:line` refers to the plan document itself — quote the plan line that motivates the finding"

### Low-confidence signals (appendix)

- (confidence: 5/10) SKILL.md — no stopping condition for underspecified input: if the plan is a stub or one-liner, all five sections still run and a Task subagent is dispatched. Medium confidence — verify this is a real problem in practice before acting.
- (confidence: 5/10) SKILL.md:56–62 — confidence scoring has no enforcement mechanism: the model assigns its own scores and decides what goes to the appendix. Structural issue; may not be fixable in a prompt. Low priority.

### Unresolved decisions

None — all AskUserQuestion calls were answered.

VERDICT: CLEARED — ready to implement (T1–T8)
