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
        <li><span className="proj">*/company-brief*</span>: Custom skill; analyzes companies. Reports saved in Obsidian. Indexed + searchable. ROI 15x.<br></br>Runs on Claude Code (2026) [ <a href="https://github.com/ballyc/company-brief" target="_blank">repo</a>, <a href="https://github.com/ballyc/company-brief/blob/main/SKILL.md" target="_blank">skill.md</a>, <a href="https://github.com/ballyc/company-brief/blob/main/Example/Hebbia.md" target="_blank">output example with Hebbia</a> ]</li>
        <li><span className="proj">*how-do-you-think*</span> Mini app, just trying out Vercel for fun; input an introspective note, returns insight on your thinking patterns. from simple prompt (yet engineered by 170 psycho-analytics string data as input). <br></br>Runs on vercel + uses claude-opus-4-5 (2026) [ <a href="https://how-do-you-think.vercel.app" target="_blank">site</a>, <a href="https://github.com/ballyc/how-do-you-think" target="_blank">repo</a> ]</li>
      </ul> 


      <h2>## Notes, ideas and scratchpads</h2>

      <ul>
        <li><a href="#">favorite readings</a> <span className="note-date">— coming soon</span></li>
        <li><a href="#">independent paper:</a> on game theory & the AI Capex hyperscaler race <span className="note-date">— coming soon</span></li>
      </ul>

    </main>
  )
}