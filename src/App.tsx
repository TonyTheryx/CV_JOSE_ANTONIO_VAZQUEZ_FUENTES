import { useState } from "react"
import { Text } from './components/text'
import { Images } from './components/images'
import { CV } from "./components/cv";

function App() {
  const [count, setCount] = useState<number>(0);
  
//Botones
  const nextClick = () => {
    setCount(count + 1);
    if(count==2){
      setCount(1);
    }
  };
const previousClick= () => {
    setCount(count - 1);
    if(count==1){
      setCount(2);
    }
  };

  //Retorno
  return (
    <>
      
      <div className="min-h-screen bg-red-500 flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl bg-blue-600 ">
        CV JOSÉ ANTONIO VÁZQUEZ FUENTES
      </h1>
      {count==1 && (<Text 
      initialTitle="Información De Contacto"
      initialText="•	4433012603
                  •	l23120515@morelia.tecnm.mx" 
      />)
      }

{count==2 && (<Text 
      initialTitle="Eduación"
      initialText="•	Universidad: Instituto Tecnológico de Morelia.
•	Carrera: Ingeniería en sistemas computacionales.
•	Promedio: 89.27
•	Semestre actual: Séptimo semestre (próximo a concluir el periodo).
" 
      />)
      }

      <p className="text-2xl font-bold mb-6">
       Página: {count}
      </p>
      <button
        onClick={nextClick}
        className="bg-blue-500 hover:bg-blue-600 
                   px-6 py-3 
                   rounded-full 
                   shadow-lg 
                   transition 
                   duration-300"
      >
        Adelante
      </button>
      <br />
<button
        onClick={previousClick}
        className="bg-blue-500 hover:bg-blue-600 
                   px-6 py-3 
                   rounded-full 
                   shadow-lg 
                   transition 
                   duration-300"
      >
        Atrás
      </button>
    </div>
    <CV/>
    <Images/>
    </>
  );
}

export default App;