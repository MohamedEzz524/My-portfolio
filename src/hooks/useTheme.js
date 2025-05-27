import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme Must be used within Theme Provider");
  }

  return context;
};

export default useTheme;
