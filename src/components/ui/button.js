import React from 'react';

export function Button({ variant, size, className, asChild, children, ...props }) {
  const Component = asChild ? 'span' : 'button';
  return (
    <Component
      className={`btn ${variant} ${size} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
