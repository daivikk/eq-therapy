"use client"
import React from 'react';

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="currentColor" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"/>
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m18 9l-.84 8.398c-.127 1.273-.19 1.909-.48 2.39a2.5 2.5 0 0 1-1.075.973C15.098 21 14.46 21 13.18 21h-2.36c-1.279 0-1.918 0-2.425-.24a2.5 2.5 0 0 1-1.076-.973c-.288-.48-.352-1.116-.48-2.389L6 9m7.5 6.5v-5m-3 5v-5m-6-4h4.615m0 0l.386-2.672c.112-.486.516-.828.98-.828h3.038c.464 0 .867.342.98.828l.386 2.672m-5.77 0h5.77m0 0H19.5"/>
  </svg>
);

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 18L7 18L7 6L9 6L9 18M15 6L17 6L17 18L15 18L15 6">
      <animate fill="freeze" attributeName="d" dur="0.6s" keyTimes="0;0.66;1" values="M9 18L7 18L7 6L9 6L9 18M15 6L17 6L17 18L15 18L15 6;M13 15L8 18L8 6L13 9L13 15M13 9L18 12L18 12L13 15L13 9;M13 15L8 18L8 6L13 9L13 9M13 9L18 12L18 12L13 15L13 15"/>
    </path>
  </svg>
);

const ClipsManager = () => {
  const clips = Array(6).fill('Untitled');

  const ClipCard = ({ title }) => (
    <div className="bg-white border border-gray-300 rounded-lg overflow-hidden relative flex items-center justify-center h-64">
      <button className="absolute top-2 right-2">
        <TrashIcon className="w-5 h-5 text-gray-400 hover:text-gray-600" />
      </button>
      <div className="absolute top-2 left-2 text-sm text-gray-500 font-InterMedium">
        00:30
      </div>
      <h3 className="font-InterMedium text-base text-center absolute inset-0 flex items-center justify-center">
        {title}
      </h3>
      <div className="absolute bottom-2 right-2">
        <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700 font-InterMedium">
          <PlayIcon className="w-4 h-4" />
          <span>Play</span>
        </button>
      </div>
    </div>
  );  
  

  return (
    <div className="container mx-auto px-6 py-8 max-w-7xl">
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-InterMedium mb-2">Clips</h2>
          <p className="text-gray-500 font-InterMedium">
            Manage and upload your clips here
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {clips.map((clip, index) => (
            <ClipCard key={index} title={clip} />
          ))}
        </div>

        <div className="flex justify-center items-center gap-4">
          <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-6 py-2 rounded-full font-InterMedium">
            <PlusIcon className="w-4 h-4" />
            Upload New Clip
          </button>
          <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-6 py-2 rounded-full font-InterMedium">
            <span>View Public Clip Library</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClipsManager;