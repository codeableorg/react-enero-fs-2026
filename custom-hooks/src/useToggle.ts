import { useState } from 'react';

function useToggle(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return [isOpen, toggle] as const;
}

export default useToggle;
