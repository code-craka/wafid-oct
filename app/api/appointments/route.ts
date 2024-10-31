// app/api/appointments/route.ts
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const appointment = await prisma.appointment.create({
      data: {
        ...body,
        status: 'PENDING',
      },
    })
    return NextResponse.json(appointment)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create appointment' }, { status: 500 })
  }
}