// lib/utils/validation.ts
import * as z from 'zod'

export const personalInfoSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  dateOfBirth: z.date(),
  nationality: z.string(),
  gender: z.enum(['male', 'female', 'other']),
  maritalStatus: z.enum(['single', 'married', 'divorced', 'widowed']),
  passportNumber: z.string().min(6, 'Valid passport number is required'),
  passportIssueDate: z.date(),
  passportExpiryDate: z.date(),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().min(10, 'Valid phone number is required'),
}) 