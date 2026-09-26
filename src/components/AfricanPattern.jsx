import React from 'react';

/**
 * AfricanPattern: A vibrant traditional geometric pattern ribbon (green, orange, red, black)
 * inspired directly by the bottom border of the official Lagos'26 conference flyer.
 */
export default function AfricanPattern({ className = "h-4" }) {
  return (
    <div 
      className={`w-full overflow-hidden bg-cover bg-repeat-x ${className}`}
      style={{
        backgroundImage: "url('/assets/african-pattern.png')",
        backgroundSize: "auto 100%",
        backgroundPosition: "left center",
      }}
      role="presentation"
      aria-hidden="true"
    />
  );
}
