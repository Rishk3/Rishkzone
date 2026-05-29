"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo, getExperience, experiences, skillCategories, existingProjects, featuredProjects } from "@/data/portfolioData";

// ── Knowledge Base ──
const exp = getExperience();

const knowledgeBase = {
  greeting: [
    `Hey! I'm **RishyBot**. Ask me anything — what Rishikesh builds, the tech he works with, or how to reach him. No fluff, just facts.`,
    `Welcome. I know everything about Rishikesh's work, stack, and side projects. What are you curious about?`,
    `Hey — glad you're here. I can walk you through Rishikesh's engineering work, his tools, or his projects. What's on your mind?`,
  ],
  about: [
    `Rishikesh is **${exp.years}+ years** into building production systems. Currently at **Mercedes-Benz R&D** — architecting the platform that runs production planning across plants.\n\nHis stack: **Java, Spring Boot, React, Kafka**. He integrates **LLMs via RAG pipelines** for automated tooling and deploys on **Azure AKS**. Trajectory: fullstack → systems design → applied AI infrastructure.`,
  ],
  experience: [
    `**${exp.years}+ years.** Two companies. Zero hand-holding.\n\n**Mercedes-Benz R&D** (Dec 2024 – now)\nArchitecting the production planning platform. Kafka event pipelines, D3.js dashboards, LLM-powered report generation (RAG + Claude). Deploying on Azure AKS.\n\n**Thoughts2binary** (Oct 2021 – Oct 2024)\nBuilt GraniteStack from scratch — low-code SaaS platform. OpenAI embeddings for field suggestions, Spring Boot APIs, React frontend, CI/CD.`,
  ],
  skills: [
    `Rishikesh's tech stack — built for production, not resumes:\n\n• **Backend:** Spring Boot, Spring Cloud, Spring Data JPA, Node.js, GraphQL, gRPC\n• **Frontend:** React.js, Next.js, Redux, D3.js, Tailwind CSS\n• **Languages:** Java, JavaScript (ES6+), TypeScript, SQL\n• **Messaging:** Apache Kafka, Event-Driven Architecture, Kafka Streams\n• **Databases:** PostgreSQL, Redis, MongoDB, Elasticsearch\n• **AI & ML:** LLM Integration (OpenAI, Claude, Gemini), RAG Pipelines, Vector DBs, LangChain, AI Agents\n• **DevOps:** Docker, Kubernetes, Terraform, GitHub Actions, AWS, Azure`,
  ],
  projects: [
    `Rishikesh has built **${existingProjects.length} live projects** and **${featuredProjects.length} full-stack Spring Boot + React apps**:\n\n**Featured Full-Stack:**\n${featuredProjects.map((p) => `• **${p.title}** — ${p.description.slice(0, 60)}...`).join("\n")}\n\nCheck them out in the Projects section!`,
  ],
  contact: [
    `Best ways to reach Rishikesh:\n\n• **Email:** ${personalInfo.email}\n• **GitHub:** github.com/Rishk3\n• **LinkedIn:** linkedin.com/in/Rishk3\n• **Location:** ${personalInfo.location}\n\nHe reads every message. Seriously.`,
  ],
  mercedes: [
    `At **Mercedes-Benz R&D**, Rishikesh owns the architecture for a platform that automotive engineers depend on daily. He built the **Kafka** event pipeline from scratch, replaced manual reporting with real-time **D3.js dashboards**, and integrated **RAG pipelines with Claude** for automated report generation. Stack: **Spring Boot + Kafka + Azure AKS**.`,
  ],
  kafka: [
    `Rishikesh has deep expertise in **Apache Kafka** and event-driven architecture:\n\n• Designed real-time car-line data ingestion pipelines at Mercedes-Benz\n• Built Producer/Consumer patterns with Kafka Streams\n• Experience with data transformation and spatial aggregation`,
  ],
  ai: [
    `Rishikesh works at the intersection of software engineering and applied AI:\n\n• **LLM Integration** — Production pipelines with OpenAI, Claude, and Gemini APIs\n• **RAG Pipelines** — Retrieval-Augmented Generation with vector databases (Pinecone, Weaviate)\n• **LangChain** — Orchestrating multi-step LLM workflows and tool-use agents\n• **AI Agents** — Building autonomous agents that reason, plan, and execute\n• **Fine-Tuning & Embeddings** — Custom model adaptation and semantic search\n• **SmartResume AI** — One of his featured projects uses AI to analyze resumes`,
  ],
  education: [
    `Rishikesh's professional journey started in **October 2021**, giving him over **${exp.years} years** of industry experience. He's a self-driven engineer who continuously upskills through practical projects, certifications (HackerRank — Problem Solving, Java, Python), and staying current with cutting-edge technologies.`,
  ],
  resume: [
    `You can download Rishikesh's resume from: ${personalInfo.resumeLink}\n\nIt covers his complete professional experience, technical skills, and achievements. You can also click the **"Download Resume"** button in the hero section above!`,
  ],
  fallback: [
    `That's an interesting question! While I might not have a specific answer for that, I can tell you about Rishikesh's **skills**, **experience**, **projects**, or **contact info**. What would you like to explore?`,
    `Hmm, I'm not sure about that one. But I know a lot about Rishikesh's professional journey! Try asking about his **tech stack**, **work at Mercedes-Benz**, or his **Spring Boot + React projects**.`,
    `I'm trained specifically on Rishikesh's portfolio data. Try asking about his **experience**, **skills**, **projects**, or how to **get in touch** with him!`,
  ],
};

