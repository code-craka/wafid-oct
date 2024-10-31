'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { COUNTRIES } from '@/lib/constants/countries';

interface LocationSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function LocationSelector({ value, onChange }: LocationSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Select Your Location</h3>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          {COUNTRIES.map((country) => (
            <SelectItem key={country.code} value={country.code}>
              {country.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
} 