'use client';

import { useState } from 'react';
import { PersonalInfoForm } from './PersonalInfoForm';
import { LocationSelector } from './LocationSelector';
import { MedicalCenterSelector } from './MedicalCenterSelector';
import { Button } from '@/components/ui/button';

// Add these interfaces at the top of the file
interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  passportNumber: string;
}

interface LocationSelectorProps {
  value: string;
  onChange: (location: string) => void;
  onBack: () => void;
}

interface MedicalCenterSelectorProps {
  location: string;
  value: string;
  onChange: (center: string) => void;
  onBack: () => void;
}

interface PersonalInfoFormProps {
  value: PersonalInfo;
  onChange: (info: PersonalInfo) => void;
}

type Step = 'personal' | 'location' | 'center' | 'confirmation';

export function AppointmentForm() {
  const [step, setStep] = useState<Step>('personal');
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      passportNumber: '',
    },
    location: '',
    center: '',
  });

  const renderStep = () => {
    switch (step) {
      case 'personal':
        return (
          <PersonalInfoForm
            value={formData.personalInfo}
            onChange={(personalInfo) => {
              setFormData({ ...formData, personalInfo });
              setStep('location');
            }}
          />
        );
      case 'location':
        return (
          <LocationSelector
            value={formData.location}
            onChange={(location) => {
              setFormData({ ...formData, location });
              setStep('center');
            }}
            onBack={() => setStep('personal')}
          />
        );
      case 'center':
        return (
          <MedicalCenterSelector
            location={formData.location}
            value={formData.center}
            onChange={(center) => {
              setFormData({ ...formData, center });
              setStep('confirmation');
            }}
            onBack={() => setStep('location')}
          />
        );
      case 'confirmation':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Confirm Your Appointment</h3>
            {/* Add confirmation details */}
            <Button onClick={() => console.log('Booking confirmed', formData)}>
              Confirm Booking
            </Button>
          </div>
        );
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <Steps currentStep={step} />
      </div>
      {renderStep()}
    </div>
  );
}

function Steps({ currentStep }: { currentStep: Step }) {
  const steps = [
    { id: 'personal', label: 'Personal Info' },
    { id: 'location', label: 'Location' },
    { id: 'center', label: 'Medical Center' },
    { id: 'confirmation', label: 'Confirmation' },
  ];

  return (
    <div className="flex justify-between">
      {steps.map((step, index) => (
        <div
          key={step.id}
          className={`flex-1 text-center ${
            step.id === currentStep ? 'text-blue-600' : 'text-gray-400'
          }`}
        >
          <div className="relative">
            <div className="h-2 bg-gray-200 absolute left-0 right-0 top-4 -z-10" />
            <div className="h-8 w-8 rounded-full bg-white border-2 mx-auto mb-2 flex items-center justify-center">
              {index + 1}
            </div>
          </div>
          <span className="text-sm">{step.label}</span>
        </div>
      ))}
    </div>
  );
} 