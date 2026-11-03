import React, { useState, useEffect } from 'react';

interface TypewriterRoleProps {
  roles: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export const TypewriterRole: React.FC<TypewriterRoleProps> = ({
  roles,
  typingSpeed = 50,
  deletingSpeed = 25,
  pauseDuration = 2000,
  className = '',
}) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeoutId: number;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeoutId = window.setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeoutId = window.setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = window.setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        timeoutId = window.setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 300);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, roleIndex, roles, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent min-h-[1.4em]">
        {displayText}
      </span>
      <span
        className="inline-block w-[3px] h-[1.1em] ml-1 bg-cyan-400 rounded-sm animate-pulse align-middle"
        aria-hidden="true"
      />
    </span>
  );
};
