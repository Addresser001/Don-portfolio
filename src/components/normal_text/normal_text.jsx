import "./style.scss";
const NormalText = ({
  children,
  className,
  width,
  fontSize,
  color,
  fontWeight,
  padding,
  textAlign,
}) => {
  return (
    <p
      className={`normal_text ${className}`}
      style={{ width, fontSize, color, fontWeight, padding, textAlign }}
    >
      {" "}
      {children}
    </p>
  );
};

export default NormalText;
