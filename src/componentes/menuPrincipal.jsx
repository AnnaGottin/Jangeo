import { useState } from "react";

import Submenu from "./submenu";

import {BiIdCard, BiImages,BiLogOut} from 'react-icons/bi';
import {HiHeart,HiOutlineCog} from 'react-icons/hi';


export default function Principal(){
  
  const [opcion, setOpcion] = useState("");


  return(
    <>
      <div class="flex flex-col justify-between items-center flex-none w-16 bg-gray-200">
        <div class="flex flex-col space-y-1 w-full items-center pt-5">
          <div onClick={() => {setOpcion("Perfil")} } className="block relative w-full h-16 w-16 flex justify-center items-center cursor-pointer"  >
            <div class="rounded-full bg-gray-400 w-8 h-8">
              <BiIdCard className="h-full w-full" />
            </div>
          </div>

          <div onClick={() => {setOpcion("Galeria")} } className="block relative w-full h-16 w-16 flex justify-center items-center cursor-pointer"  >
            <div class="rounded-full bg-gray-400 w-8 h-8">
              <BiImages className="h-full w-full" />
            </div>
          </div>

          <div onClick={() => {setOpcion("Matches")} } className="block relative w-full h-16 w-16 flex justify-center items-center cursor-pointer"  >
            <div class="rounded-full bg-gray-400 w-8 h-8">
              <HiHeart className="h-full w-full" />
            </div>
          </div>
        </div>
        <div class="flex flex-col space-y-1 pb-5">
          <div onClick={() => {setOpcion("Settings")} } className="block relative w-full h-16 w-16 flex justify-center items-center cursor-pointer"  >
            <div class="rounded-full bg-gray-400 w-8 h-8">
              <HiOutlineCog className="h-full w-full" />
            </div>
          </div>

          <div onClick={() => {setOpcion("")} } className="block relative w-full h-16 w-16 flex justify-center items-center cursor-pointer"  >
            <div class="rounded-full bg-gray-400 w-8 h-8">
              <BiLogOut className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>

      <Submenu opcion={opcion}  />
    </>
  )
}