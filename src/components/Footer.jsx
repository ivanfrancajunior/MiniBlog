// import Logo from "./Logo";
import { RxGithubLogo } from "react-icons/rx";
import { RxLinkedinLogo } from "react-icons/rx";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className='footer footer-center bg-black text-white p-10'>
      <aside>
        {/*  */}
        <p className='font-bold'>
          MINIBLOG
          <br />
          Feito com carinho
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className='grid grid-flow-col gap-4'>
          <a
            className='hover:text-[#bfff00] transition-colors duration-150 '
            rel='noreferrer'
            href='https://github.com/ivanfrancajunior'
            target='_blank'
          >
            <RxGithubLogo size={24} />
          </a>
          <a
            className='hover:text-[#bfff00] transition-colors duration-150 '
            rel='noreferrer'
            href='https://www.linkedin.com/in/ivan-fo-junior'
            target='_blank'
          >
            <RxLinkedinLogo size={24} />
          </a>
          <a
            className='hover:text-[#bfff00] transition-colors duration-150 '
            rel='noreferrer'
            href='https://x.com/JOTA94'
            target='_blank'
          >
            <RiTwitterXFill size={24} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
