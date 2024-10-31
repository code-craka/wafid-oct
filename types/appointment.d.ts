export interface Appointment {
  id: string;
  patientId: string;
  medicalCenterId: string;
  doctorId?: string;
  date: Date;
  startTime: string;
  endTime: string;
  status: AppointmentStatus;
  type: AppointmentType;
  notes?: string;
}

export type AppointmentStatus = 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';
export type AppointmentType = 'CONSULTATION' | 'FOLLOW_UP' | 'PROCEDURE' | 'TEST';

export interface AppointmentSlot {
  id: string;
  date: Date;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
  medicalCenterId: string;
  doctorId?: string;
} 