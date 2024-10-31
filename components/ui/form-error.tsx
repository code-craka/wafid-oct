// components/ui/form-error.tsx
interface FormErrorProps {
    message: string
  }
  
  export function FormError({ message }: FormErrorProps) {
    if (!message) return null
  
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <span className="block sm:inline">{message}</span>
      </div>
    )
  }