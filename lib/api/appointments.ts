// lib/api/appointments.ts
import { prisma } from '@/lib/prisma'

export async function createAppointment(data: any) {
  return prisma.appointment.create({
    data: {
      ...data,
      status: 'PENDING',
    },
  })
} 