type GradientWrapperProps = {
  children: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
} & React.HTMLAttributes<HTMLElement>;

export const GradientWrapper = ({ children, className, wrapperClassName }: GradientWrapperProps) => (
  <div className={`relative py-28 ${className || ''}`}>
    <div
      className={`absolute top-12 m-auto h-[250px] max-w-3xl blur-[130px] ${wrapperClassName || ''}`}
      style={{
        background: 'linear-gradient(108.49deg, rgba(152, 103, 240, 0.24) 23.1%, rgba(237, 78, 80, 0.06) 62.53%)',
      }}
    ></div>
    <div className="relative">{children}</div>
  </div>
);
