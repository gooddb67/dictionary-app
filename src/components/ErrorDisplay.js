import frown from "../assets/images/frown.png";

const ErrorDisplay = ({ message }) => {
  return (
    <div>
      <img src={frown} alt="Frown emoji" />
      <p>{message}</p>
    </div>
  );
};

export default ErrorDisplay;
