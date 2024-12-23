'use client'

import React from 'react';
import { QuestionStatus } from './AppContext';
import { getLeetCodeUrl } from '../utils/leetcodeUrl';

interface QuestionProps {
  question: string;
  status: QuestionStatus;
  updateStatus: (status: Partial<QuestionStatus>) => void;
}

const Question: React.FC<QuestionProps> = ({ question, status, updateStatus }) => {
  return (
    <div className="flex items-center space-x-4 py-2">
      <input
        type="checkbox"
        checked={status.completed}
        onChange={(e) => updateStatus({ completed: e.target.checked })}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      <a
        href={getLeetCodeUrl(question)}
        target="_blank"
        rel="noopener noreferrer"
        className={`hover:text-blue-600 ${status.completed ? 'line-through' : ''}`}
      >
        {question}
      </a>
      <button
        onClick={() => updateStatus({ needsRevision: !status.needsRevision })}
        className={`px-2 py-1 rounded text-sm ${
          status.needsRevision ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-black'
        }`}
      >
        Revise
      </button>
    </div>
  );
};

export default Question;

