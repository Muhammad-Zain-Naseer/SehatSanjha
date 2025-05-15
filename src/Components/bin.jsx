import React from 'react';

// InfoBox - Base component for all medical information boxes
export const InfoBox = ({ title, icon, children, editIcon = false, className = "" }) => {
  return (
    <div className="w-full mb-6 rounded-lg overflow-hidden shadow">
      {/* Header */}
      <div className={`flex items-center p-4 text-white ${className}`}>
        <span className="mr-2">{icon}</span>
        <h2 className="text-xl font-semibold flex-grow">{title}</h2>
        {editIcon && (
          <button className="p-1 rounded hover:bg-opacity-20 hover:bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
            </svg>
          </button>
        )}
      </div>
      
      {/* Content */}
      <div className="bg-white p-4 rounded-b-lg">
        {children}
      </div>
    </div>
  );
};

// Icons used in the medical interface
export const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const AllergiesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM4.6 12c0-4.1 3.3-7.4 7.4-7.4 1.6 0 3.1.5 4.3 1.4L5.9 16.3c-.8-1.2-1.3-2.7-1.3-4.3zm7.4 7.4c-1.6 0-3.1-.5-4.3-1.4L18.1 7.7c.8 1.2 1.3 2.7 1.3 4.3 0 4.1-3.3 7.4-7.4 7.4z" />
  </svg>
);

export const MedicineIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

export const MedicalHistoryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <path d="M9 14h6" />
    <path d="M9 10h6" />
    <path d="M12 18h3" />
  </svg>
);

// Category item component for social history section
export const CategoryItem = ({ title, items }) => {
  return (
    <div className="mb-4">
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="text-gray-600 py-1">{item}</li>
        ))}
      </ul>
    </div>
  );
};

// Specialized components for each section
export const SocialHistoryBox = () => {
  return (
    <InfoBox 
      title="Social History" 
      icon={<ClockIcon />} 
      className="bg-blue-300"
    >
      <div>
        <CategoryItem 
          title="Personal" 
          items={["Marital Status", "Identity", "Occupation", "Education"]} 
        />
        <CategoryItem 
          title="LifeStyle" 
          items={["Dietary Habits", "Exercise", "Routine", "Sleep", "Stress"]} 
        />
      </div>
    </InfoBox>
  );
};

export const PresentingIllnessBox = () => {
  return (
    <InfoBox 
      title="History of Presenting Illness" 
      icon={<ClockIcon />} 
      className="bg-green-700"
      editIcon={true}
    >
      <div className="text-center text-gray-500 py-6">
        {/* Empty state or would contain illness details */}
      </div>
    </InfoBox>
  );
};

export const AllergiesBox = () => {
  return (
    <InfoBox 
      title="Allergies" 
      icon={<AllergiesIcon />} 
      className="bg-blue-300"
    >
      <div className="text-center text-gray-500 py-2">
        No Known Allergies
      </div>
    </InfoBox>
  );
};

export const MedicinesBox = () => {
  return (
    <InfoBox 
      title="Medicines" 
      icon={<MedicineIcon />} 
      className="bg-blue-300"
    >
      <div className="text-center text-gray-500 py-2">
        No Medicines found
      </div>
    </InfoBox>
  );
};

export const MedicalHistoryBox = () => {
  return (
    <InfoBox 
      title="Past Medical Hx" 
      icon={<MedicalHistoryIcon />} 
      className="bg-blue-300"
    >
      <div className="text-center text-gray-500 py-2">
        No Known Diseases
      </div>
    </InfoBox>
  );
};