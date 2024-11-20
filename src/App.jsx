import { ThemeProvider } from "./contexts/ThemeContext";
import { CreateYourComponentsHere } from "./components/CreateYourComponentsHere";

export const App = () => {
  return (
    <ThemeProvider>
      <>
        <h1>Hello</h1>
        <CreateYourComponentsHere />
      </>
    </ThemeProvider>
  );
};
