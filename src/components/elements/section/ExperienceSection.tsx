import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ExperienceSection() {
  const eduRef = useRef(null);
  const expRef = useRef(null);
  const educationData = `
    {
      "période": "Avril 2024 - Decembre 2026",
      "institution": "Université Assane SECK de Ziguinchor",
      "programme": "Licence - Ingénierie Informatique"
    },
    {
      "période": "October 2020 - Juin 2023",
      "institution": "Lycée Technique Seydina Limamou LAYE",
      "programme": "Baccalauréat Technique Série T2"
    }`;
  const experienceData = `    
    {
  "période": "À ce jour",
  "poste": "Développeur en formation",
  "entreprise": "Projets académiques",
  "statut": "Sans expérience professionnelle",
  "type": "Académique",
  "missions": [
    "Développement web",
    "Conception logicielle",
    "Bases de données",
    "Réseaux"
  ],
  "technologies": [
    "React",
    "TypeScript",
    "PHP",
    "Java",
    "MySQL"
  ],
  "objectif": "Premier stage"
}`;

  useEffect(() => {
    gsap.fromTo(
      eduRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
    );
    gsap.fromTo(
      expRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" },
    );
  }, []);

  return (
    <div className="w-full sm:h-full flex justify-around sm:overflow-y-auto text-[#d4d4d4] p-4 rounded-lg max-sm:flex-col">
      <div ref={eduRef} className="flex flex-col">
        <h3 className="text-3xl font-bold text-[#ED816C]">Education</h3>
        <SyntaxHighlighter
          language="json"
          style={{
            ...vscDarkPlus,
            'pre[class*="language-"]': {
              ...vscDarkPlus['pre[class*="language-"]'],
              background: "transparent",
              fontSize: "20px",
              lineHeight: "1.2",
              padding: "0",
            },
          }}
        >
          {educationData}
        </SyntaxHighlighter>
      </div>
      <div ref={expRef} className="flex flex-col">
        <h3 className="text-3xl font-bold text-[#ED816C]">
          Expérience professionnelle
        </h3>
        <SyntaxHighlighter
          language="json"
          style={{
            ...vscDarkPlus,
            'pre[class*="language-"]': {
              ...vscDarkPlus['pre[class*="language-"]'],
              background: "transparent",
              fontSize: "20px",
              lineHeight: "1.2",
              padding: "0",
            },
          }}
        >
          {experienceData}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
