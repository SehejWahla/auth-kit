import {ExclamationTriangleIcon} from "@radix-ui/react-icons"

interface FormErrorProps {
    message? : string
}

export const FormError = ({message} : FormErrorProps) => {     
    if(!message) return;
    return (
        <div className="flex items-center gap-x-2 bg-red-100 p-2 rounded-sm text-red-500 text-sm">
            <ExclamationTriangleIcon />
            <p>{message}</p>
        </div>
    )
}