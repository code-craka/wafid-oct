// app/medical-centers/page.tsx
import { Metadata } from 'next'
import MedicalCenterSearch from './_components/MedicalCenterSearch'

export const metadata: Metadata = {
  title: 'Medical Centers | Wafid',
  description: 'Search for accredited medical centers for your GCC medical examination',
}

export default function MedicalCenters() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Medical Centers</h1>
      <MedicalCenterSearch />
    </div>
  )
}