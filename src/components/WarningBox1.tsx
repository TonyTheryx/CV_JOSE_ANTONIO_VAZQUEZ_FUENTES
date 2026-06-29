import React from "react";
import Alert from '@mui/material/Alert';

export default function WarningBox1(props: { message: string }) {
    const [isVisible, setIsVisible] = React.useState(true);

    const dismissWarning = () => {
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <Alert severity="warning">{props.message}</Alert>
            <button onClick={dismissWarning} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Dismiss
            </button>
        </div>
    );
}
