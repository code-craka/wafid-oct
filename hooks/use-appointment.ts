import useSWR from 'swr';
import { Appointment } from '@/types/appointment';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useAppointment(id?: string) {
  const { data, error, isLoading } = useSWR<Appointment>(
    id ? `/api/appointments/${id}` : null,
    fetcher
  );

  return {
    appointment: data,
    isLoading,
    error,
  };
}

export function useAppointments(status?: string) {
  const params = new URLSearchParams();
  if (status) params.append('status', status);

  const { data, error, isLoading } = useSWR<Appointment[]>(
    `/api/appointments?${params.toString()}`,
    fetcher
  );

  return {
    appointments: data,
    isLoading,
    error,
  };
} 