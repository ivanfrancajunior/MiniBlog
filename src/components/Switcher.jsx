import { useState } from "react";

const Switcher = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center justify-center p-2 text-xl w-5 h-5 cursor-pointer" onClick={() => setIsChecked(!isChecked)} >
      {isChecked? '🌑': '🌞'}
  </div>
  );
};

export default Switcher;
