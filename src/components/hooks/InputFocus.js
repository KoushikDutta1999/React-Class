import { useRef, useEffect } from "react";

export default function InputFocus() {
  const inputRef = useRef();

  const newRef = useRef();

  useEffect(() => {
    const timer = setInterval(() => {
      inputRef.current.textContent = "This is second message";
      newRef.current.value = "Hello";
    }, 5000);
    // clearing interval
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h3 ref={inputRef}>Hi just loading.....</h3>
      <input ref={newRef} type="text" value="goodbye" />
    </div>
  );
}
