import React, { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  extraClasses?: string;
  format?: "outline" | "text";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ title, extraClasses, format, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={`rounded bg-primary-300 text-white px-4 py-2
          hover:bg-primary-200 transition-colors duration-300
          ${extraClasses}
          ${
            format === "outline"
              ? "border border-primary-200 text-text-500 bg-transparent hover:bg-primary-300 hover:text-white"
              : format === "text"
              ? "text-black bg-transparent hover:bg-transparent"
              : ""
          }
        `}
        {...rest}
      >
        {title}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
