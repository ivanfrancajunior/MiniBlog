import Logo from "./Logo";
import React from "react";
import { Link } from "react-router-dom";
import { useAuthValue } from "../context/AuthContetxt";
import { useAuthentication } from "../hooks/useAuthentication";
import { RiCloseFill, RiMenuLine } from "react-icons/ri";

const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();
  const [hidden, setHidden] = React.useState(true);
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setHidden(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
  }, [hidden, setHidden]);

  return (
    <nav className='flex items-center justify-between h-[54px] px-10 border-b-2 border-black'>
      <div>
        <Logo />
      </div>
      <ul className='hidden sm:flex gap-5 font-bold'>
        {!user && (
          <>
            <li>
              <Link to='/login' className='hover:text-[#bfff00]'>
                Entrar
              </Link>
            </li>
            <li>
              <Link to='/register' className='hover:text-[#bfff00]'>
                Registrar
              </Link>
            </li>
          </>
        )}

        {user && (
          <>
            <li>
              <Link to='/posts/create' className='hover:text-[#bfff00]'>
                Novo!
              </Link>
            </li>
            <li>
              <Link to='/dashboard' className='hover:text-[#bfff00]'>
                Dashboard
              </Link>
            </li>
          </>
        )}
        <li>
          <Link to='/about' className='hover:text-[#bfff00]'>
            Sobre
          </Link>
        </li>
        {user && (
          <li>
            <button onClick={logout}>sair</button>
          </li>
        )}
      </ul>
      <div className='sm:hidden'>
        <button onClick={() => setHidden(!hidden)}>
          {hidden ? <RiMenuLine width={28} /> : <RiCloseFill />}
        </button>
      </div>
      {/*
       display mobile
      <div
        className={`h-screen w-full  bg-orange-500 ${
          hidden ? "hidden" : ""
        } flex h-full flex-col items-start justify-start gap-10 px-10  pt-20 text-xl font-semibold`}
      >
        <ul className='flex  cursor-pointer flex-col gap-10'>
          <li className='list-none '>
            <Link to='/' className='hover:text-[#bfff00]'>
              Home
            </Link>
          </li>
          <li className='list-none '>
            <Link to='/login' className='hover:text-[#bfff00]'>
              Login
            </Link>
          </li>
          <li className='list-none '>
            <Link to='/about' className='hover:text-[#bfff00]'>
              About
            </Link>
          </li>
          <li className='list-none '>
            <Link to='/post' className='hover:text-[#bfff00]'>
              Posts
            </Link>
          </li>
          <li className='list-none '>
            <Link to='/register' className='hover:text-[#bfff00]'>
              Register
            </Link>
          </li>
        </ul>
      </div> */}
    </nav>
  );
};

export default Navbar;
