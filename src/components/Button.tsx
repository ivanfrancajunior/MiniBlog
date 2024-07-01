interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <button className='text-black border-2 border-black primary rounded-full h-12 px-4 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-colors duration-200'>
      {children}
    </button>
  );
};

export default Button;
