import { useContext } from "react"
import { ThemeContext } from "../../../contexts/ThemeContext"

const ThemeButton = () => {
    const { setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
        setTheme((theme) => theme === "dark" ? "light" : "dark");
    }

  return (
    <button onClick={toggleTheme}>Change theme</button>
  )
}

export { ThemeButton }