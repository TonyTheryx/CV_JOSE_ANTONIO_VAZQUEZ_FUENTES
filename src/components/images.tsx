//Importación de imágenes
import Courage from "../images/Courage.png"
import Chevrolet from "../images/Chevrolet_Impala_1964.png"
import Vending from "../images/Coffe_Vending_Machine.png"
import Sacco from "../images/Sacco_Chair_1968.png"
import MiCanasta from "../images/Mi Canasta Logo.png"
import A from "../images/1.png"
import B from "../images/2.png"
import C from "../images/3.png"
import D from "../images/4.png"

export const Images = () =>{
return(
    <>
    <div className="min-h-screen bg-red-500 flex flex-col items-center justify-center text-white">
      <h2 className="text-4xl bg-blue-500">IMÁGENES DE TRABAJOS TANTO GRÁFICOS CÓMO SOFTWARE</h2>
      <br />
      <img src={Courage} alt="" />
      <img src={Chevrolet} alt="" />
      <img src={Vending} alt="" />
      <img src={Sacco} alt="" />
      <img src={MiCanasta} alt="" />
      <img src={A} alt="" />
      <img src={B} alt="" />
      <img src={C} alt="" />
      <img src={D} alt="" />

    </div>
    </>
)

}