interface Props {
  placeholder: string;
  value: string;
  setValue: () => void;
  type: string;
}

const Input = ({ placeholder, value, setValue, type }: Props) => {
  return (
    <input
      required
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={setValue}
      className='rounded-full min-w-[400px] md:w-full max-w-md border-black border-2 p-2.5 pl-5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#bfff00] focus:placeholder:text-slate-500 active:shadow-[2px_2px_0px_rgba(0,0,0,1)]'
    />
  );
};

export default Input;
