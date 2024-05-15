import React, { useEffect, useRef } from "react";

interface InputProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}

const Input = ({ onChange, value, ...rest }: InputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      className="bg-black border border-green rounded text-green text-xl font-medium outline-none p-2 resize-none"
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Input;
