import { notFound } from "next/navigation";
import { getMedicalStatus } from "@/lib/api/medical-status";
import { StatusDetails } from "../_components/StatusDetails";
import { StatusTimeline } from "../_components/StatusTimeline";

export default async function MedicalStatusDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const status = await getMedicalStatus(params.id);
  
  if (!status) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Medical Status Details</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <StatusDetails status={status} />
        </div>
        
        <div className="lg:col-span-1">
          <StatusTimeline statusId={status.id} />
        </div>
      </div>
    </div>
  );
} 