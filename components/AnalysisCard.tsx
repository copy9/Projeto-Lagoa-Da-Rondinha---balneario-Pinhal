
import React from 'react';

interface AnalysisCardProps {
  title: string;
  icon: string;
  content: string;
}

export const AnalysisCard: React.FC<AnalysisCardProps> = ({ title, icon, content }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
          <i className={`fa-solid ${icon} text-xl`}></i>
        </div>
        <h3 className="font-bold text-lg text-slate-800">{title}</h3>
      </div>
      <p className="text-slate-600 leading-relaxed">{content}</p>
    </div>
  );
};
