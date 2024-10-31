import useSWR from 'swr';
import { MedicalCenter } from '@/types/medical';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useMedicalCenters(country?: string, specialty?: string) {
  const params = new URLSearchParams();
  if (country) params.append('country', country);
  if (specialty) params.append('specialty', specialty);

  const { data, error, isLoading } = useSWR<MedicalCenter[]>(
    `/api/medical-centers?${params.toString()}`,
    fetcher
  );

  return {
    data,
    isLoading,
    error,
  };
} 