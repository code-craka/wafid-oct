import { getCurrentUser } from "@/lib/auth";
import { MedicalStatusList } from "./_components/MedicalStatusList";
import { MedicalSummary } from "./_components/MedicalSummary";

export default async function MedicalStatusPage() {
  const user = await getCurrentUser();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Medical Status</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <MedicalStatusList userId={user?.id} />
        </div>
        
        <div className="lg:col-span-1">
          <MedicalSummary userId={user?.id} />
        </div>
      </div>
    </div>
  );
} 