"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const sections = [
  { id: "intro", label: "1. Introduction" },
  { id: "market", label: "2. Market Analysis" },
  { id: "gametheory", label: "3. Game Theory" },
  { id: "predictions", label: "4. Predictions" },
  { id: "conclusion", label: "5. Conclusion" },
  { id: "bibliography", label: "Bibliography" },
];

export default function AIArmsRacePage() {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const s: React.CSSProperties = {
    fontFamily: "'Courier New', Courier, monospace",
    fontSize: 14,
    lineHeight: 1.7,
    color: "#1a1a1a",
    padding: "80px 40px",
  };

  const h2style: React.CSSProperties = {
    fontFamily: "'Courier New', Courier, monospace",
    fontSize: "1rem",
    fontWeight: "bold",
    marginTop: "2.4rem",
    marginBottom: "1rem",
  };

  const h3style: React.CSSProperties = {
    fontSize: "0.9rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    marginTop: "1.5rem",
  };

  const p: React.CSSProperties = { marginBottom: "1rem" };

  const fn: React.CSSProperties = {
    fontSize: 12,
    color: "#555",
    borderLeft: "2px solid #ddd",
    paddingLeft: 10,
    marginBottom: "0.75rem",
  };

  return (
    <div style={s}>
      <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "200px 1fr", gap: "60px" }}>

        {/* Sticky TOC */}
        <aside style={{ position: "sticky", top: 80, alignSelf: "start", height: "fit-content" }}>
          <p style={{ fontSize: 11, color: "#888", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.08em" }}>Contents</p>
          <nav>
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                style={{
                  display: "block",
                  marginBottom: 8,
                  color: active === id ? "#1a1a1a" : "#888",
                  textDecoration: "none",
                  fontSize: 13,
                  fontWeight: active === id ? "bold" : "normal",
                  borderLeft: active === id ? "2px solid #1a1a1a" : "2px solid transparent",
                  paddingLeft: 10,
                  transition: "all 0.15s",
                }}
              >
                {label}
              </a>
            ))}
          </nav>
          <div style={{ marginTop: 40 }}>
            <Link href="/" style={{ color: "#888", textDecoration: "none", fontSize: 13 }}>← back</Link>
          </div>
        </aside>

        {/* Main content */}
        <article>
          <p style={{ color: "#888", fontSize: 12, marginBottom: 8 }}>Ross School of Business · Business Economics Department · BE750</p>
          <h1 style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.5rem", lineHeight: 1.4 }}>
            # Analyzing the AI Arms Race Among Hyperscalers Through the Lens of Game Theory
          </h1>
          <p style={{ color: "#888", fontSize: 13, marginBottom: "3rem" }}>Chloe Bally — FTMBA</p>

          {/* Section 1 */}
          <section id="intro" style={{ marginBottom: "3rem" }}>
            <h2 style={h2style}>## 1. Introduction &amp; Research Question</h2>

            <h3 style={h3style}>1.1 Introduction</h3>
            <p style={p}>
              The world's leading cloud providers—Amazon Web Services (AWS), Microsoft Azure, and Google Cloud—are engaged in a capital-intensive sprint to build the computational backbone of generative AI. Their combined share of the global cloud infrastructure market is estimated at around 65 percent, and each is committing record sums to hyperscale data centers equipped with high-end GPUs and custom chips. Forecasts place cumulative AI-related capital expenditure (CapEx) at approximately $2.2 trillion by 2032—surpassing the scale of the dotcom fiber buildout and raising concerns around overcapacity, stranded assets, and tightening energy and chip supply constraints.
            </p>
            <p style={p}>
              This "AI infrastructure arms race" reflects a familiar pattern of strategic over-investment: high fixed costs, short hardware cycles, scarce resources, and pressure to move early. Historical parallels—like the railroad expansion of the 19th century and the fiber boom of the 1990s—suggest that when firms race ahead of demand, outcomes are mixed. But one key difference today is the pace of AI advancement. The risk isn't just underutilized assets—it's falling behind as competitors move faster to secure infrastructure that might soon be outdated.
            </p>
            <p style={fn}>
              The dot-com era saw one of the largest infrastructure overbuilds in history. Companies laid over 80 million miles of fiber optic cable across the U.S., far over-estimating demand. By late 2005—four years after the bubble burst—85% of that fiber remained unused, and bandwidth prices had collapsed by 90% (Syed, 2024).
            </p>

            <h3 style={h3style}>1.2 Research Question</h3>
            <p style={p}>This paper asks:</p>
            <p style={{ ...p, fontStyle: "italic", borderLeft: "2px solid #1a1a1a", paddingLeft: 16, marginLeft: 0 }}>
              How do hyperscalers' competitive strategies in AI infrastructure investment—viewed through the lens of all-pay auctions—shape market outcomes and the risks of systemic overbuilding?
            </p>
            <p style={p}>
              This question matters for several reasons. First, hyperscalers sit at the foundation of the AI ecosystem, and their allocation decisions affect the broader value chain—from model developers to enterprise users. Second, investors and policymakers lack a clear way to distinguish rational preemption from inefficient escalation. And third, physical constraints around land, energy, and engineering talent are becoming harder to ignore, meaning strategic errors could have long-term effects on AI adoption.
            </p>

            <h3 style={h3style}>1.3 Roadmap</h3>
            <p style={p}>
              To address this, the paper uses two core lenses: industrial organization frameworks (Structure–Conduct–Performance and Porter's Five Forces) and game theory, focusing on the all-pay auction model. A brief market overview clarifies structural features—such as supplier concentration and input bottlenecks—before mapping how these conditions drive competitive behavior. I then use recent CapEx disclosures to explore how the fear of missing out, more than clear ROI, may be driving these decisions. Insights from operators, investors, and cloud infrastructure stakeholders complement the theoretical framing.
            </p>
            <p style={p}>
              By examining when these investments are strategically justified—and when they risk triggering value destruction—the paper aims to support a more grounded understanding of the AI infrastructure race and its implications for investors, regulators, and hyperscalers themselves.
            </p>
          </section>

          {/* Section 2 */}
          <section id="market" style={{ marginBottom: "3rem" }}>
            <h2 style={h2style}>## 2. Market Analysis (SCP + Five Forces)</h2>

            <h3 style={h3style}>2.1 Methodology</h3>
            <p style={p}>
              This paper uses the Structure–Conduct–Performance (SCP) framework to analyze the AI cloud infrastructure market. SCP offers a causal lens: industry structure (S) shapes firm behavior (C), which in turn determines market outcomes (P). To unpack the "Structure" component more precisely, I incorporate Porter's Five Forces as a supporting tool.
            </p>
            <p style={p}>Framework use:</p>
            <ul style={{ listStyle: "disc", paddingLeft: "1.4rem", marginBottom: "1rem" }}>
              <li style={{ marginBottom: "0.5rem" }}><strong>S (Structure):</strong> The market is highly concentrated around a few hyperscalers (Amazon, Microsoft, Google), with high CapEx barriers, intense rivalry, and scarce resources. Porter's Five Forces detail these dynamics: Rivalry is fierce and concentrated among dominant players. Threat of Entry is low, due to infrastructure costs and scale advantages—but real in the case of vertically integrated challengers like Apple or Meta. Supplier Power is very high, especially due to Nvidia's dominance in chips and the scarcity of land, labor, and energy. Buyer Power is variable—lower when switching costs are high. Substitutes include on-premise cloud or not computing at all; not the primary concern in this race.</li>
              <li style={{ marginBottom: "0.5rem" }}><strong>C (Conduct):</strong> Firms are responding by over-investing in infrastructure—not necessarily for direct ROI, but to survive, gain share, or avoid obsolescence.</li>
              <li style={{ marginBottom: "0.5rem" }}><strong>P (Performance):</strong> This behavior leads to risks of overcapacity, strategic inefficiencies, and innovation at the infrastructure layer that may benefit others in the ecosystem more than the players themselves.</li>
            </ul>

            <h3 style={h3style}>2.2 What is the Structure of the AI Cloud Infrastructure Provider Market?</h3>

            <h3 style={{ ...h3style, fontWeight: "normal", fontStyle: "italic" }}>2.2.1 AI cloud infrastructure provider – defining the market</h3>
            <p style={p}>
              The market analyzed here is the AI cloud infrastructure market, which refers to the underlying physical and virtual systems enabling AI compute at scale. It is a capital-intensive, capacity-constrained segment of the broader cloud computing industry, dominated by a few large players.
            </p>
            <p style={p}>At its core, the AI cloud infrastructure market includes:</p>
            <ul style={{ listStyle: "disc", paddingLeft: "1.4rem", marginBottom: "1rem" }}>
              <li style={{ marginBottom: "0.25rem" }}>Data centers built and optimized for AI workloads (high-density, GPU-based computing).</li>
              <li style={{ marginBottom: "0.25rem" }}>Compute services offered via the cloud (GPU/TPU-based inference and training compute).</li>
              <li style={{ marginBottom: "0.25rem" }}>Storage and networking to handle massive datasets required for training and inference.</li>
              <li style={{ marginBottom: "0.25rem" }}>Model development capabilities, including proprietary foundation models and AI-as-a-Service platforms.</li>
            </ul>
            <p style={p}>
              This market sits at the intersection of hardware, software, energy, and data infrastructure. Because it involves deep vertical integration—from chips to datacenters to AI models—it is shaped by a small number of hyperscalers (Microsoft Azure, Google Cloud, Amazon AWS), with increasing pressure from powerful challengers (Meta, Apple, OpenAI, etc.).
            </p>

            <h3 style={{ ...h3style, fontWeight: "normal", fontStyle: "italic" }}>2.2.2 Competitive rivalry</h3>
            <p style={p}>
              The AI cloud infrastructure market is oligopolistic, dominated by three hyperscalers: Amazon (AWS), Microsoft (Azure), and Google (Cloud). These players operate in a market characterized by extremely high fixed costs, primarily due to infrastructure ownership and development (datacenters, chips, networking). Each firm is vertically integrated and differentiated through its proprietary stack—offering compute, storage, and model services.
            </p>
            <p style={p}>Rivalry is intensified by:</p>
            <ul style={{ listStyle: "disc", paddingLeft: "1.4rem", marginBottom: "1rem" }}>
              <li style={{ marginBottom: "0.25rem" }}><strong>High CapEx commitments:</strong> In 2025 alone, cloud and AI infrastructure CapEx estimates among key players exceeds $255 billion, showing clear signs of investment escalation across the board.</li>
              <li style={{ marginBottom: "0.25rem" }}><strong>First-mover pressure:</strong> The GPT-3 breakthrough in late 2022 redefined where value lies—prompting hyperscalers to chase GenAI leadership.</li>
              <li style={{ marginBottom: "0.25rem" }}><strong>Low price elasticity:</strong> Firms cannot easily undercut each other due to sunk costs and long build cycles, so they compete by overbuilding.</li>
              <li style={{ marginBottom: "0.25rem" }}><strong>Cross-subsidization ability:</strong> These firms have deep cash reserves (e.g. Apple and Alphabet with over $150B and $100B respectively in cash) that allow aggressive spending without immediate return expectations.</li>
            </ul>

            {/* CapEx table */}
            <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid #1a1a1a" }}>
                    <th style={{ textAlign: "left", padding: "6px 12px 6px 0" }}>Company</th>
                    <th style={{ textAlign: "left", padding: "6px 12px 6px 0" }}>2025 CapEx</th>
                    <th style={{ textAlign: "left", padding: "6px 12px 6px 0" }}>Escalation Signals</th>
                    <th style={{ textAlign: "left", padding: "6px 0" }}>Notes on Strategy / Allocation</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Apple", "$125 billion", "New record spend", "$500B across next 4 years for AI, silicon, and advanced server manufacturing"],
                    ["Amazon (AWS)", "$100 billion", "Q1 capex up 70% YoY", "Focused on AWS and generative AI; Jassy: \"once-in-a-lifetime opportunity\""],
                    ["Microsoft", "$80 billion", "Will grow, but more selectively", "Infrastructure scaling – more cautious than peers but still massive"],
                    ["Google (Alphabet)", "$75 billion", "+43% YoY", "For data centers, networking and server capacity for AI"],
                    ["Meta", "$64–72 billion", "Raised 2025 estimate in Q1; +74% YoY", "Increase driven by hardware costs and expanded AI infrastructure"],
                    ["Stargate (JV)", "TBD", "Plan for $500 billion (2025–2029)", "New JV between OpenAI, Oracle, SoftBank, and MGX to build U.S. AI infrastructure"],
                  ].map(([co, capex, signal, notes], i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #eee" }}>
                      <td style={{ padding: "6px 12px 6px 0", whiteSpace: "nowrap" }}>{co}</td>
                      <td style={{ padding: "6px 12px 6px 0", whiteSpace: "nowrap" }}>{capex}</td>
                      <td style={{ padding: "6px 12px 6px 0" }}>{signal}</td>
                      <td style={{ padding: "6px 0", color: "#555" }}>{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={{ fontSize: 11, color: "#888", marginTop: 6 }}>Source: FactSet CallStreet, Q1 2025 Earnings Calls</p>
            </div>

            <h3 style={{ ...h3style, fontWeight: "normal", fontStyle: "italic" }}>2.2.3 Client threat</h3>
            <p style={p}>
              The buyer power in the AI infrastructure market is difficult to assess, because true market demand remains opaque. While most agree that AI adoption is rising, the lack of consistent revenue disclosure makes client-side dynamics hard to track.
            </p>
            <p style={p}>
              Estimates vary widely: McKinsey projected over $125 billion in AI infrastructure and compute demand in 2024, growing 25–30% annually. BCC Research, which includes software and services, valued the total AI market at just $76 billion the same year—underscoring how definitions and assumptions differ.
            </p>
            <p style={p}>
              Internal consumption blurs the signal: A significant portion of AI infrastructure is used by CSPs themselves to train proprietary models (e.g., Gemini, GPT). Whether this should count as "client demand" is ambiguous.
            </p>
            <p style={p}>
              Training is resource-intensive: For example, training GPT-3 required ~1.3 GWh of energy—equivalent to powering 120 U.S. homes for a year—indicating heavy compute needs even without enterprise usage scaling up.
            </p>
            <p style={p}>
              The result is a paradox: CSPs are investing at hyperscale to serve future client demand—but that demand is still largely projected, not confirmed. In this context, buyer power is structurally low (clients can't dictate terms), but strategically powerful: the mere expectation of demand drives preemptive conduct from CSPs.
            </p>

            <h3 style={{ ...h3style, fontWeight: "normal", fontStyle: "italic" }}>2.2.4 Threat of new entrants or substitutes</h3>
            <p style={p}>
              Barriers to entry in AI infrastructure are exceptionally high—both in capital intensity and technical complexity. As a result, the threat of new entrants is low. However, the real challenge comes from adjacent giants: integrated tech firms like Meta and Apple, who operate their own data centers and increasingly build their own chips. While they don't offer public cloud services at scale, they control the full stack—from chips to applications—giving them optionality to scale outward.
            </p>
            <p style={p}>
              These players are technically their own clients (SaaS on top of IaaS), allowing them to deploy infrastructure internally without entering the cloud market directly—yet still siphon value from it. Their CapEx strategies rival those of Amazon, Microsoft, and Google, making them credible challengers. Meanwhile, OpenAI and others—potentially backed by governments or academia—are pushing toward verticalization, adding another source of disruption.
            </p>
            <p style={p}>
              Unlike traditional cloud entrants, these challengers don't play by the same rules. Their integration gives them flexibility, speed, and reduced reliance on hyperscalers, making obsolescence a real risk for incumbents if the market shifts toward internalized compute or closed ecosystems.
            </p>

            <h3 style={{ ...h3style, fontWeight: "normal", fontStyle: "italic" }}>2.2.5 Suppliers threat: scarcity of strategic inputs</h3>
            <p style={p}>
              Supplier power is exceptionally high due to both concentration and scarcity across critical inputs—especially GPUs, power, land, and cooling systems.
            </p>
            <p style={p}>
              NVIDIA, which dominates the GPU market, sits at the center of this bottleneck. Its H100 chip includes ~35,000 parts and nearly 1 trillion transistors, weighs 70 pounds, and requires both robotic assembly and supercomputers to test (Jensen Huang, NVIDIA CEO). As compute demands surge, the GPU market alone is expected to grow into a $1 trillion industry within 4–5 years, capturing the bulk of upcoming data center upgrade budgets.
            </p>
            <p style={p}>This compute escalation creates downstream pressure:</p>
            <ul style={{ listStyle: "disc", paddingLeft: "1.4rem", marginBottom: "1rem" }}>
              <li style={{ marginBottom: "0.25rem" }}>Cooling represents ~40% of total data center energy consumption (Bloomberg Intelligence), requiring advanced solutions like immersion cooling.</li>
              <li style={{ marginBottom: "0.25rem" }}>Bandwidth and memory are becoming limiting factors, even as GPU performance improves.</li>
              <li style={{ marginBottom: "0.25rem" }}>Power grid access is a looming constraint—40% of AI data centers will face power availability issues by 2027 (Gartner, 2024).</li>
              <li style={{ marginBottom: "0.25rem" }}>Build timelines for data centers can reach 7 years in high-demand zones such as Northern Virginia, primarily due to energy grid connection delays (IDC Datacenter Deep Dive, 2024).</li>
            </ul>
            <p style={p}>
              Further upstream, raw materials (e.g. silicon, steel, plastic, glass) used in servers and chips are sourced from highly specialized, capital-intensive industries, limiting flexibility. Silicon wafer production, in particular, is complex and costly.
            </p>
            <p style={p}>
              Scarce and strategic resources—from NVIDIA GPUs to local energy access—give suppliers outsized power. CSPs respond by preemptively over-investing in compute, land, and infrastructure capacity, turning supply constraints into a core force shaping competitive behavior.
            </p>

            <h3 style={h3style}>2.3 Conduct: How Are Firms Responding to the Industry's Structure?</h3>
            <p style={p}>
              The structure of the AI infrastructure market—defined by high fixed costs, input scarcity, and a few dominant players—has shaped the conduct of firms in distinct ways. Cloud service providers (CSPs) respond to competitive pressures from clients, suppliers, potential entrants, and each other by aggressively investing in infrastructure, developing their own models and chips, and racing to secure critical inputs. This conduct helps explain the escalation dynamic explored in later sections.
            </p>

            <h3 style={{ ...h3style, fontWeight: "normal", fontStyle: "italic" }}>2.3.1 Responding to client power: innovate or lose relevance</h3>
            <p style={p}>
              CSPs aim to increase client retention and lock-in by offering differentiated, high-value AI capabilities. Since the release of ChatGPT in late 2022, demand has shifted toward access to cutting-edge NLP and generative AI tools. The rapid uptake of OpenAI's models signaled to CSPs that value, in clients' eyes, now lies in proprietary model access and AI-enhanced workflows.
            </p>
            <p style={p}>
              In response, all major CSPs have launched frontier models—Google with Gemini, Microsoft via OpenAI integration, and Amazon with Bedrock. Copilots, productivity tools, and enterprise AI offerings are now table stakes. These moves are primarily defensive: without offering competitive AI capabilities, CSPs risk client churn and reduced influence in enterprise architecture decisions.
            </p>
            <p style={p}>
              CSPs are also under pressure to enable downstream innovation. As infrastructure providers, they must deliver scalable, reliable, and state-of-the-art compute to their customers. Failing to do so risks irrelevance in a stack increasingly shaped by AI-native expectations.
            </p>

            <h3 style={{ ...h3style, fontWeight: "normal", fontStyle: "italic" }}>2.3.2 Responding to new entrants: reinforce moats through differentiation</h3>
            <p style={p}>
              While entry barriers remain high, players like Meta, Apple, and DeepSeek challenge the incumbent CSPs by offering alternative AI value propositions.
            </p>
            <ul style={{ listStyle: "disc", paddingLeft: "1.4rem", marginBottom: "1rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>Meta uses open-source models (e.g., LLaMA) that can be deployed on any infrastructure, undermining CSP exclusivity. If customers adopt models independently, CSPs risk becoming mere commodity providers of compute and storage.</li>
              <li style={{ marginBottom: "0.5rem" }}>Apple is progressing toward full-stack AI capabilities through vertical integration—own chips, operating systems, and user-facing interfaces. Its recent partnership with OpenAI signals short-term catch-up but likely precedes proprietary AI development.</li>
              <li style={{ marginBottom: "0.5rem" }}>DeepSeek represents a different threat: open-source, cost-efficient models that replicate much of the value offered by frontier models at lower price points.</li>
            </ul>
            <p style={p}>
              In this context, CSPs invest in model development and ecosystem control not only to serve clients, but to maintain differentiation and prevent encroachment by integrators or alternative AI layers.
            </p>

            <h3 style={{ ...h3style, fontWeight: "normal", fontStyle: "italic" }}>2.3.3 Responding to supplier power: reduce dependency and secure supply</h3>
            <p style={p}>
              Suppliers—especially NVIDIA—hold considerable leverage due to GPU scarcity and essential role in AI compute. In response, CSPs have adopted several conduct strategies:
            </p>
            <ul style={{ listStyle: "disc", paddingLeft: "1.4rem", marginBottom: "1rem" }}>
              <li style={{ marginBottom: "0.25rem" }}><strong>Internal chip development:</strong> Google (TPU), AWS (Inferentia), Microsoft (Athena), and Apple all now develop custom AI accelerators to reduce reliance on NVIDIA.</li>
              <li style={{ marginBottom: "0.25rem" }}><strong>Pre-emptive data center construction:</strong> Because high-end chips are scarce and delayed, firms are building "shelled" data centers in advance of delivery. This conduct reflects both bottleneck anticipation and long lead times in AI infrastructure.</li>
              <li style={{ marginBottom: "0.25rem" }}><strong>Upgrading for AI workloads:</strong> Traditional data centers were designed for CPUs; AI workloads require reconfiguration for GPU density, power draw, and cooling. Firms are investing heavily in retrofits or new facilities tailored to modern AI hardware.</li>
            </ul>
            <p style={p}>
              Energy and land are now strategic inputs. Optimal locations require regulatory approval, proximity to large energy sources, and construction capacity. This has led to a land race: players move fast to acquire strategic sites—before competitors or infrastructure becomes obsolete.
            </p>

            <h3 style={{ ...h3style, fontWeight: "normal", fontStyle: "italic" }}>2.3.4 Internal rivalry: build capacity, avoid price wars</h3>
            <p style={p}>
              Because CSPs do not want to compete on price, they compete on performance, scale, and integration. The prevailing conduct pattern is capacity expansion and escalation pressure—outbuilding rivals to serve more customers, reduce marginal cost per unit, and defend market share. This leads to a Cournot-style quantity race—each player investing more to gain scale advantages, even if it risks inefficiency.
            </p>
            <p style={p}>
              Firms don't necessarily want to win on price or even profit today; they want to stay in the game long enough to shape the infrastructure layer of the AI economy. In this logic, infrastructure becomes a moat: the more capacity a player controls, the harder it is for others to enter or for clients to leave.
            </p>
            <p style={fn}>
              While Cournot competition models quantity-setting under strategic interdependence, it assumes firms can adjust output continuously and receive proportional returns. The AI infrastructure race better resembles an all-pay auction, as we will see in section 3, which is why it was chosen for analysis.
            </p>
            <p style={{ ...p, fontStyle: "italic", color: "#555" }}>
              Mini conclusion: CSPs are compelled to defend their moat through innovation (internal rivalry) to respond to clients' AI demand (buyer power), and to mitigate supply risk (supplier power). Each of these actions feeds the race dynamic—where even uncertain or inefficient investments appear rational in the face of competitive pressure.
            </p>

            <h3 style={h3style}>2.4 What are the consequences of this conduct? (S → C → P)</h3>
            <p style={p}>
              The structure of the market incentivizes strategic behaviors like building ahead of demand, securing scarce resources at a premium, and racing to innovate. These behaviors generate both visible market outcomes and hidden risks.
            </p>

            <h3 style={{ ...h3style, fontWeight: "normal", fontStyle: "italic" }}>2.4.1 Consequences of Overcapacity</h3>
            <p style={p}>
              Overcapacity tends to compress prices. For customers, this means cheaper AI services. For CSPs, unless offset by scale, lower prices reduce margins.
            </p>
            <p style={p}>
              For example, OpenAI's cost for GPT usage dropped from $0.02 to $0.002 per 1,000 tokens from GPT-3 to GPT-3.5. New entrants like DeepSeek further pressure prices by offering comparable performance at lower cost, contributing to commoditization.
            </p>

            <h3 style={{ ...h3style, fontWeight: "normal", fontStyle: "italic" }}>2.4.2 Consequences of Buying at a Premium</h3>
            <p style={p}>
              To secure scarce inputs—GPUs, power, land—CSPs often pay elevated prices. Combined with long build times, this exposes them to rapid obsolescence.
            </p>
            <p style={p}>
              NVIDIA's chip roadmap highlights the risk: energy use fell from 150 J/token (Ampere) to 10 J/token (Hopper), and is projected to hit 0.4 J/token with Blackwell. Infrastructure built today may need replacement sooner than planned.
            </p>

            <h3 style={{ ...h3style, fontWeight: "normal", fontStyle: "italic" }}>2.4.3 Consequences of Innovation Pressure</h3>
            <p style={p}>
              The race to innovate accelerates infrastructure development but concentrates power. A small number of firms dictate the AI stack's trajectory, creating risk if their strategies misfire.
            </p>
            <p style={p}>
              This escalation benefits technical progress—hardware, cooling, deployment—but also increases systemic vulnerability and limits ecosystem diversity.
            </p>

            <h3 style={{ ...h3style, fontWeight: "normal", fontStyle: "italic" }}>2.4.4 Mitigation: Efficiency Gains Unlock Demand</h3>
            <p style={p}>
              Rapid improvements in chip efficiency reduce compute costs, broadening access and improving CSP margins.
            </p>
            <p style={p}>
              For example, the evolution from Ampere to Hopper to Blackwell reflects significant gains in energy efficiency—which accounts today for most of datacenter's costs (IDC, 2024). These improvements make it feasible to serve more users with lower willingness to pay (WTP), supporting infrastructure utilization.
            </p>

            <h3 style={{ ...h3style, fontWeight: "normal", fontStyle: "italic" }}>2.4.5 Benefits: Building a Strategic Moat</h3>
            <p style={p}>Despite inefficiencies, early movers may secure durable advantages:</p>
            <ul style={{ listStyle: "disc", paddingLeft: "1.4rem", marginBottom: "1rem" }}>
              <li style={{ marginBottom: "0.25rem" }}><strong>Foundational Control:</strong> Like rail or fiber, AI infrastructure becomes a base layer. Owning it allows firms to "tax" upstream innovation.</li>
              <li style={{ marginBottom: "0.25rem" }}><strong>Platform Lock-In:</strong> Running proprietary models on owned hardware (e.g., Gemini, Copilot, Bedrock) deepens integration and stickiness.</li>
              <li style={{ marginBottom: "0.25rem" }}><strong>Vertical Integration &amp; Pricing Power:</strong> Custom chips (e.g., AWS Inferentia, Google TPU) and full-stack ownership allow cost control and differentiated services.</li>
              <li style={{ marginBottom: "0.25rem" }}><strong>Barrier to Entry:</strong> CapEx, power, and talent constraints deter new entrants. Early players secure strategic assets and customers.</li>
            </ul>
            <p style={p}>
              IDC projects global AI IT spend will reach $749.1 billion by 2028 (CAGR 32.8%). Hyperscalers that own infrastructure at scale stand to benefit disproportionately.
            </p>

            <h3 style={{ ...h3style, fontWeight: "normal", fontStyle: "italic" }}>2.4.6 What Are CSPs Saying?</h3>
            <p style={p}>Amazon, Microsoft, and Google frame their AI infrastructure investments as long-term, foundational bets:</p>
            <ul style={{ listStyle: "disc", paddingLeft: "1.4rem", marginBottom: "1rem" }}>
              <li style={{ marginBottom: "0.25rem" }}><strong>Platform Control:</strong> Owning the AI "operating system" ensures apps, models, and data stay on their stack.</li>
              <li style={{ marginBottom: "0.25rem" }}><strong>Ecosystem Leverage:</strong> Running their own models improves performance and reduces dependency.</li>
              <li style={{ marginBottom: "0.25rem" }}><strong>Defensive Positioning:</strong> Infrastructure ownership protects against platform shifts and strategic drift.</li>
            </ul>
            <p style={p}>Statements from Executives:</p>
            <blockquote style={{ borderLeft: "2px solid #1a1a1a", paddingLeft: 16, marginLeft: 0, marginBottom: "0.75rem", fontStyle: "italic" }}>
              "AI represents... the biggest technology shift and opportunity in business since the Internet." — Andy Jassy, Amazon
            </blockquote>
            <blockquote style={{ borderLeft: "2px solid #1a1a1a", paddingLeft: 16, marginLeft: 0, marginBottom: "1rem", fontStyle: "italic" }}>
              "We are trying to build for the next two decades... The return on invested capital... is well worth it." — Amy Hood, Microsoft
            </blockquote>
          </section>

          {/* Section 3 */}
          <section id="gametheory" style={{ marginBottom: "3rem" }}>
            <h2 style={h2style}>## 3. Connecting with Game Theory</h2>
            <p style={p}>
              What we've observed in the structure of the environment and the strategic behavior of firms strongly resembles the dynamics of an all-pay auction from game theory—characterized by irreversible investments, uncertain payoffs, and winner-take-most outcomes.
            </p>

            <h3 style={h3style}>3.1 Why game theory—and why all-pay auction</h3>
            <p style={p}>
              Game theory models how agents act under interdependence—where outcomes depend not only on their own choices, but on others' actions too. The all-pay auction, in particular, captures a scenario where all players pay their bid (capex), yet only one wins the prize (dominant market position or future relevance).
            </p>
            <p style={p}>
              Once committed, firms are incentivized to keep bidding, even if returns are uncertain or diminishing, because walking away guarantees loss. This creates a trap of escalating investments—seen in contexts like olympic bids, political races, and innovation prizes.
            </p>

            <h3 style={h3style}>3.2 Mapping the AI race as an all-pay auction</h3>
            <p style={p}>We can now formalize how this infrastructure race reflects an all-pay game:</p>
            <ul style={{ listStyle: "disc", paddingLeft: "1.4rem", marginBottom: "1rem" }}>
              <li style={{ marginBottom: "0.25rem" }}><strong>Players:</strong> The core cloud providers (AWS, Google, Microsoft), but also well-capitalized challengers like Meta, Apple, and OpenAI.</li>
              <li style={{ marginBottom: "0.25rem" }}><strong>Actions:</strong> Repeated rounds of capital expenditure—building datacenters, developing chips, scaling AI capabilities.</li>
              <li style={{ marginBottom: "0.25rem" }}><strong>Irreversibility:</strong> Investments in AI infrastructure are sunk; you cannot un-build a datacenter.</li>
              <li style={{ marginBottom: "0.25rem" }}><strong>Uncertain payoffs:</strong> Demand is growing, but unclear. The ROI on current capex is far from guaranteed.</li>
              <li style={{ marginBottom: "0.25rem" }}><strong>Escalation:</strong> A new game is triggered whenever a rival invests. To stay competitive, others must respond.</li>
              <li style={{ marginBottom: "0.25rem" }}><strong>Innovation pressure:</strong> Falling behind technologically risks future exclusion.</li>
              <li style={{ marginBottom: "0.25rem" }}><strong>Overcapacity risk:</strong> Supply expansion may outpace demand; the main beneficiaries may not be CSPs, but downstream users.</li>
              <li style={{ marginBottom: "0.25rem" }}><strong>Scarcity &amp; timing:</strong> Prime locations, talent, and chip supply are limited—early movers have an edge.</li>
            </ul>

            <h3 style={{ ...h3style, fontWeight: "normal", fontStyle: "italic" }}>3.2.1 Why not everyone can win</h3>
            <p style={p}>Only one or two firms can dominate the AI infrastructure market because:</p>
            <ul style={{ listStyle: "disc", paddingLeft: "1.4rem", marginBottom: "1rem" }}>
              <li style={{ marginBottom: "0.25rem" }}>Scarce supply chains (e.g., chips, land near energy) act as chokepoints.</li>
              <li style={{ marginBottom: "0.25rem" }}>Operational expertise and speed in building performant datacenters are hard to replicate.</li>
              <li style={{ marginBottom: "0.25rem" }}>Data concentration and talent convergence amplify first-mover advantages—CapEx alone doesn't guarantee returns.</li>
            </ul>
            <p style={p}>
              In short, the market behaves like an escalating, high-stakes game with uncertain rewards—but irreversible costs. The game theory lens explains why players stay in even when it seems economically irrational.
            </p>
            <p style={p}>
              While theoretical equilibrium strategies suggest that players should eventually moderate their bids—especially in crowded contests—empirical research consistently shows the opposite. In real-world all-pay auctions, including innovation prizes and political races, participants routinely overbid, and total expenditures often far exceed the actual prize value. This mirrors the hyperscaler dynamic: despite unclear returns, firms escalate investments in a high-pressure, winner-take-most environment.
            </p>
          </section>

          {/* Section 4 */}
          <section id="predictions" style={{ marginBottom: "3rem" }}>
            <h2 style={h2style}>## 4. Predictions and Investor Insights</h2>
            <p style={p}>
              Given the auction model and SCP evidence, hyperscaler CapEx escalation is rational while expected returns are falling—thereby heightening systemic overbuilding risk. We can now apply game theory to interpret both current dynamics and likely future outcomes.
            </p>

            <h3 style={h3style}>4.1 What the game predicts</h3>
            <p style={p}>
              The model tells us that hyperscalers—especially AWS, Microsoft, and Google—will likely continue matching each other's investments to avoid being left behind. The game is self-reinforcing: once inside, firms are locked into escalating bids.
            </p>
            <p style={p}>
              While it's unlikely any incumbent collapses outright, historical precedent suggests that one could falter or be disrupted—especially if a challenger plays smarter (cf. creative destruction concept: difference between challengers and incumbents—play to win vs. play to survive).
            </p>
            <p style={p}>At the ecosystem level, the race leads to massive overbuilding, which benefits:</p>
            <ul style={{ listStyle: "disc", paddingLeft: "1.4rem", marginBottom: "1rem" }}>
              <li style={{ marginBottom: "0.25rem" }}>Customers: more accessible and cheaper compute.</li>
              <li style={{ marginBottom: "0.25rem" }}>Suppliers: chipmakers like NVIDIA extract value regardless of outcome.</li>
              <li style={{ marginBottom: "0.25rem" }}>Institutions and developers: open access to advanced infrastructures.</li>
            </ul>
            <p style={p}>
              In contrast, CSPs may face declining marginal returns for their Cloud services business, and growing difficulty differentiating on infrastructure alone.
            </p>

            <h3 style={h3style}>4.2 Strategic Implications</h3>
            <p style={p}>From an investor or executive standpoint:</p>
            <ul style={{ listStyle: "disc", paddingLeft: "1.4rem", marginBottom: "1rem" }}>
              <li style={{ marginBottom: "0.5rem" }}><strong>If you're a CSP:</strong> The game compels you to continue investing or risk irrelevance—but you should also hedge. Strategic partnerships, exclusive data assets, or vertical integration may insulate against pure CapEx-based rivalry.</li>
              <li style={{ marginBottom: "0.5rem" }}><strong>If you're a challenger:</strong> Focus on agility and niche advantages. You don't need to outspend; you need to outsmart.</li>
              <li style={{ marginBottom: "0.5rem" }}><strong>If you're investing:</strong> Look beyond CSPs to the value chain. The most predictable winners may be those who collect "bids" (suppliers) rather than those placing them.</li>
            </ul>

            <h3 style={h3style}>4.3 Caveats</h3>
            <p style={p}>
              This analysis does not fully account for macroeconomic shocks, regulatory shifts, or changes in energy availability—all of which could disrupt investment dynamics independently of strategic behavior.
            </p>
            <p style={p}>
              It also simplifies the nature of demand: part comes from clients (uncertain future AI workloads), and part is internal, as CSPs embed AI across their stack. This dual-source demand raises the stakes of misestimating future returns.
            </p>
            <p style={p}>
              Still, the all-pay auction model helps clarify why firms continue to escalate investments despite mounting uncertainty.
            </p>
          </section>

          {/* Section 5 */}
          <section id="conclusion" style={{ marginBottom: "3rem" }}>
            <h2 style={h2style}>## 5. Conclusion: Summary of findings and implications for the AI market</h2>
            <p style={p}>
              This paper has shown that the AI infrastructure race among CSPs behaves like an all-pay auction: firms invest heavily, the returns are uncertain, and yet the game continues. In this setup, the paradox is clear—the biggest spenders may not earn commensurate rewards, while the real beneficiaries are often those outside the game: suppliers, clients, and the broader ecosystem.
            </p>
            <p style={p}>
              For many players, the goal is not to "win," but to avoid falling behind. The fear of obsolescence, particularly for incumbent cloud providers, forces participation—even without clear ROI. The decision tree is asymmetrical: choosing not to enter carries a higher long-term risk than escalating investment, even if payoff probabilities are low.
            </p>
            <p style={p}>
              Different strategies reflect different starting points. Incumbents play defensively to protect core markets; challengers with deep capital play opportunistically to gain ground. This asymmetry helps explain who escalates and why.
            </p>
            <p style={p}>
              These dynamics offer insight into long-term market structure and point investors toward value not just in the CSPs themselves, but in adjacent layers of the ecosystem likely to benefit from their continued spending.
            </p>
            <p style={p}>
              Future research could explore how regulatory interventions, shifting cost structures, or alternative market designs might reshape incentives—and potentially defuse the escalation dynamics driving overbuilding and systemic inefficiencies across the infrastructure stack.
            </p>
          </section>

          {/* Bibliography */}
          <section id="bibliography" style={{ marginBottom: "3rem" }}>
            <h2 style={h2style}>## Bibliography</h2>
            <ul style={{ listStyle: "none", padding: 0, fontSize: 13 }}>
              {[
                "Bloomberg Intelligence. 2025. AI Infrastructure Deep Dive – Final Report. February 12, 2025.",
                "BCC Research. 2024. Artificial Intelligence: Global Markets.",
                'Business Insider. 2025. Sarah Jackson. "What Big Tech CEOs Are Saying About Their Massive AI Spending Plans." May 2, 2025. https://www.businessinsider.com/big-tech-ceos-ai-spending-plans-capex-2025-5',
                "FactSet CallStreet. 2025. Q1 2025 Earnings Call Transcript for Amazon, Alphabet, Meta, Microsoft, and Apple. April 2025.",
                'Gartner. 2025. "Gartner Predicts Power Shortages Will Restrict 40% of AI Data Centers by 2027." November 12, 2024. https://www.gartner.com/en/newsroom/press-releases/2024-11-12-gartner-predicts-power-shortages-will-restrict-40-percent-of-ai-data-centers-by-20270',
                'Gartner. 2025. "Solving the AI Power Problem with Nuclear Energy." April 15, 2025.',
                'Gartner. 2025. "Gartner Forecasts Worldwide GenAI Spending to Reach $644 Billion in 2025." March 2025.',
                "IDC. 2024. Worldwide and U.S. Datacenter Installation Census and Construction Forecast, 2024–2028. June 2024.",
                "IDC. 2024. Worldwide Accelerated Computing Platforms and Systems Taxonomy. May 2024.",
                "IDC. 2025. EMEA AI Infrastructure Scope and Definitions. March 2025.",
                "IDC. 2024. Worldwide Artificial Intelligence IT Spending Forecast, 2024–2028. October 2024.",
                "Game Theory chapter 16 Auctions, book.",
                "Hörisch, Hannah, and Oliver Kirchkamp. 2009. Less Fighting Than Expected: Experiments with Wars of Attrition and All-Pay Auctions. Public Choice 140, no. 1–2: 103–120.",
                "Christensen, C. M. 1997. The Innovator's Dilemma: When New Technologies Cause Great Firms to Fail. Harvard Business Review Press.",
                'Schalkwyk, Peter. 2024. "From Railroads to AI: The Evolution of Game-Changing Utilities." Medium.',
                'Syed, Tabrez. 2024. "Making It Up in Volume: How the AI Infrastructure Boom Echoes the Telco Frenzy of the 90s." Medium. April 4, 2024.',
                "Informa TechTarget. 2025. Various coverage of hyperscaler CapEx plans and AI infrastructure strategy.",
              ].map((ref, i) => (
                <li key={i} style={{ marginBottom: "0.75rem", borderLeft: "2px solid #eee", paddingLeft: 12, color: "#555" }}>{ref}</li>
              ))}
            </ul>
          </section>

        </article>
      </div>
    </div>
  );
}
