import { useEffect, useState } from "react";
// Original illustrative mockups drawn in SVG. They are NOT screenshots of the real projects.
const C = { bg: "var(--bg)", line: "var(--line)", fg: "var(--fg)", dim: "var(--dim)", g: "var(--g)" };
export function Mockup({ id }: { id: string }) {
  const tilt = (e: React.MouseEvent<HTMLElement>) => { const r = e.currentTarget.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; e.currentTarget.style.transform = `perspective(800px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateZ(20px)`; };
  return (
    <figure className="mock" onMouseMove={tilt} onMouseLeave={e => (e.currentTarget.style.transform = "")}>
      <svg viewBox="0 0 480 300" role="img" aria-label={`Illustrative interface mockup for ${id}`}>
        <rect width="480" height="300" rx="8" fill={C.bg} stroke={C.line} />
        {id === "pennyai" && (<g>
          <rect x="20" y="20" width="270" height="260" rx="6" fill="none" stroke={C.line} />
          <rect x="36" y="38" width="170" height="34" rx="6" fill={C.line} />
          <rect x="52" y="52" width="110" height="5" fill={C.dim} />
          <rect x="104" y="86" width="170" height="46" rx="6" fill={C.g} opacity=".16" stroke={C.g} />
          <rect x="118" y="100" width="130" height="5" fill={C.fg} /><rect x="118" y="112" width="90" height="5" fill={C.fg} opacity=".6" />
          {[...Array(24)].map((_, i) => <rect key={i} className="wave" style={{ animationDelay: `${i * 70}ms` }} x={40 + i * 9} y={170 - ((i * 37) % 22)} width="4" height={8 + ((i * 37) % 44)} fill={C.g} opacity={0.35 + (i % 4) * 0.15} />)}
          <rect x="36" y="238" width="238" height="28" rx="14" fill="none" stroke={C.line} /><circle cx="256" cy="252" r="9" fill={C.g} />
          <text x="312" y="44" fill={C.dim} fontSize="11">Monthly plan (sample data)</text>
          {[["Rent", 150], ["Food", 100], ["Travel", 60], ["Savings", 120]].map(([l, w], i) => <g key={l as string}><text x="312" y={78 + i * 34} fill={C.fg} fontSize="11">{l}</text><rect x="312" y={84 + i * 34} width="150" height="6" fill={C.line} /><rect x="312" y={84 + i * 34} width={w as number} height="6" fill={C.g} /></g>)}
          {["EN", "HI", "MR"].map((l, i) => <g key={l}><rect x={312 + i * 50} y="236" width="40" height="22" rx="11" fill="none" stroke={i ? C.line : C.g} /><text x={322 + i * 50} y="251" fill={C.fg} fontSize="11">{l}</text></g>)}
        </g>)}
        {id === "learnscribe" && (<g>
          <rect x="20" y="20" width="90" height="260" rx="6" fill="none" stroke={C.line} />
          {[0, 1, 2, 3].map(i => <rect key={i} x="32" y={40 + i * 30} width="66" height="14" rx="3" fill={i === 1 ? C.g : C.line} opacity={i === 1 ? 0.5 : 1} />)}
          <rect x="126" y="20" width="200" height="120" rx="6" fill="none" stroke={C.line} />
          <circle cx="226" cy="80" r="30" fill="none" stroke={C.line} strokeWidth="8" /><circle cx="226" cy="80" r="30" fill="none" stroke={C.g} strokeWidth="8" strokeDasharray="120 200" transform="rotate(-90 226 80)" />
          <text x="150" y="130" fill={C.dim} fontSize="10">Module progress (sample)</text>
          <rect x="126" y="156" width="200" height="124" rx="6" fill="none" stroke={C.line} />
          <rect x="140" y="172" width="120" height="8" fill={C.fg} /><rect x="140" y="190" width="170" height="5" fill={C.dim} /><rect x="140" y="202" width="150" height="5" fill={C.dim} />
          <rect x="140" y="234" width="90" height="28" rx="4" fill={C.g} />
          <rect x="342" y="20" width="118" height="260" rx="6" fill="none" stroke={C.line} />
          <text x="354" y="42" fill={C.fg} fontSize="11">Accessibility</text>
          {["Voice", "Gesture", "Lip reading", "Large text"].map((l, i) => <g key={l}><text x="354" y={74 + i * 38} fill={C.dim} fontSize="10">{l}</text><rect x="420" y={62 + i * 38} width="30" height="16" rx="8" fill={i < 3 ? C.g : C.line} /><circle cx={i < 3 ? 442 : 428} cy={70 + i * 38} r="6" fill={C.bg} /></g>)}
        </g>)}
        {id === "resunet" && (<g>
          {[0, 1, 2].map(i => <g key={i}>
            <rect x={20 + i * 152} y="30" width="140" height="200" rx="4" fill="var(--bg)" stroke={C.line} />
            <ellipse cx={90 + i * 152} cy="130" rx="52" ry="68" fill="var(--line)" stroke="var(--dim)" />
            <ellipse cx={90 + i * 152} cy="130" rx="30" ry="42" fill="var(--dim)" opacity=".35" />
            {i > 0 && <ellipse cx={104 + i * 152} cy="116" rx="15" ry="13" fill={C.g} opacity={i === 2 ? 0.75 : 0.25} stroke={C.g} />}
            <text x={20 + i * 152} y="250" fill={C.dim} fontSize="11">{["Input slice", "Overlay", "Predicted mask"][i]}</text></g>)}
          <text x="20" y="278" fill={C.fg} fontSize="11">Synthetic illustration only. Not real patient data or model output.</text>
        </g>)}
      </svg>
      <figcaption>Illustrative mockup, not a real screenshot.</figcaption>
    </figure>
  );
}
const STAGES = [["Brief", "Start from the real task someone is trying to finish."], ["Friction", "Find where time and effort are being lost."], ["Tool", "Build the smallest thing that removes that friction."], ["Test", "Try it, watch what breaks, and improve it."], ["Docs", "Write it down so other people can use it."]];
export function HeroFlow() {
  const [i, setI] = useState(0); const [hold, setHold] = useState(false); const [m, setM] = useState([0, 0]);
  useEffect(() => { if (hold || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; const t = setInterval(() => setI(x => (x + 1) % 5), 2600); return () => clearInterval(t); }, [hold]);
  return (
    <div className="heroflow" onMouseEnter={() => setHold(true)} onFocus={() => setHold(true)} onBlur={() => setHold(false)}
      onMouseLeave={() => { setHold(false); setM([0, 0]); }}
      onMouseMove={e => { const r = e.currentTarget.getBoundingClientRect(); setM([(e.clientX - r.left) / r.width - .5, (e.clientY - r.top) / r.height - .5]); }}>
      <div className="scene3d" aria-hidden="true"><div className="world" style={{ transform: `rotateX(${58 - m[1] * 14}deg) rotateZ(${-38 + m[0] * 18}deg)` }}><div className="spin">
        {STAGES.map(([t], k) => <button key={t} tabIndex={-1} className={`plate ${k <= i ? "on" : ""} ${k === i ? "cur" : ""}`} style={{ "--z": `${k * 44}px` } as React.CSSProperties} onClick={() => setI(k)}><b>{k + 1}</b><i /><i /></button>)}
      </div></div></div>
      <div className="legend" role="group" aria-label="Workflow stages">{STAGES.map(([t], k) => <button key={t} className={k === i ? "cur" : ""} aria-pressed={k === i} onClick={() => setI(k)}>{t}</button>)}</div>
      <p className="stage"><strong>{STAGES[i][0]}.</strong> {STAGES[i][1]}</p>
    </div>
  );
}
