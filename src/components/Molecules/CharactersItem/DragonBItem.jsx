import "./DragonBItem.scss"

const DragonBItem = ({ name, image }) => {
  return (
    <>
      <div className="dragonBItemContainer">
        <img src={`${image}`} 
        alt={`${name}.png`}
        />
        <p>{name}</p>
      </div>
    </>
  )
}

export default DragonBItem