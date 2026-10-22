import { useMemo, useState } from "react";
// Rule-based prototype. No AI API is connected: it parses the brief with keyword rules and templates.
const SAMPLE = "Design a compact urban commuter concept with a premium matte finish. Riders are city commuters who need under-seat storage. It must feel lightweight and approachable. Explore blue and graphite colour options.";
const CRITERIA = ["Meets the brief", "Feasibility", "Visual distinctiveness", "Usability for the rider"];
const TOOLS = ["an AI ideation / sketch tool", "an AI image-visualisation tool"];

function parse(brief: string) {
  const s = brief.split(/(?<=[.!?])\s+/).map(x => x.trim()).filter(Boolean);
  const pick = (re: RegExp) => s.filter(x => re.test(x));
  return {
    goal: s[0] ?? "",
    users: pick(/rider|user|commut|customer|audience|for /i),
    musts: pick(/\b(must|should|need|require|under|at least|no more)\b/i),
    style: pick(/feel|finish|premium|matte|gloss|minimal|style|aesthetic|approachable|lightweight/i),
    cmf: pick(/colou?r|material|finish|texture|graphite|blue|matte|gloss/i),
  };
}
const uniq = (a: string[]) => [...new Set(a)];

export default function Concept() {
  const [brief, setBrief] = useState(SAMPLE);
  const [scores, setScores] = useState<Record<string, [number, number]>>({});
  const [notes, setNotes] = useState("");
  const [copied, setCopied] = useState("");
  const p = useMemo(() => parse(brief), [brief]);
  const reqs: [string, string[]][] = [["Goal", [p.goal]], ["Users", p.users], ["Constraints", p.musts], ["Look and feel", p.style], ["Colour and material", p.cmf]];
  const prompts = TOOLS.map((t, i) => `Prompt for ${t}:\n${i ? "Render " : "Sketch ideas for "}${p.goal.replace(/\.$/, "")}. ${uniq([...p.users, ...p.musts]).join(" ")} Keep it consistent with: ${uniq([...p.style, ...p.cmf]).join(" ") || "no style notes given"}`);
  const total = (k: 0 | 1) => CRITERIA.reduce((a, c) => a + (scores[c]?.[k] ?? 0), 0);
  const md = `# Design brief summary (illustrative output)\n\n## Brief\n${brief}\n\n## Requirements\n${reqs.map(([h, l]) => `- ${h}: ${l.filter(Boolean).join(" ") || "not stated"}`).join("\n")}\n\n## Prompts\n${prompts.join("\n\n")}\n\n## Concept review (score 1-5)\n${CRITERIA.map(c => `- ${c}: A ${scores[c]?.[0] ?? "-"}, B ${scores[c]?.[1] ?? "-"}`).join("\n")}\n- Total: A ${total(0)}, B ${total(1)}\n\n## Decision notes\n${notes || "none yet"}\n`;
  const copy = async (text: string, key: string) => { try { await navigator.clipboard.writeText(text); setCopied(key); setTimeout(() => setCopied(""), 1800); } catch { setCopied("failed"); } };
  const download = () => { const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([md], { type: "text/markdown" })); a.download = "design-brief.md"; a.click(); URL.revokeObjectURL(a.href); };
  return (
    <div className="tool">
      <p className="notice"><strong>Concept, not a shipped product.</strong> This prototype uses simple keyword rules, so no generative AI is connected. It is an independent portfolio idea.</p>
      <div className="grid2">
        <div>
          <label htmlFor="brief">1. Design brief</label>
          <textarea id="brief" rows={7} value={brief} onChange={e => setBrief(e.target.value)} />
          <h4>2. Structured requirements</h4>
          <dl>{reqs.map(([h, l]) => <div key={h}><dt>{h}</dt><dd>{l.filter(Boolean).join(" ") || "Not found in the brief."}</dd></div>)}</dl>
        </div>
        <div>
          <h4>3. Prompts for external AI tools</h4>
          {prompts.map((x, i) => <pre key={i}>{x}</pre>)}
          <button className="btn ghost" onClick={() => copy(prompts.join("\n\n"), "p")}>{copied === "p" ? "Copied" : "Copy prompts"}</button>
          <h4>4. Compare two concepts (1 to 5)</h4>
          <table><thead><tr><th>Criterion</th><th>Concept A</th><th>Concept B</th></tr></thead><tbody>
            {CRITERIA.map(c => <tr key={c}><td>{c}</td>{[0, 1].map(k => <td key={k}><select aria-label={`${c}, concept ${k ? "B" : "A"}`} value={scores[c]?.[k] ?? 0} onChange={e => { const cur: [number, number] = [...(scores[c] ?? [0, 0])] as [number, number]; cur[k] = +e.target.value; setScores({ ...scores, [c]: cur }); }}><option value={0}>-</option>{[1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>)}</select></td>)}</tr>)}
            <tr><td><strong>Total</strong></td><td>{total(0)}</td><td>{total(1)}</td></tr>
          </tbody></table>
        </div>
      </div>
      <label htmlFor="notes">5. Decision notes</label>
      <textarea id="notes" rows={3} value={notes} onChange={e => setNotes(e.target.value)} placeholder="Why did you choose one direction?" />
      <div className="row"><button className="btn" onClick={() => copy(md, "m")}>{copied === "m" ? "Copied" : "Copy brief as Markdown"}</button><button className="btn ghost" onClick={download}>Download .md</button>{copied === "failed" && <span role="alert">Copy was blocked. Use Download instead.</span>}</div>
    </div>
  );
}
