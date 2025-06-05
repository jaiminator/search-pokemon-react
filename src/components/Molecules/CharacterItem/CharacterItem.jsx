import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import "./CharacterItem.scss"

const CharacterItem = ({ name, image }) => {

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div onClick={() => setTheme("dark")} className={`characterItemContainer${theme == "dark" ? "-dark" : ''}`}>
        <img src={`${image}`} 
        alt={`${name}.png`}
        />
        <p>{name}</p>
      </div>
    </>
  )
}

export { CharacterItem }