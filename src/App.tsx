import { useEffect, useState } from "react";
import { links, projects, skills, wins, certs, steps, TODO } from "./data";
import { Mockup, HeroFlow } from "./Mockups";
import Concept from "./Concept";

const nav = [["work", "Work"], ["concept", "Concept"], ["thinking", "Approach"], ["toolkit", "Toolkit"], ["about", "About"], ["contact", "Contact"]];
const reduce = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const words = ["speech pipelines", "accessible interfaces", "workflow tools", "full-stack prototypes"];
const asks = [
  ["What is the person trying to get done?", "Which step do they repeat every day?"],
  ["Is this the cause or only the symptom?", "What would remove the step entirely?"],
  ["What is the smallest version that helps?", "Can it work with tools they already use?"],
  ["Does it save time for a real user?", "What breaks when the input is messy?"],
  ["Could a newcomer use it from the page alone?", "What should the next person know?"],
];

function useFx() {
  const [active, setActive] = useState("top"); const [p, setP] = useState(0);
  useEffect(() => {
    document.documentElement.classList.add("js");
    const on = () => { const h = document.documentElement; setP(h.scrollTop / ((h.scrollHeight - h.clientHeight) || 1)); };
    on(); window.addEventListener("scroll", on, { passive: true });
    const rev = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add("in")), { threshold: .12 });
    const act = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll(".reveal").forEach(el => rev.observe(el));
    document.querySelectorAll("section[id]").forEach(el => act.observe(el));
    return () => { window.removeEventListener("scroll", on); rev.disconnect(); act.disconnect(); };
  }, []);
  return { active, p };
}
function Typer() {
  const [i, setI] = useState(0); const [n, setN] = useState(0); const [del, setDel] = useState(false);
  useEffect(() => {
    if (reduce()) return; const full = n === words[i].length;
    const t = setTimeout(() => { if (!del && full) setDel(true); else if (del && n === 0) { setDel(false); setI((i + 1) % words.length); } else setN(n + (del ? -1 : 1)); }, !del && full ? 1400 : del ? 30 : 65);
    return () => clearTimeout(t);
  }, [n, del, i]);
  return <p className="build"><span className="sr">I build speech pipelines, accessible interfaces, workflow tools and full-stack prototypes.</span><span aria-hidden="true">I build <b>{reduce() ? words[0] : words[i].slice(0, n)}</b><i className="caret" /></span></p>;
}
function CountUp({ to }: { to: number }) {
  const [v, setV] = useState(0);
  useEffect(() => { if (reduce()) { setV(to); return; } let r = 0; const t0 = performance.now();
    const f = (t: number) => { const k = Math.min((t - t0) / 1400, 1); setV(to * (1 - Math.pow(1 - k, 3))); if (k < 1) r = requestAnimationFrame(f); };
    r = requestAnimationFrame(f); return () => cancelAnimationFrame(r); }, [to]);
  return <>{v.toFixed(2)}</>;
}

