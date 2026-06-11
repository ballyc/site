import Link from "next/link";

export default function AmazonExperiencePage() {
  return (
    <main>

      <h1>Amazon: linking input to output</h1>

      <ul>
        <li><Link href="/">← back</Link></li>
      </ul>

      <p>
        My Amazon contract work, structured as input → analysis → output so I can remember it.
      </p>

      <h2>Input ingested — what the team gathered</h2>

      <ul>
        <li><strong>Primary research:</strong> 18 interviews total — 15 K-12 IT teams (12 of which use tablets), plus other IT teams and one third-party service provider (an Account Executive). Among tablet users, 10 of 12 (83%) use iPads exclusively, which is why the whole study narrows to the iPad provisioning journey.</li>
        <li><strong>Secondary research:</strong> market-share data (StatCounter, Source 6), education tablet market sizing (TechNavio, Source 2), and vendor documentation for Apple ADE/ASM, Google Zero-Touch, and Samsung Knox.</li>
        <li><strong>The raw signal:</strong> 22 distinct pain points surfaced across the interviews, fragmented across the customer journey.</li>
      </ul>

      <h2>Structural analysis — how raw input became a recommendation</h2>

      <p>
        <strong>Step 1 — Map the journey.</strong> Five stages: (1) setup MDM + accounts, (2) purchase & enroll into ASM, (3) enroll into MDM + push policies/apps, (4) asset-tag & enroll into RMS, (5) deploy. This gives every pain point a location.
      </p>

      <p>
        <strong>Step 2 — Prioritize the 22 pain points</strong> through three sequential filters:
      </p>

      <ul>
        <li><em>Frequency</em> → shortlisted 6 (each ~33%+ of mentions).</li>
        <li><em>Average time spent</em> → grouped the 6 into 3 areas; RMS integration had the lowest avg time (7 min) → ranked 3rd.</li>
        <li><em>Maximum deviation</em> → broke the tie between the top two: OS-MDM integration&apos;s 24-hour worst case (1-in-5 failure) beat network connectivity&apos;s 120 min → ranked 1st.</li>
      </ul>

      <p>
        <strong>Result of the funnel:</strong> 3 prioritized problem areas → (1) OS Management Portal–MDM Integration, (2) Network Connectivity, (3) RMS Integration.
      </p>

      <p>
        <strong>Step 3 — Match each area to a recommendation + quantified impact:</strong>
      </p>

      <ul>
        <li>OS-MDM → unified portal → saves 10–15 min/device.</li>
        <li>Network → auto-reconnect + smart scheduling → cuts wait 75% (2 hrs → 30 min).</li>
        <li>RMS → engraved barcodes + integrated portal/API → saves ~5 min/device.</li>
      </ul>

      <p>
        <strong>Step 4 — Pressure-test against business reality.</strong> The savings are real but small: ~2.5 days/year/school ≈ $961.5/year. That fails to drive demand on its own.
      </p>

      <h2>Structural output — what the team recommended</h2>

      <p>
        <strong>The pivot:</strong> provisioning fixes alone aren&apos;t a business — they&apos;re a feature. The actual recommendation is a <strong>one-stop tech shop</strong>: integrate the full value chain (tablet manufacturing + apps + MDM + OS management) so a customer picks a device and add-ons in one portal and receives it fully provisioned, with provisioning bundled into device cost.
      </p>

      <p>
        <strong>The sequencing:</strong> first build a competitive K-12 tablet + education-app ecosystem; then layer the Section 3 fixes (network solutions first, unified portal + auto-tagging second).
      </p>

      <p>
        <strong>The strategic caveat:</strong> full-chain integration is a barrier to entry — feasible only for large players, who must position as either a differentiator (beat iPadOS experience) or a low-cost leader.
      </p>

      <h2>One-line mental model</h2>

      <p>
        <strong>Input:</strong> 18 interviews + market data → 22 pain points.<br></br>
        <strong>Analysis:</strong> map to 5-stage journey → 3-filter funnel (frequency → time → deviation) → 3 prioritized areas with quantified fixes → reality check ($961.5/yr is too small).<br></br>
        <strong>Output:</strong> don&apos;t sell provisioning, sell a one-stop tech shop — build the device first, sequence the fixes, and only large players can win.
      </p>

      <p>
        The hook to remember it: <strong>the analysis solves the provisioning problem, but the output reframes it</strong> — the real finding is that solving provisioning isn&apos;t enough.
      </p>

    </main>
  )
}
