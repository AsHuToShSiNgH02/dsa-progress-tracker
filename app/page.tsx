'use client'

import React from 'react';
import { AppProvider } from '../components/AppContext';
import TopicList from '../components/TopicList';
import Progress from '../components/Progress';

export default function Home() {
  return (
    <AppProvider>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Anirudh Sir DSA Sheet</h1>
          <h2 className="text-2xl font-semibold text-gray-600">DSA Progress Tracker</h2>
        </div>
        <Progress />
        <TopicList />
      </div>
    </AppProvider>
  );
}

