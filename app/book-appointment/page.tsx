// app/book-appointment/page.tsx
import { Metadata } from 'next'
import AppointmentForm from './_components/AppointmentForm'

export const metadata: Metadata = {
  title: 'Book Appointment | Wafid',
  description: 'Book your medical examination appointment for GCC countries',
}

export default function BookAppointment() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Book Your Appointment</h1>
      <AppointmentForm />
    </div>
  )
}