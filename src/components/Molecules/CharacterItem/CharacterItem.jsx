import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import "./CharacterItem.scss"

const CharacterItem = ({ name, image }) => {

  const theme = useContext(ThemeContext);

  return (
    <>
      <div className="characterContainer" style={{backgroundColor: theme}}>
        <img src={`${image}`} 
        alt={`${name}.png`}
        />
        <p style={{color: 'white'}}>{name}</p>
      </div>
    </>
  )
}

export { CharacterItem }