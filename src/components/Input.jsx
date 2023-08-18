
import PropTypes from "prop-types";

const Input = ({ placeholder, value, setValue, type }) => {
  return (
    <input
      required
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={setValue}
      className="min-w-[300px] h-12 px-4 bg-transparent border border-[#e48b70] rounded-md text-white transition-transform  focus:outline-[#584294] focus:border-transparent"
    />
  );
};


export default Input;

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};