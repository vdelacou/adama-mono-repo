type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonProps) => (
  <button role="button" {...props} className={`${props.className ?? ''} px-4 py-2.5 text-center text-sm font-medium duration-150`}>
    {children}
  </button>
);
