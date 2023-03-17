import React, { createContext, useState } from "react";

export const ThemeContexts4 = createContext({
  theme4: "",
  handleChangeTheme4: () => {},
});

export default function Theme4({ children }) {
  const [theme4, setTheme4] = useState(false);

  const handleChangeTheme4 = () => {
    setTheme4(theme4 === false ? true : false);
  };
  return (
    <ThemeContexts4.Provider value={{ theme4: theme4, handleChangeTheme4 }}>
      {children}
    </ThemeContexts4.Provider>
  );
}
