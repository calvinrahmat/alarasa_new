
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 text-center text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Catering Service. All rights reserved.</p>
      <p className="mt-1">Delicious meals delivered to your doorstep.</p>
    </footer>
  );
};

export default Footer;
