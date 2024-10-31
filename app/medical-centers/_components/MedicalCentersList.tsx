'use client';

import { useMedicalCenters } from '@/hooks/use-medical-centers';
import { MedicalCenterCard } from './MedicalCenterCard';

export function MedicalCentersList() {
  const { data: centers, isLoading, error } = useMedicalCenters();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading medical centers</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {centers?.map((center) => (
        <MedicalCenterCard key={center.id} center={center} />
      ))}
    </div>
  );
} 