'use client'

import React, { createContext, useState, useEffect, useContext } from 'react';
import { dsaData } from '../data/dsaData';

export interface QuestionStatus {
  completed: boolean;
  needsRevision: boolean;
}

export interface TopicProgress {
  [key: string]: {
    [key: string]: QuestionStatus;
  };
}

interface AppContextType {
  progress: TopicProgress;
  updateQuestionStatus: (topic: string, question: string, status: Partial<QuestionStatus>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<TopicProgress>({});

  useEffect(() => {
    const savedProgress = localStorage.getItem('dsaProgress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    } else {
      const initialProgress: TopicProgress = {};
      dsaData.forEach(topic => {
        initialProgress[topic.name] = {};
        topic.questions.forEach(question => {
          initialProgress[topic.name][question] = { completed: false, needsRevision: false };
        });
      });
      setProgress(initialProgress);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('dsaProgress', JSON.stringify(progress));
  }, [progress]);

  const updateQuestionStatus = (topic: string, question: string, status: Partial<QuestionStatus>) => {
    setProgress(prevProgress => ({
      ...prevProgress,
      [topic]: {
        ...prevProgress[topic],
        [question]: { ...prevProgress[topic][question], ...status },
      },
    }));
  };

  return (
    <AppContext.Provider value={{ progress, updateQuestionStatus }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

