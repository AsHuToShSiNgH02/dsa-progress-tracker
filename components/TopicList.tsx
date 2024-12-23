'use client'

import React from 'react';
import Topic from './Topic';
import { dsaData } from '../data/dsaData';
import { useAppContext } from './AppContext';

const TopicList: React.FC = () => {
  const { progress, updateQuestionStatus } = useAppContext();

  return (
    <div className="space-y-4">
      {dsaData.map(topic => (
        <Topic
          key={topic.name}
          topic={topic}
          progress={progress[topic.name] || {}}
          updateQuestionStatus={updateQuestionStatus}
        />
      ))}
    </div>
  );
};

export default TopicList;

