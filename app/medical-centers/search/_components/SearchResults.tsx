'use client';

import { useMedicalCenters } from '@/hooks/use-medical-centers';
import { MedicalCenterCard } from '../../_components/MedicalCenterCard';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';

export function SearchResults() {
  const { data: centers, isLoading, error } = useMedicalCenters();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Error loading results</div>;
  if (!centers?.length) return <div>No medical centers found</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {centers.map((center) => (
        <MedicalCenterCard key={center.id} center={center} />
      ))}
    </div>
  );
} 