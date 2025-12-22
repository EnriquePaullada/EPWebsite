import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, XCircle, Lightbulb, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '@/components/shared/Section';
import AgentCard from '@/components/gp-data/AgentCard';
import usePageEngagement from '@/hooks/usePageEngagement';

const GPData = () => {
  usePageEngagement();
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <Helmet>
        <title>AI Sales Automation Platform | Case Study</title>
        <meta name="description" content="Deep dive into the architecture and development of an autonomous AI sales agent leveraging Python, LLMs, and WhatsApp." />
      </Helmet>

      <div className="min-h-screen bg-white pt-20">
        {/* HERO */}
        <div className="bg-[#1A2A40] text-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="heading-serif text-4xl md:text-6xl font-bold mb-6">
              AI Sales Automation Platform
            </motion.h1>
            
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="body-serif text-xl md:text-2xl text-gray-300 leading-relaxed">
              Multi-agent, WhatsApp-native sales engine that engages leads, qualifies them with context, 
              and drives scheduled appointments; reliable, explainable, and aligned to real business constraints.
            </motion.p>
            
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="body-serif text-xl md:text-2xl text-gray-100 leading-relaxed italic border-l-4 border-gray-500 pl-4 mt-4">
              "When your pipeline volume exceeds your team's bandwidth, AI automation isn't optional — it's survival."
            </motion.p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              {["Python", "GCP", "n8n", "MongoDB", "FastAPI", "Maximize Ad Spend", "Enhanced Sales Teams"].map(tech => (
                <span key={tech} className="px-3 py-1 rounded-full text-sm border border-gray-500 text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* THE PROBLEM */}
        <Section title="The Problem">
          <p className="body-serif text-lg text-gray-700 leading-relaxed mb-6">
            Modern sales teams are overwhelmed. Inbound digital leads pour into increasingly complex CRMs 
            every second of the day and expect perfect responses, but human SDRs (Sales Development Representatives) 
            have limited hours, energy and emotional resources.
          </p>
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <h3 className="font-bold text-red-800 mb-2">Key Pain Points Identified:</h3>
            <ul className="list-disc list-inside space-y-2 text-red-700">
              <li><strong>Speed to Lead:</strong> Biggest predictor of lead conversion.</li>
              <li><strong>Inconsistency:</strong> Qualification criteria applied subjectively by different reps.</li>
              <li><strong>Data Loss:</strong> Critical conversation details never made it into the CRM.</li>
              <li><strong>Cost:</strong> Scaling human SDR teams is expensive and slow.</li>
              <li><strong>Burnout:</strong> SDRs drained by tire-kickers, toxic leads, and increasing expectations.</li>
            </ul>
          </div>
        </Section>

        {/* THE OBJECTIVE */}
        <Section title="The Objective" className="bg-gray-50">
          <p className="body-serif text-lg text-gray-700 leading-relaxed mb-4">
            <strong>Automate 80% of the repetitive, time-consuming work that keeps sales teams from actually selling</strong> 
            without replacing the human relationships that close deals.
          </p>
          <p className="body-serif text-lg text-gray-700 leading-relaxed">
            The system needed to behave like a <strong>Digital SDR</strong>: engage new leads instantly, nurture them, 
            answer questions, follow up with perfect reliability, and schedule qualified conversations autonomously.
            <br /><br />
            <strong>Human handoff</strong>: When intent is high, or the situation is ambiguous, the system passes 
            a fully warmed-up, well-documented lead to a human rep to drive the sale home.
          </p>
        </Section>

        {/* THE SOLUTION */}
        <Section title="The Solution">
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { src: 'https://res.cloudinary.com/dzzm0mrjx/image/upload/v1765919896/whatsapp-demo-Ao7Df_qzpfyo.webp', alt: 'AI WhatsApp conversation', title: 'Lead Engagement & Qualification', desc: 'AI engages new leads instantly, asks contextual questions, handles objections, and schedules meetings naturally.' },
              { src: 'https://res.cloudinary.com/dzzm0mrjx/image/upload/v1765919896/lead_document-xTF7U_w1i02f.webp', alt: 'Lead state document', title: 'Transparent Memory & Lead State', desc: 'Every message updates a richly unstructured lead profile: state, qualification signals, extracted fields, constraints, and next actions — enabling predictable and explainable AI reasoning.' },
              { src: 'https://res.cloudinary.com/dzzm0mrjx/image/upload/v1765919897/architecture-dkcYe_pwhtqf.svg', alt: 'AI system architecture diagram', title: 'Distributed Multi-Agent Architecture', desc: 'Secure intake layer → agentic reasoning workflow → reliable scheduling → human handoff. Each layer is modular, debuggable, and designed for real-world scale.' },
              { src: 'https://res.cloudinary.com/dzzm0mrjx/image/upload/v1765919896/slack_escalation-yTfjX_zv4hod.webp', alt: 'Slack human handoff alert', title: 'Human Handoff & Escalation', desc: 'When intent is high or the AI is uncertain, the system hands off the lead — fully warmed-up and summarized — to a human rep. AI handles the 80% grind; humans finish the sale.' }
            ].map((item, idx) => (
              <div key={idx} className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 cursor-zoom-in hover:shadow-xl transition-all duration-300" onClick={() => setLightbox({ src: item.src, alt: item.alt })}>
                <img src={item.src} alt={item.alt} className="w-full h-64 object-cover group-hover:scale-[1.02] transition-transform duration-300" />
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-[#1A2A40] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* MEET THE TEAM */}
        <Section title="Meet the Team - The AI Engines" className="bg-gray-50">
          <div className="space-y-6">
            <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
              The platform's driving forces are three specialized AI agents, each handling a distinct layer of the conversation. 
              This isn't a single monolithic AI—it's a coordinated system where each agent has clear responsibilities, tools 
              and communicates through richly unstructured data.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-10 md:grid-rows-1">
              <AgentCard 
                icon="⚡" name="Classifier" role="Intelligence Gatherer" borderColor="border-blue-500" bulletColor="text-blue-500" highlightColor="text-blue-600"
                compactBullets={['Captures conversational nuance', 'Bilingual support', 'Extracts unstructured intelligence']}
                fullContent={{
                  whatItDoes: 'Analyzes every incoming message with full conversation context to classify intent (10 categories), sentiment (5 types), urgency, language (Spanish/English/mixed), and engagement level.',
                  whyItMatters: 'Strategic decisions require accurate intelligence. The Classifier extracts enriched message data with confidence-scored classifications.',
                  keyCapability: 'Bilingual classification with context awareness.',
                  techHighlights: ['10 intent categories × 7 topics', 'Multi-dimensional classification', 'Context-aware extraction']
                }}
              />
              <AgentCard 
                icon="🧠" name="Strategic Director" role="Strategic Brain" borderColor="border-[#D4AF37]" bulletColor="text-[#D4AF37]" highlightColor="text-[#D4AF37]"
                compactBullets={['Encodes unique sales process', 'Directs system actions', 'Guides Communication Executor']}
                fullContent={{
                  whatItDoes: 'Converts raw conversational data into strategic commands. Manages BANT qualification, orchestrates demo scheduling through a 6-step state machine.',
                  whyItMatters: 'Decides WHAT to say and WHY based on sales stage. Calls availability tools to build smart scheduling flows.',
                  keyCapability: 'Scheduling state machine with 6 steps: idle → days_offered → awaiting_city → times_offered → awaiting_email → confirmed.',
                  techHighlights: ['6-stage sales progression', 'Tool orchestration', 'Sparse JSON output']
                }}
              />
              <AgentCard 
                icon="💬" name="Communication Executor" role="Alena Gomez" borderColor="border-green-500" bulletColor="text-green-500" highlightColor="text-green-600"
                compactBullets={['Specialized copywriter', 'Compliance enforcement', 'Auto-schedules follow-ups']}
                fullContent={{
                  whatItDoes: 'Executes strategic direction. Crafts 1-3 sentence WhatsApp-optimized messages that match lead energy, maintains brand voice, enforces compliance.',
                  whyItMatters: 'High-touch messages for maximum human-impact. Compliance gate and quality control layers.',
                  keyCapability: 'Default follow-up scheduling for every interaction.',
                  techHighlights: ['Agreement level + feedback loop', 'Voice integration (ElevenLabs + Twilio)', 'MCP Server for scheduling']
                }}
              />
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#1A2A40] mt-8">
              <p className="text-gray-700 leading-relaxed">
                <strong>Why multi-agent architecture?</strong> Each agent specializes in one problem domain. 
                This separation of concerns makes the system debuggable, testable, and maintainable—critical for production AI.
              </p>
            </div>
          </div>
        </Section>

        {/* TECHNICAL EVOLUTION */}
        <Section title="Technical Evolution">
          <div className="space-y-8">
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 -translate-x-1/2"></div>
              
              {/* V1 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center mb-16">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-xl font-bold text-[#1A2A40] mb-2">Full Python + GCP-native + Airtable</h3>
                  <p className="text-gray-600 mb-3">Complete service-based architecture: 14 cloud services.</p>
                  <p className="text-green-600 text-sm mb-1">✓ Technically sophisticated, full control</p>
                  <p className="text-red-600 text-sm">→ Overengineered for bootstrapped 0→1.</p>
                </div>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-400 text-white flex items-center justify-center font-bold text-lg z-10 my-4 md:my-0 md:absolute md:left-1/2 md:-translate-x-1/2">1</div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>

              {/* V2 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center mb-16">
                <div className="hidden md:block md:w-1/2"></div>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-500 text-white flex items-center justify-center font-bold text-lg z-10 my-4 md:my-0 md:absolute md:left-1/2 md:-translate-x-1/2">2</div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <h3 className="text-xl font-bold text-[#1A2A40] mb-2">Make.com + Cloud Run + Airtable</h3>
                  <p className="text-gray-600 mb-3">No-code experiment: visual workflows, 10x iteration.</p>
                  <p className="text-green-600 text-sm mb-1">✓ Fast iterations</p>
                  <p className="text-red-600 text-sm">→ Visual programming became the bottleneck.</p>
                </div>
              </div>

              {/* V3 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-xl font-bold text-[#1A2A40] mb-2">n8n + Cloud Run + MongoDB</h3>
                  <p className="text-sm text-gray-500 mb-2">• Shipped ✓</p>
                  <p className="text-gray-600 mb-3">Visual orchestration (n8n) + code escape hatch (Python).</p>
                  <p className="text-green-600 text-sm mb-2">✓ Debug-ability + demo-friendliness + technical depth.</p>
                </div>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D4AF37] text-white flex items-center justify-center font-bold text-lg z-10 my-4 md:my-0 md:absolute md:left-1/2 md:-translate-x-1/2">3</div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#D4AF37] mt-8">
              <p className="text-gray-700 leading-relaxed">
                <strong>The Answer:</strong> n8n for orchestration + Cloud Run microservices for the 20% that needs real flexibility.
              </p>
            </div>
          </div>
        </Section>

        {/* OUTCOME */}
        <Section title="The Outcome" className="bg-gray-50">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-green-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center"><CheckCircle2 className="w-8 h-8 text-green-600 mr-3" />Technical Success</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {['Production-ready platform', '99% BANT qualification accuracy', 'Bilingual handling', 'Zero-downtime deployment'].map(i => <li key={i} className="flex items-start"><span className="text-green-600 mr-2">✓</span>{i}</li>)}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-red-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center"><XCircle className="w-8 h-8 text-red-600 mr-3" />Business Reality</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {['Not enough paying customers', '300+ cold outreaches', 'Pain was real, budget wasn\'t'].map(i => <li key={i} className="flex items-start"><span className="text-red-600 mr-2">✗</span>{i}</li>)}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-[#D4AF37]">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center"><Lightbulb className="w-8 h-8 text-[#D4AF37] mr-3" />Key Takeaways</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {['Technical excellence ≠ product-market fit', 'Teams go further than individuals', 'Business outcomes > Tech flair'].map(i => <li key={i} className="flex items-start"><span className="text-[#D4AF37] mr-2">→</span>{i}</li>)}
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="bg-[#1A2A40] text-white p-8 rounded-xl">
              <p className="text-xl font-semibold mb-4">That's why I'm targeting Founding AI Engineer roles.</p>
              <p className="text-gray-300 leading-relaxed">I want to apply this hard-learned skillset to supercharge teams that already validated market demand.</p>
            </div>
            <p className="text-2xl font-bold text-[#1A2A40]">Fortune 20 scale + startup speed + 0→1 grit + Impact-Focus</p>
          </div>
        </Section>

        {/* FINAL CTA */}
        <div className="bg-[#1A2A40] text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Together?</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              I'm looking for my next challenge at a high-growth team.
            </p>
            
            <Link to="/contact">
              <button className="bg-[#D4AF37] hover:bg-[#b5952f] text-white font-bold px-12 py-4 text-xl rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center group">
                Let's Talk
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

        {/* LIGHTBOX */}
        {lightbox && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setLightbox(null)}>
            <div className="relative max-w-5xl max-h-[90vh] mx-4 bg-white rounded-lg shadow-2xl p-4" onClick={e => e.stopPropagation()}>
              <button onClick={() => setLightbox(null)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800" aria-label="Close image">
                <X className="w-6 h-6" />
              </button>
              <img src={lightbox.src} alt={lightbox.alt} className="max-h-[80vh] w-full object-contain rounded" />
              {lightbox.alt && <p className="mt-3 text-sm text-gray-600 text-center">{lightbox.alt}</p>}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GPData;