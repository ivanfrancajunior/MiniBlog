import React from 'react'

const Button = ({children}) => {
  return (
    <button className="bg-[#e48b70] font-bold py-2 px-5 border-3 border-black rounded-md shadow-md shadow-zinc-900 transition-transform transform hover:translate-x-[0.05em] hover:bg-[#584294] hover:translate-y-[0.05em] active:translate-x-[0.05em] active:translate-y-[0.05em]">
      {children}
    </button>
  )
}

export default Button