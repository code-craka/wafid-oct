export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  profile?: UserProfile;
  medicalHistory?: MedicalStatus[];
}

export type UserRole = 'PATIENT' | 'DOCTOR' | 'ADMIN';

export interface UserProfile {
  id: string;
  userId: string;
  phoneNumber?: string;
  dateOfBirth?: Date;
  gender?: string;
  address?: string;
  emergencyContact?: string;
  bloodType?: string;
  allergies?: string[];
} 