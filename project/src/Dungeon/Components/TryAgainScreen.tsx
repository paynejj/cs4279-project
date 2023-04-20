import { Link } from "react-router-dom"
import CDButton from "../../Components/CDButton"

function TryAgainScreen() {
  return (
    <div >
      <h1>YOU DIED</h1>
      <Link to="/dungeon-select" children={<CDButton> Level Select</CDButton>} />
      <Link to="/python-dungeon" children={<CDButton> Try Scripting </CDButton>} />
      <Link to="/hometown" children={<CDButton> Home </CDButton>} />
    </div>
  )
}

export default TryAgainScreen