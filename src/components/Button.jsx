export const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};
// A simple button-component that toggles the light from "light" to "dark" -> see the styles.css
