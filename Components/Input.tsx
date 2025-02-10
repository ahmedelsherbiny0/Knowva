import React from "react";

type InputProps = {
    type: string;
    id: string;
    value: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
  };
  
  function Input({ type, id, value, onChange, placeholder }: InputProps) {
    return (
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:ouline-1 outline-gray-400 transition"
        min={16}
        max={40}
      />
    );
  }
  
  export default Input;