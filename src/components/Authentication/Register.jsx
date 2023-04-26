import React, { useEffect, useState } from 'react'
// import { RiCheckboxBlankLine } from 'react-icons/ri';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';
import { SectionWrapper } from '../../wrapper';
import { EpicLogo } from '../../assets';
import { platforms } from '../../constants';
import { countries } from 'countries-list';
import { Link } from 'react-router-dom';

const Register = ({ onToggleRegister }) => {
  const countryList = Object.values(countries);
  const [color, setColor] = useState('red');

  const handleRegister = () => {
    onToggleRegister();
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(currentColor => currentColor === 'red' ? 'blue' : 'red');
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  return (
      <div className="bg-secondary w-12 sm:w-[480px] px-6 py-10 rounded-[15px]">
        <div className="flex flex-col items-center font-bold gap-1">
          <img src={EpicLogo} alt='epic-logo' />
          <span className="mt-4">Registrarse en Epic Games</span>
        </div>
        <div>
          <form className="my-8 flex flex-col">
            <div className="flex gap-[15px] mb-5">
              <input 
                type="text"
                name="nombre"
                placeholder="Nombre"
                className="bg-secondary py-18 px-30 placeholder:text-white text-sm
                text-white outlined-none border border-white w-[187px]"
              />
              <input 
                type="text"
                name="apellido"
                placeholder="Apellido"
                className="bg-secondary py-18 px-30 placeholder:text-white text-sm
                text-white outlined-none border border-white w-full"
              />
            </div>
            <div className="relative">
              <select
                className="bg-secondary py-18 px-30 placeholder:text-white text-sm text-white 
                            appearance-none border border-white mb-5 pl-10 w-full">
                <option value="">{`Pais`}</option>
                {countryList.map((country) => (
                  <option key={country.name}>{country.name}</option>
                ))}
              </select>
              <IoMdArrowDropdown className="absolute top-5 right-6 w-5 h-5" />
            </div>
            <input 
              type="text"
              name="name"
              placeholder="Username"
              className="bg-secondary py-18 px-30 placeholder:text-white text-sm
              text-white outlined-none border border-white mb-5"
            />
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
                autoComplete="current-password"
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
                REGISTRARSE
              </button>
            </Link>
          </form>
          {/* <div className="flex justify-between">
            <div className="flex items-center">
              <RiCheckboxBlankLine className="w-22 mr-6 h-22" />
              <span>Recuerdame</span>
            </div>
            <a href="#" className="underline">Olvidé mi contraseña</a>
          </div> */}
          <div className="flex flex-col items-center justify-center my-8">
            <span className="mb-[10px]">O registrate con:</span>
            <div className="flex gap-[10px]">
              {platforms.map((platform) => (
                <a href="#" key={platform.name}>
                  <img src={platform.image} alt={platform.name} />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col text-center text-sm mx-[51px]">
            <p>¿Ya tienes una cuenta en Epic Games? <a className="underline font-bold" href="#" style={{ color }} onClick={handleRegister}>Inicia Sesion</a></p>
            <a href="#" className="font-bold mt-[10px] underline">Politica de privacidad</a>
          </div>
        </div>
      </div>
  )
}

export default SectionWrapper(Register, "register");
