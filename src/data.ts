// All content below comes from the resume. Items marked TODO need your own input.
export const links = {
  email: "kshitijap80@gmail.com",
  linkedin: "https://linkedin.com/in/kshitija-patil1888",
  github: "https://github.com/kshitija1888",
  resume: "./Kshitija_Patil_Resume.pdf",
};
export const TODO = "To complete: add your own detail here.";

export interface Project {
  id: string; title: string; tag: string; stack: string[]; summary: string;
  flow: string[]; problem: string; users: string; solution: string;
  contribution: string[]; decisions: string[]; outcome: string[]; limits: string;
}
export const projects: Project[] = [
  {
    id: "pennyai", title: "PennyAI", tag: "Multilingual AI financial assistant",
    stack: ["Python", "Whisper.cpp", "Ollama", "Hugging Face", "MySQL"],
    summary: "Ask a money question out loud, in your own language, and get a budgeting recommendation back.",
    flow: ["User query", "Speech recognition", "AI processing", "Recommendation", "Interface"],
    problem: "Financial guidance is hard to reach when it only works in one language and only by typing.",
    users: "Everyday users who want budgeting help in a language they are comfortable with.",
    solution: "A speech-to-text pipeline feeds local and open models, which return automated budgeting recommendations through a multilingual interface.",
    contribution: ["Architected the assistant with Python, Whisper.cpp, Ollama and Hugging Face models", "Built the speech-to-text pipeline for financial queries", "Designed the multilingual interface"],
    decisions: ["Speech input lowers the barrier for typing-averse users", "Open and local model tooling keeps the pipeline inspectable", TODO],
    outcome: ["35% shorter manual financial-query resolution time (resume)", "Recommendations generated for 100+ users (resume)", "30% better financial literacy accuracy; 3+ languages (resume)"],
    limits: "Evaluation method behind each figure: " + TODO + " Next steps: " + TODO,
  },
  {
    id: "learnscribe", title: "Learnscribe", tag: "Assistive learning platform",
    stack: ["React.js", "Node.js", "Express.js", "MySQL", "MediaPipe", "Whisper.cpp"],
    summary: "A learning platform that listens, watches gestures and reads lip movement so more people can take part.",
    flow: ["Learner input", "Speech / gesture / lip analysis", "REST API", "Progress store", "Personalised module"],
    problem: "Standard learning tools assume that learners can hear, speak and type without friction.",
    users: "Learners with speech and hearing impairments, plus general learners who want personalised modules.",
    solution: "A full-stack platform that combines speech recognition, gesture detection and lip-movement analysis with secure login and progress tracking.",
    contribution: ["Built the full stack with React.js, Node.js, Express.js and MySQL", "Integrated MediaPipe and Whisper.cpp input methods", "Delivered secure authentication and personalised modules via REST APIs"],
    decisions: ["Several input modes instead of one, so users pick what works for them", "Progress data kept in a relational database for reliable tracking", TODO],
    outcome: ["Adopted by 200+ learners (resume)", "25% higher task-completion rate via MediaPipe and Whisper.cpp (resume)", "30% higher engagement and progress-tracking accuracy (resume)"],
    limits: "Accessibility testing approach: " + TODO + " Next steps: " + TODO,
  },
  {
    id: "resunet", title: "Brain tumour segmentation", tag: "ResUNet on MRI scans",
    stack: ["Python", "Deep Learning", "ResUNet"],
    summary: "A deep learning model that outlines tumour regions in MRI scans.",
    flow: ["MRI scans + masks", "Preprocessing", "ResUNet training", "Segmentation", "Dice / IoU"],
    problem: "Marking tumour regions by hand is slow, and models need cleanly prepared data to learn from.",
    users: "Researchers exploring automated segmentation (not a clinical tool).",
    solution: "A ResUNet-based model trained on preprocessed MRI images and tumour masks.",
    contribution: ["Developed the ResUNet segmentation model", "Preprocessed MRI images and tumour masks", "Evaluated results with Dice Score and IoU"],
    decisions: [TODO],
    outcome: ["Dice Score and IoU used for evaluation. Add your actual scores: " + TODO],
    limits: "Dataset, scores and limitations: " + TODO,
  },
];
export const skills: [string, string[]][] = [
  ["Programming", ["Python", "JavaScript", "C", "C++", "Java", "SQL"]],
  ["AI / ML", ["Whisper.cpp", "Ollama", "Hugging Face", "Deep learning"]],
  ["Frontend", ["HTML", "CSS", "React.js"]],
  ["Backend", ["Node.js", "Express.js", "REST APIs"]],
  ["Databases", ["MySQL", "PostgreSQL"]],
  ["Data and visualisation", ["Pandas", "NumPy", "Matplotlib"]],
  ["Cloud and tools", ["AWS", "Git", "GitHub", "Jupyter Notebook"]],
];
export const wins = [
  ["First Place", "Innovatrix Hackathon 2025, ACM-W SRM"],
  ["Best Product Idea", "Ossome Hacks 2.0, GitHub Community SRM"],
  ["EdTech Track Winner", "Ossome Hacks 2.0"],
  ["Advanced to Internal Round", "Smart India Hackathon 2024"],
];
export const certs = ["AWS Certified AI Practitioner", "AWS Certified Cloud Practitioner", "Salesforce Certified Agentforce Specialist", "Oracle Certified Foundations Associate", "MATLAB Image Processing (MathWorks)", "Cybersecurity Essentials (Tata STRIVE)"];
export const steps = [
  ["Observe", "Understand the user, the context and the repetitive task."],
  ["Identify", "Find the bottleneck. Separate the symptom from the underlying problem."],
  ["Prototype", "Build the smallest practical tool or workflow."],
  ["Test", "Check usability, reliability and the quality of the output."],
  ["Document", "Write clear instructions so others can adopt the solution."],
];
