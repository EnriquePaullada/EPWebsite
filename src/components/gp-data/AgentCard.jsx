import React, { useState } from 'react';

const AgentCard = ({
  icon,
  name,
  role,
  borderColor,
  bulletColor,
  highlightColor,
  compactBullets,
  fullContent
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className={`bg-white p-4 rounded-lg shadow-sm border-l-4 ${borderColor} transition-all duration-300 flex flex-col h-full`}>
      {/* Agent Header */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{icon}</span>
        <div>
          <h3 className="text-base font-bold text-[#1A2A40]">{name}</h3>
          <p className="text-[10px] text-gray-500 italic">{role}</p>
        </div>
      </div>

      {/* Compact View */}
      <div className="space-y-1 mb-2">
        {compactBullets.map((bullet, idx) => (
          <div key={idx} className="flex items-center text-[11px] text-gray-700 leading-snug">
            <span className={`${bulletColor} mr-1.5 flex-shrink-0`}>•</span>
            <span>{bullet}</span>
          </div>
        ))}
      </div>

      {/* Expand/Collapse Button - pushed to bottom */}
      <button onClick={() => setIsExpanded(!isExpanded)} className={`text-[10px] font-medium ${highlightColor} hover:underline flex items-center gap-1 transition-colors mt-auto pt-2`}>
        {isExpanded ? '↑ Show less' : '↓ Read more'}
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-gray-200 space-y-3 text-xs text-gray-700 animate-fadeIn">
          <div>
            <p className="font-semibold text-gray-800 mb-1 text-[11px]">What it does:</p>
            <p className="text-[11px] leading-snug">{fullContent.whatItDoes}</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1 text-[11px]">Why it matters:</p>
            <p className="text-[11px] leading-snug">{fullContent.whyItMatters}</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1 text-[11px]">Key capability:</p>
            <p className={`${highlightColor} italic text-[11px] leading-snug`}>{fullContent.keyCapability}</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-1 text-[11px]">Technical highlights:</p>
            <ul className="space-y-1 ml-3">
              {fullContent.techHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start text-[11px] leading-snug">
                  <span className={`${bulletColor} mr-1.5`}>•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentCard;