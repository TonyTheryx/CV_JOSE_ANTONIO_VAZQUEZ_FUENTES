
import React, {useState, useEffect, useRef} from "react";
import Alert from '@mui/material/Alert';
import StandardButton from './StandardButton';
interface WarningBoxProps {
    message: string;
}

export default function WarningBox(props: WarningBoxProps ) {
    
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
        <dialog
            ref={dialogRef}
            style={{
                padding: "20px",
                borderRadius: "8px",
                border: "1px solid #ccc",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <h2 style={{ marginRight: "10px" }}>⚠
                    
                </h2>
                <StandardButton
                    color="green"
                    onClick={() => setIsOpen(false)}
                />
            </div>
        </dialog>
    );
}