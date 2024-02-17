import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
};

export const FormError = ({
  message,
}: FormErrorProps) => {
    if (!message) return null;

    return (
        <div className="bg-destructive/10 text-destructive flex items-center justify-center rounded-lg gap-x-3 p-3 text-sm">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <p>{message}</p>
        </div>
    )

}