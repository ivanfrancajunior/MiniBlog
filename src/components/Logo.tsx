import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link
      to='/'
      className='flex gap-1 items-center justify-center transition duration-300'
    >
      <h2 className='text-2xl font-bold uppercase'>MiniBlog</h2>
    </Link>
  );
};

export default Logo;