// ── Intent Detection ──
function detectIntent(message) {
  const msg = message.toLowerCase().trim();
  if (/^(hi|hello|hey|hola|yo|sup|greetings|howdy|what'?s up)/i.test(msg)) return "greeting";
  if (/resume|cv|download/i.test(msg)) return "resume";
  if (/mercedes|benz|current.*(job|work|company)/i.test(msg)) return "mercedes";
  if (/kafka|event.?driven|streaming|message/i.test(msg)) return "kafka";
  if (/ai|artificial|claude|openai|gpt|llm|machine.?learn/i.test(msg)) return "ai";
  if (/experience|work|career|journey|job|company|companies|history/i.test(msg)) return "experience";
  if (/skill|tech|stack|technology|tools?|language|framework/i.test(msg)) return "skills";
  if (/project|portfolio|built|build|app|application|github|repo/i.test(msg)) return "projects";
  if (/contact|email|phone|reach|hire|connect|social|linkedin|whatsapp/i.test(msg)) return "contact";
  if (/about|who|tell.*about|introduce|summary|background|education|study|cert/i.test(msg))
    return msg.match(/edu|cert|study/) ? "education" : "about";
  return "fallback";
}

function getResponse(intent) {
  const responses = knowledgeBase[intent] || knowledgeBase.fallback;
  return responses[Math.floor(Math.random() * responses.length)];
}

const suggestedQuestions = [
  "Tell me about Rishikesh",
  "What are his skills?",
  "Work experience?",
  "Show me his projects",
  "How to contact him?",
  "Tell me about his AI experience",
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const [streamingId, setStreamingId] = useState(null);
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingText, scrollToBottom]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      simulateResponse("greeting");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const simulateResponse = useCallback((intent) => {
    setIsTyping(true);
    const response = getResponse(intent);
    const typingDelay = 600 + Math.random() * 800;

    setTimeout(() => {
      setIsTyping(false);
      const msgId = Date.now();
      setStreamingId(msgId);
      let charIndex = 0;
      setStreamingText("");

      const streamInterval = setInterval(() => {
        charIndex++;
        setStreamingText(response.slice(0, charIndex));
        if (charIndex >= response.length) {
          clearInterval(streamInterval);
          setStreamingId(null);
          setStreamingText("");
          setMessages((prev) => [...prev, { id: msgId, role: "bot", text: response }]);
        }
      }, 12);
    }, typingDelay);
  }, []);

  const handleSend = useCallback(
    (text) => {
      const msg = (text || input).trim();
      if (!msg || isTyping || streamingId) return;
      setMessages((prev) => [...prev, { id: Date.now(), role: "user", text: msg }]);
      setInput("");
      const intent = detectIntent(msg);
      simulateResponse(intent);
    },
    [input, isTyping, streamingId, simulateResponse]
  );

  const formatText = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-emerald-light font-semibold">$1</strong>')
      .replace(/\n/g, "<br/>");
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-emerald flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-shadow duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer" }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.i
              key="close"
              className="fa-solid fa-xmark text-dark text-xl"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          ) : (
            <motion.i
              key="chat"
              className="fa-solid fa-robot text-dark text-xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              background: "var(--chat-bg, #0d0d0d)",
              border: "1px solid var(--chat-border, rgba(255,255,255,0.06))",
            }}
          >
            {/* Header */}
            <div
              className="px-5 py-4 flex items-center gap-3"
              style={{
                borderBottom: "1px solid var(--chat-border, rgba(255,255,255,0.06))",
                background: "var(--chat-header, rgba(16,185,129,0.05))",
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-emerald/20 flex items-center justify-center">
                <i className="fa-solid fa-robot text-emerald" />
              </div>
              <div className="flex-1">
                <h4 className="font-heading font-semibold text-sm" style={{ color: "var(--chat-text, #fff)" }}>
                  RishkBot
                </h4>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
                  <span className="text-xs" style={{ color: "var(--chat-muted, #71717a)" }}>
                    AI-powered • Ask me anything
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                style={{ color: "var(--chat-muted, #71717a)" }}
              >
                <i className="fa-solid fa-minus text-xs" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-[340px] overflow-y-auto p-4 space-y-3 custom-scrollbar" style={{ scrollBehavior: "smooth" }}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-emerald text-dark rounded-br-md font-medium"
                        : "rounded-bl-md"
                    }`}
                    style={
                      msg.role === "bot"
                        ? { background: "var(--chat-bubble, rgba(255,255,255,0.05))", color: "var(--chat-text, #e4e4e7)" }
                        : undefined
                    }
                    dangerouslySetInnerHTML={msg.role === "bot" ? { __html: formatText(msg.text) } : undefined}
                  >
                    {msg.role === "user" ? msg.text : undefined}
                  </div>
                </motion.div>
              ))}

              {/* Streaming message */}
              {streamingId && streamingText && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
                  <div
                    className="max-w-[85%] px-4 py-2.5 rounded-2xl rounded-bl-md text-sm leading-relaxed"
                    style={{ background: "var(--chat-bubble, rgba(255,255,255,0.05))", color: "var(--chat-text, #e4e4e7)" }}
                    dangerouslySetInnerHTML={{ __html: formatText(streamingText) + '<span class="animate-pulse text-emerald">▊</span>' }}
                  />
                </motion.div>
              )}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="px-4 py-3 rounded-2xl rounded-bl-md flex items-center gap-1" style={{ background: "var(--chat-bubble, rgba(255,255,255,0.05))" }}>
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-2 h-2 rounded-full bg-emerald"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Suggested questions */}
            {messages.filter((m) => m.role === "user").length === 0 && !isTyping && !streamingId && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5" style={{ borderTop: "1px solid var(--chat-border, rgba(255,255,255,0.04))" }}>
                <p className="w-full text-[10px] pt-2 pb-1 uppercase tracking-wider" style={{ color: "var(--chat-muted, #52525b)" }}>
                  Suggested
                </p>
                {suggestedQuestions.slice(0, 4).map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald/10 text-emerald-light border border-emerald/20 hover:bg-emerald/20 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3" style={{ borderTop: "1px solid var(--chat-border, rgba(255,255,255,0.06))" }}>
              <div
                className="flex items-center gap-2 rounded-xl px-4 py-2.5"
                style={{ background: "var(--chat-input, rgba(255,255,255,0.04))", border: "1px solid var(--chat-border, rgba(255,255,255,0.06))" }}
              >
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Ask about Rishikesh..."
                  className="flex-1 bg-transparent outline-none text-sm placeholder:text-zinc-600"
                  style={{ color: "var(--chat-text, #fff)" }}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  disabled={isTyping || !!streamingId}
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isTyping || !!streamingId}
                  className="w-8 h-8 rounded-lg bg-emerald flex items-center justify-center text-dark hover:bg-emerald-light transition-colors disabled:opacity-30"
                >
                  <i className="fa-solid fa-paper-plane text-xs" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
