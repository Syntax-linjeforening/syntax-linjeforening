import React from 'react';

type InputType = 'text' | 'password';

interface TextInputProps {
  id: string;
  type: InputType;
  icon?: JSX.Element
  label?: string;
  onChange?: (event: any) => void;
  className?: string;
}

const TextInput = ({ id, type, icon, label, onChange, className }: TextInputProps) => {

  const styleIcon = (icon: JSX.Element) => {
    let props = {
      className: 'w-6 h-6 absolute ml-1.5 top-2 text-gray dark:text-gray-200'
    }

    return React.cloneElement(icon, props);
  }

  return (
    <div className={`relative ${className}`}>
      {icon && styleIcon(icon)}
      <input 
        id={id} 
        name={id}
        type={type}
        placeholder={label} 
        onChange={onChange}
        className={`
          ${icon && 'pl-8 p-2'}
          ${!icon && 'p-3'}
          h-10
          peer w-full py-1 border transition-colors 
          bg-slate-100 dark:bg-transparent
          border-gray-500 focus:border-orange-400 dark:border-gray-400 dark:focus:border-orange-400
          rounded-md dark:text-gray-200 placeholder-transparent focus:outline-none shadow-sm`}
      />
      {label &&       
        <label htmlFor={id} className={`
          absolute left-1 -top-5 pointer-events-none 
          dark:text-gray-300 text-sm transition-all 
          ${icon ? 'peer-placeholder-shown:left-8' : 'peer-placeholder-shown:left-3'}
          peer-placeholder-shown:text-base 
          peer-placeholder-shown:top-2 peer-focus:left-1 peer-focus:-top-5 peer-focus:text-sm`}>
          { label }
        </label>
      }
    </div>
  );
}

export default TextInput;