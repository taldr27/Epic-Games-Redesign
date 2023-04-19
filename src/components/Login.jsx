import React, { useEffect, useState } from 'react'
import { RiCheckboxBlankLine } from 'react-icons/ri';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { SectionWrapper } from '../wrapper';
import { EpicLogo } from '../assets';
import { platforms } from '../constants';
import { Link } from 'react-router-dom';

const Login = ({ onToggleRegister }) => {
  const handleRegister = () => {
    onToggleRegister();
  }

  const [color, setColor] = useState('red');

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(currentColor => currentColor === 'red' ? 'blue' : 'red');
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
      <div className="bg-secondary w-12 sm:w-[480px] px-6 py-10 rounded-[15px]">
        <div className="flex flex-col items-center font-bold gap-1">
          <img src={EpicLogo} alt="epic-logo" />
          <span className="mt-4">Inicia Sesion en Epic Games</span>
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
                type="password"
                name="name"
                placeholder="Contraseña"
                className="bg-secondary py-18 px-30 placeholder:text-white text-sm
                text-white outlined-none border border-white mb-6 w-full"
              />
              <AiFillEyeInvisible className="absolute top-5 right-6 w-5 h-5" />
            </div>
            <Link to="/shop">
              <button
                // type="submit"
                type="button"
                className="bg-blue-200 py-18 px-135 outline-none w-full text-white text-sm font-bold
                hover:bg-blue-100"
              >
                INICIAR SESION AHORA
              </button>
            </Link>
          </form>
          <div className="flex justify-between">
            <div className="flex items-center">
              <RiCheckboxBlankLine className="w-22 mr-6 h-22" />
              <span>Recuerdame</span>
            </div>
            <a href="#" className="underline">Olvidé mi contraseña</a>
          </div>
          <div className="flex flex-col items-center justify-center my-8">
            <span className="mb-[10px]">O ingresa con:</span>
            <div className="flex gap-[10px]">
              {platforms.map((platform) => (
                <a href="#" key={platform.name}>
                  <img src={platform.image} alt={platform.name} />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col text-center text-sm mx-[51px]">
            <p>¿No tienes cuenta en Epic Games? <a className="underline font-bold" href="#" style={{ color }} onClick={handleRegister}>Registrate</a> o <a href="#" className="underline font-bold">Inicia Sesion mas tarde</a></p>
            <a href="#" className="font-bold mt-[10px] underline">Politica de privacidad</a>
          </div>
        </div>
      </div>
  )
}

export default SectionWrapper(Login, "login");
