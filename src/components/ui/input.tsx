import * as React from "react"

import { cn } from "@/lib/utils";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}
    
  
{/*  NORMAL INPUT */}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}

      />
    )
  }
)

{/*  PASSWORD INPUT WITH TOGGLE EYE ICON*/}
const InputPassword = React.forwardRef<HTMLInputElement, InputProps>(
  ({  className, type, ...props }, ref) => {

    const [showPassword, setShowPassword] = React.useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const inputClasses = cn(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      type === "password",
      className
    );

    return (
      <div className={cn("relative", className)}>
        
        <input
          type={type === "password" && showPassword ? "text" : type}
          className={inputClasses}
          ref={ref}
          {...props}
        />
        {type === "password" && (
          <div className="absolute right-0 flex items-center pr-3 -translate-y-1/2 top-1/2 gap-x-1">
            {showPassword ? (
              <EyeClosedIcon
                className="cursor-pointer"
                onClick={togglePasswordVisibility}
                
              />
            ) : (
              <EyeOpenIcon
                className="cursor-pointer"
                onClick={togglePasswordVisibility}
                
              />
            )}
            
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
InputPassword.displayName = "InputPassword";

export { Input, InputPassword }
