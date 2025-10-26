// Simple link component replacement for single-page app
// All links will scroll to top or act as regular anchor
import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  [key: string]: any;
}

const Link: React.FC<LinkProps> = ({ href, children, className, onClick, ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
    // Scroll to top for any internal navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default Link;
