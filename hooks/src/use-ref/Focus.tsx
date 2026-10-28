import { useRef } from 'react';

function Focus() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFocus() {
    inputRef.current?.focus();
  }

  return (
    <div>
      <button onClick={handleFocus}>Focus input</button>
      <input ref={inputRef} />
    </div>
  );
}

export default Focus;
