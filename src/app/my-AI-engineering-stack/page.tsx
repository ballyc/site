export default function CompanyBriefPost() {
  return (
    <main>

      <h1># I built a personal AI engineering stack and shipped a tool on it</h1>

      <ul>
        <li><a href="/">← back</a></li>
      </ul>

      <p>
        2026
      </p>

      <p>
        I built a personal AI engineering stack and shipped one real tool on top of it. Three layers:{' '}
        <strong>Claude Code</strong> (Claude in my terminal, with the ability to read/write files, run commands, search the web),{' '}
        <strong>gstack</strong> (Garry Tan&apos;s framework, adding ~35 expert workflows as slash commands), and my own{' '}
        <strong>/company-brief</strong> skill, which researches a company across three depth layers, labels every fact by source reliability, and saves it to a searchable library.
      </p>

      <h2>## What it does</h2>

      <p>
        I give it a URL and a meeting context. It produces a Markdown brief in three phases:
      </p>

      <ul>
        <li><strong>Company</strong> — product, founders, funding, stage, risks.</li>
        <li><strong>Customer</strong> — who buys it, their workflow without it, where the product intervenes, what failure looks like for them.</li>
        <li><strong>Competition</strong> — direct competitors, real differentiation vs. marketing, where there&apos;s white space vs. crowding.</li>
      </ul>

      <p>
        I made source discipline the core feature. Confirmed = found verbatim on the company site or a named investor/Crunchbase source. Everything else gets an <code>Educated guess:</code> prefix. I save each brief to{' '}
        <code>~/research-briefs/&#123;slug&#125;/&#123;date&#125;.md</code> and log it in a JSON index, then read the library in <strong>Obsidian</strong> pointed at that folder, so it renders cleanly and stays searchable as it grows.
      </p>

      <h2>## How I built it</h2>

      <p>
        I used <strong>/office-hours</strong> to iterate on the design doc — I described the problem, pushed on the approaches, and approved a spec. Then I ran <strong>/plan-eng-review</strong> over that doc to lock six decisions:
      </p>

      <ul>
        <li>re-run mode shows a diff of what changed since the last brief;</li>
        <li>company slugs derive deterministically from the URL (<code>unreasonablelabs.ai → unreasonable-labs</code>);</li>
        <li>tags come from a fixed ~35-word vocabulary, not free-form;</li>
        <li>the confirmed-vs-guess rule is a tight binary on source tier;</li>
        <li>updating a never-briefed company errors out cleanly instead of guessing;</li>
        <li>searches run in parallel within each phase to keep a full brief under ~5 minutes.</li>
      </ul>

      <p>
        I had Claude Code write the skill (~443 lines of <code>SKILL.md</code>) from the approved doc, then I tested it against companies where I already knew the answer. The decisions live in files now, not in my head — which is what makes the thing reusable instead of a one-off prompt.
      </p>

      <h2>## What it costs in quality</h2>

      <p>
        My manual research is sharper: ~95% vs. the tool&apos;s ~80%, because I interrogate things in real time over a few rounds and the tool doesn&apos;t. The tool wins on effort and consistency — a solid brief in ~5 minutes, zero steering, saved and indexed.
      </p>

      <p>
        My plan to close the gap: keep briefs comprehensive enough to verify, write my own read at the bottom of each one, and feed those corrections back into the <code>SKILL.md</code>. Each correction makes the next brief think a bit more like me. That loop is the reason I built it as a system instead of re-prompting.
      </p>

      <h2>## Stack status</h2>

      <ul>
        <li>Claude Code — working.</li>
        <li>gstack — working.</li>
        <li>/company-brief — working; I designed, built, and tested it on real companies.</li>
        <li>gbrain (a memory layer I also installed) — set up on an external drive, but the database is empty and not yet wired into Claude Code. Not required for /company-brief.</li>
      </ul>

    </main>
  )
}
