"use client";

import { useState } from "react";

type OffensiveAIModuleIntroProps = {
  moduleCount: number;
};

export function OffensiveAIModuleIntro({ moduleCount }: OffensiveAIModuleIntroProps) {
  const [expanded, setExpanded] = useState(false);

  const intro = `Dive into 10 structured domains and ${moduleCount} in-depth modules designed to map classic web application pentesting with the power of AI.`;
  const extended =
    "Each module contains practical labs, real-world case studies, and guided use of GPT-driven agents so learners can move from reconnaissance and exploitation to post-exploitation reporting, adversarial AI testing, and custom agent development. The course builds a step-by-step path from foundations to advanced offensive AI workflows, with hands-on repetition that helps students understand how automation supports testing without replacing professional judgment.";

  return (
    <p className="offensive-ai-module-intro mt-4 text-sm leading-7">
      {intro}
      {expanded ? ` ${extended}` : null}{" "}
      <button
        type="button"
        className="offensive-ai-read-toggle font-bold text-red-500 transition-colors duration-200 hover:text-red-400"
        aria-expanded={expanded}
        onClick={() => setExpanded((current) => !current)}
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
    </p>
  );
}
