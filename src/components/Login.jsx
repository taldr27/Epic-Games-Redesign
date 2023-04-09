import React from 'react'
import { RiCheckboxBlankLine } from 'react-icons/ri';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { SectionWrapper } from '../wrapper';
import { EpicLogo } from '../assets';
import { platforms } from '../constants';

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
              className="bg-secondary py-18 px-30 placeholder:text-white text-sm
              text-white outlined-none border border-white mb-5"
            />
            <div className="relative">
              <input 
                type="text"
                name="name"
                placeholder="Contraseña"
                className="bg-secondary py-18 px-30 placeholder:text-white text-sm
                text-white outlined-none border border-white mb-6 w-full"
              />
              <AiFillEyeInvisible className="absolute top-5 right-6 w-5 h-5" />
            </div>
            <button
              type="submit"
              className="bg-blue-200 py-18 px-135 outline-none w-full text-white text-sm font-bold
              hover:bg-secondary"
            >
              INICIAR SESION AHORA
            </button>
          </form>
          <div className="flex justify-between">
            <div className="flex ">
              <RiCheckboxBlankLine className="w-22 mr-6 h-22" />
              <span>Recuerdame</span>
            </div>
            <a href="#" className="underline">Olvide mi contraseña</a>
          </div>
          <div className="flex flex-col items-center justify-center my-8">
            <span className="mb-[10px]">O ingresa con:</span>
            <div className="flex gap-[10px]">
              {platforms.map((platform) => (
                <img src={platform.image} key={platform.name} />
              ))}
            </div>
          </div>
          <div className="flex flex-col text-center text-sm mx-[51px]">
            <p>¿No tienes cuenta en Epic Games? <a className="underline font-bold" href="#">Registrate</a> o <a href="#" className="underline font-bold">Inicia Sesion mas tarde</a></p>
            <a href="#" className="font-bold mt-[10px] underline">Politica de privacidad</a>
          </div>
        </div>
      </div>
  )
}

export default SectionWrapper(Login, "login");