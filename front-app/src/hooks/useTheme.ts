import { useState } from "react";

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    document.body.style.backgroundColor = isDark ? "#fff" : "#222";
    document.body.style.color = isDark ? "#000" : "#fff";
  };

  return { isDark, toggleTheme };
};
