import  { useState } from 'react';
import {
  SocialHistoryBox,
  PresentingIllnessBox,
  AllergiesBox,
  MedicinesBox,
  MedicalHistoryBox
} from './bin';

const MedicalInterface = () => {
  const [visitToken, setVisitToken] = useState('');

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <button className="mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            <h1 className="text-xl font-bold">
              <span className="text-teal-600">Sehat</span>
              <span className="text-green-600">Sanjha</span>
              <span className="text-gray-500 text-sm ml-2">1.6.52 (Prod)</span>
            </h1>
          </div>
          <button className="text-blue-600 hover:text-blue-800">Logout</button>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container max-w-6xl mx-auto px-4 py-6">
        {/* Control Bar */}
        <div className="mb-6 flex items-center">
          <div className="flex">
            <button className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="4" width="12" height="16" rx="2" ry="2"></rect>
              </svg>
            </button>
          </div>
          
          <div className="ml-4 flex-grow">
            <input
              type="text"
              placeholder="Visit Token *"
              value={visitToken}
              onChange={(e) => setVisitToken(e.target.value)}
              className="w-96 max-w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        
        {/* Medical Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div>
            <SocialHistoryBox />
            <MedicalHistoryBox />
          </div>
          
          {/* Column 2 */}
          <div>
            <PresentingIllnessBox />
          </div>
          
          {/* Column 3 */}
          <div>
            <AllergiesBox />
            <MedicinesBox />
            
            {/* Done with Visit Button */}
            <div className="text-right mt-6">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded">
                Done with Visit
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MedicalInterface;