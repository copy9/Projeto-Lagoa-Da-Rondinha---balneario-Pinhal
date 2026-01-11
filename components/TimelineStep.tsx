
import React from 'react';
import { ImplementationStep } from '../types';

export const TimelineStep: React.FC<{ step: ImplementationStep; index: number }> = ({ step, index }) => {
  return (
    <div className="flex gap-6 mb-8 group">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm z-10 shadow-lg">
          {index + 1}
        </div>
        <div className="w-0.5 h-full bg-slate-200 group-last:bg-transparent -mt-1"></div>
      </div>
      <div className="pb-8">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{step.timeline}</span>
        <h4 className="text-xl font-bold text-slate-800 mt-1 mb-3">{step.phase}</h4>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
          <ul className="space-y-2 mb-4">
            {step.actions.map((action, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-700">
                <i className="fa-solid fa-check text-green-500 mt-1 text-xs"></i>
                <span>{action}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {step.responsibles.map((resp, i) => (
              <span key={i} className="px-3 py-1 bg-white border border-slate-300 rounded-full text-xs font-medium text-slate-600">
                {resp}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
