import Logo from "./Logo";
import React from "react";
import { Link } from "react-router-dom";
import { useAuthValue } from "../context/AuthContetxt";
import { useAuthentication } from "../hooks/useAuthentication";

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
          <>
            <div className=''>
              <div className='dropdown'>
                <div
                  tabIndex={0}
                  role='button'
                  className='btn btn-ghost btn-circle'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h7'
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3  w-52 p-2 shadow'
                >
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
                        <Link
                          to='/posts/create'
                          className='hover:text-[#bfff00]'
                        >
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
              </div>
            </div>
          </>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
