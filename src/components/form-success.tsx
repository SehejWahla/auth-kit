import {ExclamationTriangleIcon} from "@radix-ui/react-icons"
import {CheckCircledIcon} from "@radix-ui/react-icons"

interface FormErrorProps {
    message? : string
}

export const FormSuccess = ({message} : FormErrorProps) => {     
    if(!message) return;
    return (
        <div className="flex items-center gap-x-2 bg-green-100 p-2 rounded-sm text-green-500 text-sm">
            <CheckCircledIcon />
            <p>{message}</p>
        </div>
    )
}