export default function App() {
  const [open, setOpen] = useState("pennyai"); const [s, setS] = useState(0);
  const { active, p } = useFx();
  useEffect(() => {
    if (reduce()) return;
    const mv = (e: MouseEvent) => { const el = (e.target as HTMLElement).closest<HTMLElement>("[data-tilt]"); if (!el) return; const r = el.getBoundingClientRect(); el.style.transform = `perspective(900px) rotateY(${((e.clientX - r.left) / r.width - .5) * 14}deg) rotateX(${-((e.clientY - r.top) / r.height - .5) * 14}deg) translateZ(10px)`; };
    const out = (e: MouseEvent) => { const el = (e.target as HTMLElement).closest<HTMLElement>("[data-tilt]"); if (el && !el.contains(e.relatedTarget as Node)) el.style.transform = ""; };
    document.addEventListener("mousemove", mv); document.addEventListener("mouseout", out);
    return () => { document.removeEventListener("mousemove", mv); document.removeEventListener("mouseout", out); };
  }, []);
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <div className="progress" style={{ transform: `scaleX(${p})` }} aria-hidden="true" />
      <header className="top"><a href="#top" className="brand">Kshitija Patil</a>
        <nav aria-label="Main">{nav.map(([id, l]) => <a key={id} href={`#${id}`} className={active === id ? "act" : ""} aria-current={active === id ? "true" : undefined}>{l}</a>)}</nav></header>
      <main id="main">
        <section id="top" className="hero" onMouseMove={e => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`); e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`); }}>
          <div>
            <p className="meta">AI generalist and design-engineering portfolio</p>
            <h1>Making AI useful for the people who build what comes next.</h1>
            <Typer />
            <p className="lede">I'm Kshitija Patil, a Computer Science undergraduate exploring how AI, software, and thoughtful interfaces can simplify complex workflows and turn ideas into usable tools.</p>
            <div className="row"><a className="btn" href="#work">Explore my work</a><a className="btn ghost" href={links.resume} target="_blank" rel="noreferrer">View resume</a></div>
            <ul className="facts"><li>SRM Institute of Science and Technology</li><li>B.Tech CSE, Software Engineering</li><li>CGPA <CountUp to={9.05} />/10</li><li>Graduating 2027</li></ul>
          </div>
          <HeroFlow />
        </section>

        <section id="why" className="band reveal"><h2>Built around workflows</h2>
          <p>Good tools start with a clear view of where people lose time. My projects follow that habit: find the friction, build a working tool, and make it easy for others to adopt.</p>
          <p className="fine">I'm an undergraduate student. The outcomes below are the ones listed on my resume.</p></section>

        <section id="work"><h2 className="reveal">Selected work</h2>
          <div className="projects">{projects.map(pr => (
            <article key={pr.id} className="project reveal">
              <div className="phead"><div><h3>{pr.title}</h3><p className="tag">{pr.tag}</p><p>{pr.summary}</p>
                <ul className="chips">{pr.stack.map(x => <li key={x}>{x}</li>)}</ul></div>
                <Mockup id={pr.id} /></div>
              <ol className="flow" aria-label="Workflow">{pr.flow.map(f => <li key={f}>{f}</li>)}</ol>
              <button className="btn ghost" aria-expanded={open === pr.id} aria-controls={`cs-${pr.id}`} onClick={() => setOpen(open === pr.id ? "" : pr.id)}>{open === pr.id ? "Hide case study" : "Read case study"}</button>
              {open === pr.id && <div id={`cs-${pr.id}`} className="case">
                {([["Problem", pr.problem], ["Intended users", pr.users], ["Solution", pr.solution]] as const).map(([h, t]) => <div key={h}><h4>{h}</h4><p>{t}</p></div>)}
                {([["My contribution", pr.contribution], ["Design decisions", pr.decisions], ["Outcome (from resume)", pr.outcome]] as const).map(([h, l]) => <div key={h}><h4>{h}</h4><ul>{l.map(x => <li key={x} className={x.includes("To complete") ? "todo" : ""}>{x}</li>)}</ul></div>)}
                <div><h4>Limitations and next steps</h4><p className="todo">{pr.limits}</p></div>
                <p className="fine">Repository and demo links: {TODO} Links are shown only once they exist.</p>
              </div>}
            </article>))}
          </div>
        </section>

        <section id="concept" className="reveal"><h2>AI Design Workflow Assistant <span className="badge">Concept</span></h2>
          <ol className="flow" aria-label="Concept workflow">{["Design brief", "Structured requirements", "AI tool exploration", "Concept review", "Documentation"].map(f => <li key={f}>{f}</li>)}</ol>
          <Concept /></section>

        <section id="thinking" className="reveal"><h2>From friction to flow</h2>
          <p className="fine">My problem-solving framework. It describes how I work, not prior employment.</p>
          <div className="stepper" role="tablist" aria-label="Process steps">{steps.map(([t], i) => <button key={t} role="tab" aria-selected={s === i} className={i <= s ? "on" : ""} onClick={() => setS(i)}><span>{i + 1}</span>{t}</button>)}</div>
          <div className="track" aria-hidden="true"><i style={{ width: `${s * 25}%` }} /></div>
          <div role="tabpanel" className="stepbody" key={s}><h3>{steps[s][0]}</h3><p>{steps[s][1]}</p><ul>{asks[s].map(a => <li key={a}>{a}</li>)}</ul>
            <div className="row"><button className="btn ghost" disabled={s === 0} onClick={() => setS(s - 1)}>Previous</button><button className="btn" disabled={s === 4} onClick={() => setS(s + 1)}>Next step</button></div></div></section>

        <section id="toolkit" className="reveal"><h2>Technical toolkit</h2>
          <div className="skills">{skills.map(([c, l]) => <div key={c} tabIndex={0} data-tilt><h3>{c}</h3><p>{l.join(", ")}</p></div>)}</div>
          <p className="fine">Still to learn: design and visualisation tools. These are learning goals, not current skills.</p>
          <h3 className="sub">Achievements</h3>
          <div className="wins">{wins.map(([a, b]) => <div key={a} tabIndex={0} data-tilt><strong>{a}</strong><span>{b}</span></div>)}</div>
          <ul className="certs">{certs.map(c => <li key={c}>{c}</li>)}</ul></section>

        <section id="about" className="reveal"><h2>About</h2>
          <p className="lede">I study Computer Science with a Software Engineering focus at SRM. I like the part of a project where separate components, such as a speech model, an API and a database, become one thing a person can use. PennyAI and Learnscribe both started from a person who was badly served by the existing tool.</p>
          <p className="lede">I'd like to apply that to creative and engineering workflows: watch how people work, find the step that wastes their time, and build the smallest tool that fixes it.</p></section>
      </main>
      <footer id="contact" className="reveal"><h2>Have a workflow worth rethinking?</h2>
        <ul className="row links"><li><a className="btn" href={`mailto:${links.email}`}>{links.email}</a></li>
          <li><a className="btn ghost" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a className="btn ghost" href={links.github} target="_blank" rel="noreferrer">GitHub</a></li></ul>
        <p className="fine">Kshitija Patil. Built with React and TypeScript.</p></footer>
    </>
  );
}
