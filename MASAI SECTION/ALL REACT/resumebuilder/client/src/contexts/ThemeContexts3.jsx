import React, { createContext, useState } from "react";

export const ThemeContexts3 = createContext({
  theme3: "",
  handleChangeTheme3: () => {},
});

export default function Theme3({ children }) {
  const [theme3, setTheme3] = useState(false);

  const handleChangeTheme3 = () => {
    setTheme3(theme3 === false ? true : false);
  };
  return (
    <ThemeContexts3.Provider value={{ theme3: theme3, handleChangeTheme3 }}>
      {children}
    </ThemeContexts3.Provider>
  );
}
