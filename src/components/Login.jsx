import React from 'react'
import { SectionWrapper } from '../wrapper';
import { EpicLogo } from '../assets';

const Login = () => {
  return (
      <div className="bg-secondary w-12 sm:w-[480px] px-6 py-10 rounded-2xl">
        <div className="flex flex-col items-center font-bold gap-1">
          <img src={EpicLogo} />
          <span className="mt-4">Inicia Sesion en Epic Game</span>
        </div>
        <div>
          <form className="my-8 flex flex-col">
            <input 
              type="email"
              name="email"
              placeholder="Correo Electronico"
              className="bg-secondary py-18 px-30 ::placeholder:text-white text-sm
              text-white outlined-none border border-white mb-5"
            />
            <input 
              type="text"
              name="name"
              placeholder="Contraseña"
              className="bg-secondary py-18 px-30 ::placeholder:text-white text-sm
              text-white outlined-none border border-white mb-6"
            />
            <button
              type="submit"
              className="bg-blue-200 py-18 px-135 outline-none w-full text-white text-sm font-bold
              hover:bg-secondary"
            >
              INICIAR SESION AHORA
            </button>
          </form>
          <div>
            
          </div>
        </div>
        <div>
          Foot
        </div>
      </div>
  )
}

export default SectionWrapper(Login, "login");
