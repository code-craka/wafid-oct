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

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  passportNumber: string;
}

export interface LocationSelectorProps {
  value: string;
  onChange: (location: string) => void;
  onBack: () => void;
}

export interface MedicalCenterSelectorProps {
  location: string;
  value: string;
  onChange: (center: string) => void;
  onBack: () => void;
}

export interface PersonalInfoFormProps {
  value: PersonalInfo;
  onChange: (info: PersonalInfo) => void;
} 