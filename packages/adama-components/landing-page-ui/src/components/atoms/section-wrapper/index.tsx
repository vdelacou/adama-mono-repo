
type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export const SectionWrapper = ({ children,className }: SectionWrapperProps) => (
  <section
      className={`py-16 lg:py-20 ${className ?? ""}`}
  >
      {children}
  </section>
);
