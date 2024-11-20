import { ThemeProvider } from "./contexts/ThemeContext";
import { CreateYourComponentsHere } from "./components/CreateYourComponentsHere";

//Wrap all the components in the Global state "ThemeProvider" so that they can all reach the theme of light or dark
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
