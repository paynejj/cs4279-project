import { Link, useParams } from "react-router-dom"
import CDButton from "../../Components/CDButton"

function VictoryScreen() {
  const { levelname, gold } = useParams()
  return (
    <div >
      <h1>DUNGEON COMPLETED!</h1>
      <h3>{`Script ${levelname} to gain ${gold} gold per second`}</h3>
      <Link to="/dungeon-select" children={<CDButton> Level Select</CDButton>} />
      <Link to="/python-dungeon" children={<CDButton> Script it! </CDButton>} />
      <Link to="/hometown" children={<CDButton> Home </CDButton>} />
    </div>
  )
}

export default VictoryScreen
