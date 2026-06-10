# engineer-review-pass

A Claude Code skill that runs a skeptical engineering-manager review of an
implementation plan before any code is written.

## What it does

Given a plan or design doc, the skill walks through it section by section —
Scope → Architecture → Code Quality → Tests → Performance → Failure modes →
Outside Voice → Report — and surfaces every issue via `AskUserQuestion`, one
at a time, so you decide each one before it's locked into the plan.

Findings are scored for confidence (1-10) and must quote the specific
plan/code line that motivates them — unverified speculation doesn't make it
into the report.

## When to use it

- You have a plan or design doc and are about to start coding
- Someone asks to "review the architecture", "review the plan", or "lock in
  the plan"

## Workflow

1. **Scope challenge** — what already exists, what's the minimum viable
   change, a complexity-smell check (8+ files / 2+ new services), and a quick
   best-practice web search (max 3 calls)
2. **Architecture** — design, coupling, data flow, scaling limits, security
   boundaries, and the build/publish pipeline for any new artifacts
3. **Code quality** — module structure, DRY violations, error handling,
   over/under-engineering
4. **Tests** — full codepath/user-flow coverage map, unit vs E2E vs eval, and
   mandatory regression tests for any broken paths
5. **Performance** — N+1s, memory, caching, slow paths
6. **Failure modes** — one realistic production failure per new codepath;
   flags critical gaps with no test and no error handling
7. **Outside voice (upon request)** — a fresh subagent does an independent pass
   over the reviewed plan, looking for what the structured review missed
8. **Report** — appended to the end of the plan file as `## ENGINEER REVIEW`,
   with an implementation task list (P1/P2/P3), unresolved decisions, and a
   verdict

## Output

Every issue is presented as a decision brief — issue, plain-English stakes,
what breaks if you pick wrong, and a recommended option — via
`AskUserQuestion`. The user decides every call; the skill never silently picks
for you.

See [`REVIEW.md`](./REVIEW.md) for an example report, produced by running this
skill on its own previous version (`SKILL_V0_before-engineer-review-pass.md`).

## Design choices

- **One issue, one decision.** Every finding is surfaced through a question with
  options and a recommendation, then it stops and waits for you (it never dumps a
  wall of findings or silently writes fixes into the plan. You decide each one)
- **The verification gate.** No finding reaches you unless the skill can quote the
  exact `file:line` that motivates it. If it can't quote the line, the finding is
  marked low-confidence and kept out of the main report (to prevent
  confident-sounding-but-wrong findings).

## Installation

Place `SKILL.md` in `.claude/skills/engineer-review-pass/SKILL.md` in your
project (or `~/.claude/skills/` for global use).
