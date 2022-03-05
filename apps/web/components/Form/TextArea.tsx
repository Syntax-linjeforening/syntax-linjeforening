type ResizeOptions = 'vertical' | 'horizontal' | 'both' | 'none';

interface TextAreaProps {
  id: string;
  label?: string;
  resize?: ResizeOptions;
  maxLength?: number;
  className?: string;
}

const TextArea = ({ id, label, resize, maxLength, className }: TextAreaProps) => {
  return (
    <div className={`relative my-2 ${className}`}>
      <textarea
        id={id}
        placeholder={label}
        maxLength={maxLength}
        className={`
          ${resize === 'vertical' && 'resize-y'}
          ${resize === 'horizontal' && 'resize-x'}
          ${resize === 'both' && 'resize'}
          ${(!resize || resize === 'none') && 'resize-none'}
          px-3 py-2 w-full
          peer border transition-colors bg-slate-100 dark:bg-transparent
          border-gray-500 focus:border-orange-400 dark:border-gray-400 dark:focus:border-orange-400
          rounded-md dark:text-gray-200 placeholder-transparent focus:outline-none shadow-sm
          min-h-[4rem]
          max-h-64
        `}
      />
      {label &&
        <label htmlFor={id} className={`
          absolute left-1 -top-5 pointer-events-none
          dark:text-gray-300 text-sm transition-all
          peer-placeholder-shown:text-base
          peer-placeholder-shown:left-3
          peer-placeholder-shown:top-2
          peer-focus:-top-5
          peer-focus:left-1
          peer-focus:text-sm
          `}
        >
          {label}
        </label>
      }
    </div>
  );
}

export default TextArea;