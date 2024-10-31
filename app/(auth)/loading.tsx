import { LoadingSpinner } from "@/components/shared/LoadingSpinner";

export default function AuthLoading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <LoadingSpinner />
    </div>
  );
} 