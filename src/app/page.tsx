export default function Home() {
  return (
    <main>

      <h1># Chloe Bally</h1>

      <ul>
        <li>Email: <a href="mailto:ballyc@umich.edu">ballyc@umich.edu</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/chloe-bally">chloe-bally</a></li>
        <li>Github: <a href="https://github.com/ballyc">ballyc</a></li>
      </ul>

      <h2>## Projects</h2>

      <ul>
        <li><span className="proj">*/company-brief*</span>: Custom skill; automates the company research-to-briefing process. Reports saved in Obsidian, indexed and searchable. ROI 15x.<br></br>Runs on Claude Code (2026) [ <a href="https://github.com/ballyc/company-brief" target="_blank">repo</a>, <a href="https://github.com/ballyc/company-brief/blob/main/SKILL.md" target="_blank">skill.md</a>, <a href="https://github.com/ballyc/company-brief/blob/main/Example/Elevenlabs.md" target="_blank">output example</a> ]</li>
        <li><span className="proj">Research paper (WIP, 2026)</span>: Built and evaluated a framework for personalized intervention assignment, achieving a 4.0 vs 2.7 improvement in PHQ-9 reduction over random assignment. [ <a href="/ITR-research-paper">Abstract</a> ]</li>
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