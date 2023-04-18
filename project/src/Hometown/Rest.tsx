import React from "react";
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";
import HpBar from "./RestHP";
import CDButton from "../Components/CDButton";
import { PlayerDataContext } from "../Player/PlayerDataContext";
import { defaultRestArt, mageRest1, mageRest2, warriorRest1, warriorRest2, rangerRest1, rangerRest2 } from "./AsciiArts";

function Rest() {
  const { playerData } = React.useContext(PlayerDataContext)
  const [art, setArt] = React.useState(defaultRestArt);
  // count down timer
  const [time, setTime] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);   // 600000ms = 10min


    if (playerData.class === "Mage") {
      setArt(mageRest1);
      console.log("mage")
    } else if (playerData.class === "Ranger") {
      setArt(rangerRest1);
      console.log("ranger")
    } else {
      setArt(warriorRest1);
    }

    if (art === warriorRest1) {
      setArt(warriorRest2);
    } else if (art === warriorRest2) {
      setArt(warriorRest1);
    } else if (art === rangerRest1) {
      setArt(rangerRest2);
    } else if (art === rangerRest2) {
      setArt(rangerRest1);
    } else if (art === mageRest1) {
      setArt(mageRest2);
    } else if (art === mageRest2) {
      setArt(mageRest1);
    }

    return () => clearInterval(interval);
  }, [time]);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/hometown`;
    navigate(path);
  }
  return (
    <div
      className="Hometown"
      style={{ display: "flex", height: "100%" }}
    >
      <h2
        className="overall-heading"
        style={{ fontSize: "4em", color: "pink" }}
      >
        Rest
      </h2>
      <section
        className="section"
        style={{
          paddingTop: "70px",
          paddingBottom: "40px",
        }}>
        <div className="backgroundImage2">
          <Container>
            <pre style={{ color: "pink", fontSize: "125%"}}>{art}</pre>
            <div className="row">
              <div className="col-md-12 text-center">
                <HpBar />
              </div>
            </div>
            <CDButton onClick={routeChange}>Back</CDButton>
          </Container>
        </div>
      </section>
    </div>
  );
}

export default Rest;