import { Fragment } from "react";
const Toggle = ({ toggleTheme, isChecked }) => {
  const handleChange = (e) => {
    if (isChecked === "dark") {
      toggleTheme("light");
    } else {
      toggleTheme("dark");
    }
  };
  return (
    <Fragment>
      <input
        className="mr-2 h-5 w-10 appearance-none rounded-full bg-gray-dark before:pointer-events-none before:absolute before:h-5 before:w-2.5 before:ml-[3px] before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:mt-[3px] after:ml-[3px] after:h-3.5 after:w-3.5 after:rounded-full after:border-none after:bg-white  after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:mt-[3px] checked:after:ml-[22px] checked:after:h-3.5 checked:after:w-3.5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer dark:checked:bg-purple dark:checked:after:bg-white"
        type="checkbox"
        role="switch"
        id="themeCheckbox"
        checked={isChecked === "dark" ? true : false}
        onChange={handleChange}
      />
      <label
        className="inline-block pl-[0.15rem] dark:text-white hover:cursor-pointer"
        htmlFor="themeCheckbox"
      >
        Default switch checkbox input
      </label>
    </Fragment>
  );
};

export default Toggle;
