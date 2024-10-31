interface StepsProps {
  currentStep: string;
}

export function Steps({ currentStep }: StepsProps) {
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