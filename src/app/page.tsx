export default function Home() {
  return (
    <main>

      <h1># Chloe Bally</h1>

      <ul>
        <li>Email: <a href="mailto:ballyc@umich.edu">ballyc@umich.edu</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/chloe-bally">chloe-bally</a></li>
        <li>Github: <a href="https://github.com/ballyc">ballyc</a></li>
      </ul>

      <h2>## Side Projects</h2>

      <ul>
        <li><span className="proj">*engineer-review-pass*</span>: automates the engineer review workflow. Sequenced & interactive with human agent. Return review report with implementation tasks. Added sub-agent for a 2nd run-check. The tool caught and fixed live bugs in its own prior version (the review run is the example output). Next iteration: simplify by splitting agents and add orchestrator<br></br>Runs on Claude Code (2026) [ <a href="https://github.com/ballyc/site/blob/main/src/app/engineer-review-pass/README.md" target="_blank">README.md</a>, <a href="https://github.com/ballyc/site/blob/main/src/app/engineer-review-pass/SKILL.md" target="_blank">skill.md</a>, <a href="https://github.com/ballyc/site/blob/main/src/app/engineer-review-pass/REVIEW.md" target="_blank">output example</a> ]</li>
        <li><span className="proj">*/company-brief*</span>: automates the company research-to-briefing process. Reports saved in Obsidian, indexed and searchable. ROI 15x. next iteration: Factset MCP integration <br></br>Runs on Claude Code (2026) [ <a href="https://github.com/ballyc/company-brief" target="_blank">repo</a>, <a href="https://github.com/ballyc/company-brief/blob/main/SKILL.md" target="_blank">skill.md</a>, <a href="https://github.com/ballyc/company-brief/blob/main/Example/Elevenlabs.md" target="_blank">output example</a> ]</li>
        <li><span className="proj">ITR precision medicine</span>: Built and evaluated a framework for personalized intervention assignment, achieving a 4.0 vs 2.7 improvement in PHQ-9 reduction over random assignment.<br></br> Research paper (Manuscript in progress, 2026) [ <a href="/ITR-research-paper">Abstract</a> ]</li>
      </ul>


      <h2>## Notes, ideas and scratchpads</h2>

      <ul>
        <li><span className="proj">*how-do-you-think*</span> Mini app, trying out Vercel; hints at thinking patterns from structural & linguistic analysis of personal text. <br></br>Uses claude-opus-4-5 (2026) [ <a href="https://how-do-you-think.vercel.app" target="_blank">site</a>, <a href="https://github.com/ballyc/how-do-you-think" target="_blank">repo</a> ]</li>
        <li><a href="#">favorite readings</a> <span className="note-date">— coming soon</span></li>
        <li><a href="#">independent paper:</a> on game theory & the AI Capex hyperscaler race (2025) <span className="note-date">— coming soon</span></li>
      </ul>

    </main>
  )
}