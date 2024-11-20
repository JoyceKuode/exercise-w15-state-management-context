<h1 align="center">
  <a href="">
    <img src="/src/assets/state-management.svg" alt="Boiler Plate">
  </a>
</h1>

# React State Management Theme Switcher with useContext Exercise

For this weeks practice you will create a simple theme switcher where dark/light mode are managed using React useContext.

## Getting Started with the Project

### Dependency Installation & Startup Development Server:

Once forked and cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```

### Looking for some hints?

1. **Theme Management with `useContext`**

   - The `useContext` hook in React allows you to access values from a context without prop-drilling. For this exercise, you're using it to manage a simple theme switcher (light/dark mode).
   - Define a context using `createContext()`. Remember to export the context. Follow the naming conventions when you create folders and files. Have a look at the [boilerplate](https://github.com/Technigo/react-vite-use-context-boiler-plate) if you need guidance.

2. **Integrating Components**

   - In your main `App.jsx`, import the theme toggler.
   - Ensure that the `ThemeProvider` wraps your entire application so that the theme context is accessible everywhere.

3. **Testing**

   - Before pushing to GitHub, test your application and make sure it toggles the theme. Ensure everything works seamlessly.

4. **Committing and Pushing**
   - Use `git add .` to stage your changes, followed by `git commit -m "Your commit message here"` to commit them.
   - Push your changes to the GitHub repository using `git push origin main`.

### Solution

In the ThemeContext component we...

- useState to store the default theme (light) in order to change it from the default to dark and vice versa.
- useEffect for the DOM manipulation, to apply the colors from the Style.css.
- We return ThemeContext.Provider, and pass in the value of theme and toggleTheme to the children/nested components.
- We created a button to test the Toggle dark/light functionality.

In the CreateYourComponentsHere component:

- Destructuring the useThemeContext to use the value toggleTheme.
- Added the button component to render the toggleTheme context, to make it able to toggle between light and dark background.
