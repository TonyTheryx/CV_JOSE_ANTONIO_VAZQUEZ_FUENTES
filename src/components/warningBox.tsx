import AcceptButton from "./acceptButton.tsx";
import CancelButton from "./cancelButton.tsx";

export const warningBox = () => {
    
    function callAccept(props: any) {
        // Lógica para aceptar la advertencia
        console.log("Advertencia aceptada");

    
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Mensaje</h2>
            <p className="text-lg mb-2">
                {props.message}
            </p>
            
            {AcceptButton()}
            {CancelButton()}

        </div>
    );
        }
};