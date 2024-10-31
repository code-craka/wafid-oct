'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
}

interface PersonalInfoFormProps {
  value: PersonalInfo;
  onChange: (value: PersonalInfo) => void;
}

export function PersonalInfoForm({ value, onChange }: PersonalInfoFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onChange(value);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-lg font-semibold">Personal Information</h3>
      
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium">
          Full Name
        </label>
        <Input
          id="name"
          value={value.name}
          onChange={(e) => onChange({ ...value, name: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <Input
          id="email"
          type="email"
          value={value.email}
          onChange={(e) => onChange({ ...value, email: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-medium">
          Phone Number
        </label>
        <Input
          id="phone"
          type="tel"
          value={value.phone}
          onChange={(e) => onChange({ ...value, phone: e.target.value })}
          required
        />
      </div>

      <Button type="submit">Continue</Button>
    </form>
  );
} 