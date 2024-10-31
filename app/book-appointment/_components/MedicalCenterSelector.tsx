'use client';

import { useMedicalCenters } from '@/hooks/use-medical-centers';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface MedicalCenterSelectorProps {
  location: string;
  value: string;
  onChange: (value: string) => void;
}

export function MedicalCenterSelector({ location, value, onChange }: MedicalCenterSelectorProps) {
  const { data: centers, isLoading } = useMedicalCenters(location);

  if (isLoading) {
    return <div>Loading centers...</div>;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Select Medical Center</h3>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select a medical center" />
        </SelectTrigger>
        <SelectContent>
          {centers?.map((center) => (
            <SelectItem key={center.id} value={center.id}>
              {center.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
} 