
import Logo from "./Logo";
import Switcher from "./Switcher";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between h-[54px] px-10">
      <div>
        <Logo size={40} />
      </div>
      <ul className="hidden lg:flex gap-5 font-bold">
        
        <li className="list-none ">
          <Link to='/' className="hover:text-[#e48b70]" >Home</Link>
        </li>
        <li className="list-none ">
          <Link to='/login' className="hover:text-[#e48b70]" >Login</Link>
        </li>
        <li className="list-none ">
          <Link to='/about' className="hover:text-[#e48b70]" >About</Link>
        </li>
        <li className="list-none ">
          <Link to='/post' className="hover:text-[#e48b70]" >Posts</Link>
        </li>
        <li className="list-none ">
          <Link to='/register' className="hover:text-[#e48b70]" >Register</Link>
        </li>
       
      </ul>
      <div>
        <Switcher />
      </div>
    </nav>
  );
};

export default Navbar;
