import React, { useEffect, useState } from 'react'
import { RiCheckboxBlankLine } from 'react-icons/ri';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { SectionWrapper } from '../../wrapper';
import { EpicLogo } from '../../assets';
import { platforms } from '../../constants';
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
      <div className="bg-secondary sm:w-[480px] px-6 md:py-10 rounded-[15px] xsm:m-5 xsm:py-9">
        <div className="flex flex-col items-center font-bold gap-1">
          <img src={EpicLogo} alt="epic-logo" />
          <span className="mt-4">Sign in to Epic Games</span>
        </div>
        <div>
          <form className="my-8 flex flex-col">
            <input 
              disabled
              type="email"
              name="email"
              placeholder="Email Address"
              className="bg-secondary py-18 px-30 placeholder:text-white text-sm
              text-white outlined-none border border-white mb-5 h-[53px]"
            />
            <div className="relative">
              <input 
                disabled
                type="password"
                name="name"
                placeholder="Password"
                className="bg-secondary py-18 px-30 placeholder:text-white text-sm
                text-white outlined-none border border-white mb-6 w-full h-[53px]"
              />
              <AiFillEyeInvisible className="absolute top-[17px] right-6 w-5 h-5" />
            </div>
            <Link to="/shop">
              <button
                // type="submit"
                type="button"
                className="bg-blue-200 py-18 px-135 xsm:px-[77px] h-[53px] outline-none w-full text-white text-sm font-bold
                hover:bg-blue-100"
                style={{ color }}
              >
                LOG IN NOW
              </button>
            </Link>
          </form>
          <div className="flex justify-between sm:text-base xsm:text-sm">
            <div className="flex items-center">
              <RiCheckboxBlankLine className="w-22 mr-6 h-22" />
              <span>Remember me</span>
            </div>
            <a href="#" className="underline">Forgot Your Password</a>
          </div>
          <div className="flex flex-col items-center justify-center my-8">
            <span className="mb-[10px]">Or Sign In with:</span>
            <div className="flex gap-[10px]">
              {platforms.map((platform) => (
                <a href="#" key={platform.name}>
                  <img src={platform.image} alt={platform.name} />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col text-center text-sm sm:mx-[51px] xsm:mx-0">
            <p>Don't have an Epic Games account? <a className="underline font-bold" href="#" onClick={handleRegister}>Sign Up</a> or <a href="#" className="underline font-bold">Sign In Later</a></p>
            <a href="#" className="font-bold mt-[10px] underline">Privacy Policy</a>
          </div>
        </div>
      </div>
  )
}

export default Login;
