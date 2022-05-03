import "./style.scss";
const Button = ({ btn_text, className }) => {
  return <button className={`button ${className}`}>{btn_text}</button>;
};

export default Button;
