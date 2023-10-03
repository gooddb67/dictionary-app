import { useState, useEffect, useRef } from "react";
function Dropdown({ options, onChange, value }) {
  const [isOpen, setIsopen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsopen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsopen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsopen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 dark:text-white rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <div
        className="flex justify-between dark:text-white items-centered cursor-pointer "
        onClick={handleClick}
      >
        {value?.label || "Select..."}
      </div>
      {isOpen && (
        <div className="absolute dark:text-white top-full">
          {renderedOptions}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
