import Link from 'next/link';
import { MedicalCenter } from '@/types/medical';
import { Button } from '@/components/ui/button';

interface MedicalCenterCardProps {
  center: MedicalCenter;
}

export function MedicalCenterCard({ center }: MedicalCenterCardProps) {
  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm">
      <h3 className="text-xl font-semibold mb-2">{center.name}</h3>
      
      <div className="space-y-2 mb-4">
        <p className="text-gray-600">{center.address}</p>
        <p className="text-gray-600">{center.city}, {center.country}</p>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {center.specialties.map((specialty) => (
          <span
            key={specialty}
            className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
          >
            {specialty}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        <Button asChild variant="outline">
          <Link href={`/medical-centers/${center.id}`}>
            View Details
          </Link>
        </Button>
        <Button asChild>
          <Link href={`/book-appointment?center=${center.id}`}>
            Book Appointment
          </Link>
        </Button>
      </div>
    </div>
  );
} 