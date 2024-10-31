import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const country = searchParams.get('country');
    const specialty = searchParams.get('specialty');

    const centers = await prisma.medicalCenter.findMany({
      where: {
        ...(country && { country }),
        ...(specialty && { specialties: { has: specialty } }),
      },
      include: {
        accreditations: true,
        availableSlots: true,
      },
    });

    return NextResponse.json(centers);
  } catch (error) {
    console.error('Error fetching medical centers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch medical centers' },
      { status: 500 }
    );
  }
} 