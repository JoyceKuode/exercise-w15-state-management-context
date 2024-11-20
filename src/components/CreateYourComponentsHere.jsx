import { Button } from "./Button";
import { useThemeContext } from "../contexts/ThemeContext";

export const CreateYourComponentsHere = () => {
  const { toggleTheme } = useThemeContext();

  return (
    <div>
      <Button onClick={toggleTheme}>Toggle theme</Button>
    </div>
  );
};

// Hi Gaby ! Check out these React shortcuts :)
// rafce : shortcut for creating react functional component with an export
// rafc : create a functional component without an export
// rpce : functional component with prop-types
