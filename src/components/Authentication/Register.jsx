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
      <div className="bg-secondary sm:w-[480px] px-6 md:py-10 rounded-[15px] xsm:py-7 xsm:my-10 xsm:mx-4">
        <div className="flex flex-col items-center font-bold gap-1">
          <img src={EpicLogo} alt='epic-logo' />
          <span className="mt-4">Sign Up</span>
        </div>
        <div>
          <form className="my-8 flex flex-col">
          <div className="md:flex gap-[15px] xsm:flex-row md:flex-col">
              <input 
                type="text"
                name="name"
                placeholder="First Name"
                className="bg-secondary py-18 px-30 placeholder:text-white text-sm
                text-white outlined-none border border-white md:w-[187px] xsm:mb-[18px] xsm:w-full h-[53px] md:mb-0"
              />
              <input 
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="bg-secondary py-18 px-30 placeholder:text-white text-sm
                text-white outlined-none border border-white w-full h-[53px] mb-5"
              />
            </div>
            <div className="relative">
              <select
                className="bg-secondary py-18 px-30 placeholder:text-white text-sm text-white 
                            appearance-none border border-white mb-5 pl-10 w-full h-[53px]">
                <option value="">{`Country`}</option>
                {countryList.map((country) => (
                  <option key={country.name}>{country.name}</option>
                ))}
              </select>
              <IoMdArrowDropdown className="absolute top-5 right-6 w-5 h-5" />
            </div>
            <input 
              type="text"
              name="username"
              placeholder="Display Name"
              className="bg-secondary py-18 px-30 placeholder:text-white text-sm
              text-white outlined-none border border-white mb-5 h-[53px]"
            />
            <input 
              type="email"
              name="email"
              placeholder="Email Address"
              className="bg-secondary py-18 px-30 placeholder:text-white text-sm
              text-white outlined-none border border-white mb-5 h-[53px]"
            />
            <div className="relative">
              <input 
                type="password"
                name="name"
                placeholder="Password"
                autoComplete="current-password"
                className="bg-secondary py-18 px-30 placeholder:text-white text-sm
                text-white outlined-none border border-white mb-6 w-full h-[53px]"
              />
              <AiFillEyeInvisible className="absolute top-5 right-6 w-5 h-5" />
            </div>
            <Link to="/shop">
              <button
                // type="submit"
                type="button"
                className="bg-blue-200 py-18 px-135 outline-none w-full text-white text-sm font-bold
                hover:bg-blue-100 h-[53px]"
              >
                Sign Up
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
            <span className="mb-[10px]">Or Sign Up With:</span>
            <div className="flex gap-[10px]">
              {platforms.map((platform) => (
                <a href="#" key={platform.name}>
                  <img src={platform.image} alt={platform.name} />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col text-center text-sm mx-[51px]">
            <p>Already have an Epic Games account? <a className="underline font-bold" href="#" style={{ color }} onClick={handleRegister}>Sign In</a></p>
            <a href="#" className="font-bold mt-[10px] underline">Privacy Policy</a>
          </div>
        </div>
      </div>
  )
}

export default Register;
