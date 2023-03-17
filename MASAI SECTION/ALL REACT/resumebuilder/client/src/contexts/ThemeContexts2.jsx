import React, { createContext, useState } from "react";

export const ThemeContexts2 = createContext({
  theme2: "",
  handleChangeTheme2: () => {},
});

export default function Theme2({ children }) {
  const [theme2, setTheme2] = useState(false);

  const handleChangeTheme2 = () => {
    setTheme2(theme2 === false ? true : false);
  };
  return (
    <ThemeContexts2.Provider value={{ theme2: theme2, handleChangeTheme2 }}>
      {children}
    </ThemeContexts2.Provider>
  );
}
