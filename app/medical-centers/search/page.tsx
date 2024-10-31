import { Suspense } from 'react';
import { SearchResults } from './_components/SearchResults';
import { SearchForm } from './_components/SearchForm';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';

export default function SearchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Search Medical Centers</h1>
      
      <SearchForm />
      
      <Suspense fallback={<LoadingSpinner />}>
        <SearchResults />
      </Suspense>
    </div>
  );
} 