'use client'

import React, { useState } from 'react';
import Question from './Question';
import { QuestionStatus } from './AppContext';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface TopicProps {
  topic: {
    name: string;
    questions: string[];
  };
  progress: {
    [key: string]: QuestionStatus;
  };
  updateQuestionStatus: (topic: string, question: string, status: Partial<QuestionStatus>) => void;
}

const Topic: React.FC<TopicProps> = ({ topic, progress, updateQuestionStatus }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-8">
      <div 
        className="flex items-center cursor-pointer" 
        onClick={toggleExpand}
      >
        {isExpanded ? (
          <ChevronDown className="w-6 h-6 mr-2" />
        ) : (
          <ChevronRight className="w-6 h-6 mr-2" />
        )}
        <h2 className="text-2xl font-semibold">{topic.name}</h2>
      </div>
      {isExpanded && (
        <div className="space-y-2 mt-4 ml-8">
          {topic.questions.map(question => (
            <Question
              key={question}
              question={question}
              status={progress[question] || { completed: false, needsRevision: false }}
              updateStatus={(status) => updateQuestionStatus(topic.name, question, status)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Topic;

