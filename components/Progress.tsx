'use client'

import React from 'react';
import { useAppContext } from './AppContext';

const Progress: React.FC = () => {
  const { progress } = useAppContext();

  const totalQuestions = Object.values(progress).reduce(
    (acc, topic) => acc + Object.keys(topic).length,
    0
  );

  const completedQuestions = Object.values(progress).reduce(
    (acc, topic) => acc + Object.values(topic).filter(q => q.completed).length,
    0
  );

  const questionsNeedingRevision = Object.values(progress).reduce(
    (acc, topic) => acc + Object.values(topic).filter(q => q.needsRevision).length,
    0
  );

  const percentageComplete = totalQuestions > 0 ? (completedQuestions / totalQuestions) * 100 : 0;

  return (
    <div className="bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Overall Progress</h2>
      <div className="mb-4">
        <div className="text-lg">
          Completed: {completedQuestions} / {totalQuestions} ({percentageComplete.toFixed(2)}%)
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-800 mt-2">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${percentageComplete}%` }}
          ></div>
        </div>
      </div>
      <div className="text-lg">
        Questions needing revision: {questionsNeedingRevision}
      </div>
    </div>
  );
};

export default Progress;

