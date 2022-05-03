import "./style.scss";
const Header = ({ children, className }) => {
  return <h2 className={`headers ${className}`}>{children}</h2>;
};

export default Header;
