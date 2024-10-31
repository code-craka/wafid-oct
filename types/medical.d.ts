export interface MedicalCenter {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  accreditation: string[];
  specialties: string[];
  availableSlots?: AppointmentSlot[];
}

export interface MedicalStatus {
  id: string;
  userId: string;
  condition: string;
  diagnosis: string;
  treatment: string;
  status: 'ACTIVE' | 'RESOLVED' | 'MONITORING';
  createdAt: Date;
  updatedAt: Date;
  medicalCenterId: string;
  doctorId: string;
}

export interface MedicalRecord {
  id: string;
  statusId: string;
  type: 'NOTE' | 'TEST' | 'PRESCRIPTION';
  description: string;
  date: Date;
  createdBy: string;
} 