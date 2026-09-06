import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, className = '', id, ...props }, ref) => {
    return (
      <section ref={ref} id={id} className={`section ${className}`} {...props}>
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;
