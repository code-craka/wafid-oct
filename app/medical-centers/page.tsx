import { Suspense } from 'react';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { MedicalCentersList } from './_components/MedicalCentersList';
import { SearchFilters } from './_components/SearchFilters';

export default function MedicalCentersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Medical Centers</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <SearchFilters />
        </aside>
        
        <main className="lg:col-span-3">
          <Suspense fallback={<LoadingSpinner />}>
            <MedicalCentersList />
          </Suspense>
        </main>
      </div>
    </div>
  );
} 