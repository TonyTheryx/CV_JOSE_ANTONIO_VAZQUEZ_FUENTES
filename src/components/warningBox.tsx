
import React, {useState, useEffect, useRef} from "react";
import Alert from '@mui/material/Alert';
import StandardButton from './StandardButton';
interface WarningBoxProps {
    message: string;
}

export default function WarningBox(props: WarningBoxProps ) {
        const [isVisible, setIsVisible] = React.useState(true);    
    
        if (!isVisible) return null;
    
        const [isOpen, setIsOpen] = useState(true);
         const dialogRef = useRef<HTMLDialogElement>(null);

        useEffect(() => {
            const dialog = dialogRef.current;
            if (!dialog) return;

            if (isOpen) {
            dialog.showModal(); // Opens as an accessible modal overlay
            } else {
            dialog.close(); // Closes the dialog
            }
        }, [isOpen]);


    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <Alert severity="warning">{props.message}</Alert>
             <dialog
        ref={dialogRef}
        onClose={() => setIsOpen(false)} // Syncs state if closed via Esc key
        style={{ padding: "20px", borderRadius: "8px", border: "1px solid #ccc" }}
      >
        <StandardButton   color="green" 
        onClick={() => setIsOpen(false) } />


      </dialog>
            <h2 className="text-2xl font-bold mb-4">Mensaje</h2>
            <p className="text-lg mb-2">
                {props.message}
            </p>
            <button onClick={() => setIsVisible(false)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Dismiss
            </button>
                
            
        </div>
    );
}