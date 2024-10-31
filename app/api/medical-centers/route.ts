import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  if (id) {
    const medicalCenter = await prisma.medicalCenter.findUnique({
      where: { id },
    })
    return NextResponse.json(medicalCenter)
  } else {
    const medicalCenters = await prisma.medicalCenter.findMany()
    return NextResponse.json(medicalCenters)
  }
}

export async function POST(req: Request) {
  const body = await req.json()
  const medicalCenter = await prisma.medicalCenter.create({
    data: body,
  })
  return NextResponse.json(medicalCenter)
}

export async function PUT(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  const body = await req.json()

  if (!id) {
    return NextResponse.json({ error: 'Missing ID' }, { status: 400 })
  }

  const updatedMedicalCenter = await prisma.medicalCenter.update({
    where: { id },
    data: body,
  })
  return NextResponse.json(updatedMedicalCenter)
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'Missing ID' }, { status: 400 })
  }

  await prisma.medicalCenter.delete({
    where: { id },
  })
  return NextResponse.json({ message: 'Medical center deleted successfully' })
}