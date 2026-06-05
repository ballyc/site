"use client";

import Link from "next/link";

export default function PromptAbstractPage() {
  const s: React.CSSProperties = {
    fontFamily: "'Courier New', Courier, monospace",
    fontSize: 14,
    lineHeight: 1.7,
    color: "#1a1a1a",
    padding: "80px 40px",
  };

  const p: React.CSSProperties = { marginBottom: "1rem" };

  return (
    <div style={s}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <article>
          <p style={{ color: "#888", fontSize: 12, marginBottom: 8 }}>Abstract draft</p>

          <h1 style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.75rem", lineHeight: 1.4 }}>
            Precision Digital Treatment for Depression Prior to Clinic-based Mental Health Care: A Secondary Analysis of a Randomized Clinical Trial
          </h1>

          <p style={{ color: "#888", fontSize: 13, marginBottom: "2.5rem", lineHeight: 1.6 }}>
            Jenny Cleary*, Liying Chen*, Chloe Bally, Grant King, Srijan Sen, Amy Bohnert, Rahul Ladhania
          </p>

          <p style={p}>
            Demand for mental health care has outpaced access in many areas. Digital mental health interventions have emerged as scalable and low-cost tools to support individuals seeking treatment, though not all digital interventions may be equally effective for all people. We analyzed data from the Providing Mental Health Precision Treatment (PROMPT) randomized clinical trial (n=1884), where patients recruited from waitlists were randomly assigned to one of five digital interventions: a cognitive-behavioral therapy-based app, a mindfulness-based app, tailored feedback, or combinations of app and feedback. We applied a multi-arm causal forest framework to estimate individualized treatment assignment rules that maximize reductions in depressive symptoms (measured by PHQ-9 total score) among individuals seeking mental health treatment. Under the learned optimal treatment rule, 64.9% of patients (N = 366) were assigned to the mindfulness-based app alone, 28.2% (N = 159) to the mindfulness app plus feedback, and 6.9% (N = 39) to feedback alone.  Doubly robust policy value estimates indicate that following the learned optimal rule would lead to an expected 4.0 point (SE = 0.48) decrease in PHQ-9 scores, compared to a 2.7 point (SE = 0.96) decrease under random assignment. Our findings demonstrate how machine learning-guided personalization can guide scalable delivery of digital mental health interventions, while highlighting the importance of identifying richer clinical predictors to further enhance treatment heterogeneity models.
          </p>

          <div style={{ marginTop: 48 }}>
            <Link href="/" style={{ color: "#888", textDecoration: "none", fontSize: 13 }}>← back</Link>
          </div>
        </article>
      </div>
    </div>
  );
}
