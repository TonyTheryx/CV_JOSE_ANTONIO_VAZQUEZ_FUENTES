

export const CV = () =>{
return(
    <>
    {/*Habilidades Técnicas*/}
<div className="min-h-screen bg-yellow-400 flex flex-col items-center justify-center text-white border-white-500 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-15">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
            <br />
<h2 className="text-4xl border-4 bg-blue-400 border-white-500 rounded-lg">
  Habilidades Técnicas
</h2>
<ul className="text-2xl">
<li>•	Lenguajes de programación: Java (nivel intermedio), Python (nivel básico), PHP (nivel básico), C++ (Nivel básico).</li>
<li>•	WEB: HTML (nivel básico), CSS (nivel básico), JS (nivel básico), PHP (nivel básico).</li>
<li>•	Base de datos: MySQL(nivel intermedio), PostgreSQL (nivel básico), SQLServer (básico).</li>
<li>•	Otros: Github (Básico), Habilidades gráficas (creación de logotipos e interfaces), creación de objetos 3D básicos con Blender.</li>
</ul>

    </div>

    {/*Perfil Profesional*/}
    <div className="min-h-screen bg-red-500 flex flex-col items-center justify-center text-white border-3 border-white-500 rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-15">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <br />
<h2 className="text-4xl border-4 bg-blue-700 border-3 border-white-500 rounded-lg">
  Perfil profesional
</h2>
<p className="text-2xl">
 Mi nombre es José Antonio Vázquez Fuentes, soy estudiante del Instituto Tecnológico de Morelia de la ingeniería en sistemas computacionales, próximo a concluir el séptimo semestre durante el periodo de Primavera 2026. Actualmente los mejores trabajos de mi carrera son productos en general de software (generalmente aplicaciones o sitios web lo más destacado), tengo conocimientos para desarrollar productos gráficos (logotipos e interfaces gráficas).
</p>
    </div>

    {/*Proyectos*/}
    <div className="min-h-screen bg-yellow-400 flex flex-col items-center justify-center text-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-15">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
            </svg>
            <br />
<h2 className="text-4xl border-4 bg-blue-400 border-3 border-white-500 rounded-lg">
  Proyectos
</h2>
<p className="text-2xl">
  <ul>
     <li>•	MiCanasta: Participé en la creación una página web dedicada a la reducción de costos de la despensa diaria, y creación de recetas.</li>
     <li>•	ObjetosSigloXX: Creé una página web enfocada a mostrar el cambio en el paso de los objetos del siglo XX.</li>
</ul>
</p>
</div>
    </>
)

}