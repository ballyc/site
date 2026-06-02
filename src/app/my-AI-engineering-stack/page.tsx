export default function CompanyBriefPost() {
  return (
    <main>

      <h1>I built myself an AI engineering team I can run from my terminal</h1>

      <ul>
        <li><a href="/">← back</a></li>
      </ul>

      <p>
        2026
      </p>

      <p>
        I now have an operational AI engineering stack behind me — a system that lets me design, build, and ship my own tools, and that gets sharper the more I use it. It&apos;s three layers. <strong>Claude Code</strong> is Claude in my terminal, able to read and write files, run commands, and search the web. On top of it sits <strong>gstack</strong> (Garry Tan&apos;s open-source framework), which turns Claude Code into a virtual engineering team: ~28 specialists I call as slash commands — a CEO who reframes the product, an eng manager who locks architecture, a designer who catches AI slop, a reviewer who finds production bugs, a QA lead who opens a real browser, a security officer, a release engineer. Output lands as Markdown I keep in <strong>Obsidian</strong>, so everything I build stays readable and searchable in one place. The fourth layer, <strong>gbrain</strong>, is a personal memory system that indexes what I feed it and wires it into a knowledge graph — the piece that makes the whole stack compound over time. It&apos;s installed and running; I&apos;m still filling it.
      </p>

      <h2>The machine</h2>

      <p>
        The point isn&apos;t any one tool. It&apos;s that I can sit down with a workflow that&apos;s annoying or repetitive, and turn it into a reusable skill by running it past a team instead of writing a one-off prompt. The skills run in the order a sprint runs — Think → Plan → Build → Review → Test → Ship — and each one feeds the next: <strong>/office-hours</strong> writes a design doc that <strong>/plan-eng-review</strong> reads, which writes a spec the build step implements. Nothing falls through the cracks because every step knows what came before it.
      </p>

      <p>
        Each decision I make gets written into a file, not held in my head. That&apos;s the difference between a system and a clever prompt: it&apos;s reusable, it&apos;s inspectable, and the next thing I build starts from everything I&apos;ve already decided.
      </p>

      <h2>The wheel in action: /company-brief</h2>

      <p>
        The first tool I built on the stack is <strong>/company-brief</strong>, because I needed it: I research companies before recruiting calls and investor or BD meetings. I give it a URL and a meeting context, and it returns a Markdown brief in three phases:
      </p>

      <ul>
        <li><strong>Company</strong> — product, founders, funding, stage, risks.</li>
        <li><strong>Customer</strong> — who buys it, their workflow without it, where the product intervenes, what failure looks like for them.</li>
        <li><strong>Competition</strong> — direct competitors, differentiation vs. marketing, where there&apos;s white space vs. crowding.</li>
      </ul>

      <p>
        Source discipline is the core feature. Confirmed means found verbatim on the company site or a named investor/Crunchbase source; everything else carries an <code>Educated guess:</code> prefix, so I always know what to trust. Each brief saves to <code>~/research-briefs/&#123;slug&#125;/&#123;date&#125;.md</code> and logs to a JSON index. Point Obsidian at that folder and every new brief shows up in the sidebar automatically. It takes about five minutes.
      </p>

      <p>
        What made this the example worth showing: the team built it faster and better than I would have alone. I described the problem in <strong>/office-hours</strong>, pushed on the approaches, and approved a spec. Then <strong>/plan-eng-review</strong> stress-tested that spec and forced six decisions I hadn&apos;t thought through — a re-run mode that diffs what changed since the last brief; deterministic slugs derived from the URL (<code>unreasonablelabs.ai → unreasonable-labs</code>); tags drawn from a fixed vocabulary instead of free-form; a tight binary rule for confirmed-vs-guess; clean errors when I re-run a company I&apos;ve never briefed; parallel searches within each phase to keep it under five minutes. Claude Code wrote the skill (~443 lines) from the approved doc. I tested it against companies where I already knew the answer. Start to finish, fast, and free on my subscription.
      </p>

      <p>
        Honest accounting: my manual research is still sharper — call it ~95% to the tool&apos;s ~80% — because I interrogate things live over a couple of rounds and the tool doesn&apos;t, yet. But manual costs me a few rounds of attention every time; the tool costs me one command. The way I close that gap is the reason I built this as a system: I write my own read at the bottom of each brief, then feed those corrections back into the skill. Each correction makes the next brief think a little more like me. That loop runs on the same stack — and it&apos;s exactly what gbrain is for once it&apos;s carrying weight.
      </p>

      <h2>Current status</h2>

      <ul>
        <li><strong>Claude Code + gstack</strong> — working. The engineering team I run every session.</li>
        <li><strong>/company-brief</strong> — working. Designed, built, and tested on companies I was meeting; I use it before calls.</li>
        <li><strong>Obsidian library</strong> — working. Every brief renders and stays searchable as it grows.</li>
        <li><strong>gbrain</strong> — in progress. Installed and running locally; the memory and knowledge-graph layer isn&apos;t carrying real weight yet. This is where the compounding lives, and it&apos;s next.</li>
      </ul>

    </main>
  )
}
