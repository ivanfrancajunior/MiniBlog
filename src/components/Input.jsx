//eslint-disable-next-line
const Input = ({ placeholder, value, setValue, type }) => {
  return (
    <input
      required
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={setValue}
      className="min-w-[340px] h-12 px-4 bg-transparent border border-[#e48b70] rounded-md text-white transition-transform  focus:outline-[#584294] focus:border-transparent"
    />
  );
};

export default Input;
