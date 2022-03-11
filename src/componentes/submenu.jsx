import Contenido from "./contenido";

export default function Submenu(props){


  return(
    <>
      {(props.opcion === "") ? <></>  : <OpcionesPerfil  opcion={props.opcion} /> }
      
      <Contenido/>
    </>
  )
}

function OpcionesPerfil(props){


  return(
    <>
      <div class="w-64 flex-none bg-gray-100 p-4 flex flex-col space-y-4">
        <div class="flex flex-row justify-between items-center mb-6">
          <h1 class="font-semibold text-2xl">{props.opcion} </h1>
          <svg class="flex-none w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>

        <div class="bg-red-200 h-64"></div>
        <div class="bg-red-200 h-64"></div>
      </div>
    </>
  )
}