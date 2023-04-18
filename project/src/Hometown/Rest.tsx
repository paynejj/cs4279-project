import React from "react";
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";
import HpBar from "./RestHP";
import CDButton from "../Components/CDButton";
import { PlayerDataContext } from "../Player/PlayerDataContext";

function Rest() {
  const mage1 = `                          ,^.
                         /||_\\
      (                 /_____\\
       )                /.,.\\\\\\
      (  (               \\=__/
          )              ,'-'.
    (    (  ,,       _.__|/ /|
     ) /\\ -((------((_|___/  |
   (  // |  \`\'      (    \`\'--|
 _ -.;_/ \\\\--._     /,  .-.__/.
(_;-// | \\ \\\-'.\\    <_, _\\'--'|
( \`.__ _  ___,')      <_,-'__,'
 \`'(_ )_)(_)_)'
`;

  const mage2 = `      )                   ,^.
     (   )               /||_\\
        (               /_____\\
         )              /.,.\\\\\\
     (    )              \\=__/
      )  (    ''         ,'-'.
    )           ''   _.__|/ /|
       /\\ -((------((_|___/  |
      // |  \`\'      (    \`\'--|
 _ -.;_/ \\\\--._     /,  .-.__/.
(_;-// | \\ \\\-'.\\    <_, _\\'--'|
( \`.__ _  ___,')      <_,-'__,'
 \`'(_ )_)(_)_)'
`;


  const ranger1 = `                           / |
                        _./  |_//
      (                (_/____//
       )                (.,.)R)
      (  (               \\=__/
          )              ,'-'.
    (    (  ,,       _.__|/ /|
     ) /\\ -((------((_|___/  |
   (  // |  \`\'      ((   \`\'--|
 _ -.;_/ \\\\--._      \\\\ \\-.__/.
(_;-// | \\ \\\-'.\\    <_,\\_\\'--'|
( \`.__ _  ___,')      <_,-'__,'
 \`'(_ )_)(_)_)'
`;


  const ranger2 = `      )                    / |
     (   )              _./  |_//
        (              (_/____//
         )              (.,.)R)
     (    )              \\=__/
      )  (    ''         ,'-'.
    )           ''   _.__|/ /|
       /\\ -((------((_|___/  |
      // |(         ((   \`\'--|
 _ -.;_/ \\\\--._\`\'    \\\\ \\-.__/.
(_;-// | \\ \\\-'.\\    <_,\\_\\'--'|
( \`.__ _  ___,')      <_,-'__,'
 \`'(_ )_)(_)_)'
`;



  const warrior1 = `                    
                        _____.
     (                  ____ |
      )                 _  _'|
     (  (               _||_ |
         )             ( ,'-'.,
    (   (     ,,     _./_|/ ) |
    )  /\\ -((------((_|___/   |
  (   // |          ((   \`\'---|
 _ -.;_/ \\\\--._      \\\\  \\.__/ .
(_;-// | \\ \\\-'.\\    <_,\\_ \\'--'|
( \`.__ _  ___,')      <__,''__,'
 \`'(_ )_)(_)_)'
`;


  const warrior2 = `      )
     (   )    (         _____.
               )        ____ |
         )              _  _'|
     (    )             _||_ |
      )       ''       ( ,'-'.,
    )           ''   _./_|/ ) |
       /\\ -((------((_|___/   |
      // |(         ((   \`\'---|
 _ -.;_/ \\\\--._\`\'    \\\\  \\.__/ .
(_;-// | \\ \\\-'.\\    <_,\\_ \\'--'|
( \`.__ _  ___,')      <__,''__,'
 \`'(_ )_)(_)_)'
`;

  const { playerData } = React.useContext(PlayerDataContext)
  const [art, setArt] = React.useState("");
  // count down timer
  const [time, setTime] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);   // 600000ms = 10min


    if (playerData.class === "Mage") {
      setArt(mage1);
      console.log("mage")
    } else if (playerData.class === "Ranger") {
      setArt(ranger1);
      console.log("ranger")
    } else {
      setArt(warrior1);
    }

    if (art === warrior1) {
      setArt(warrior2);
    } else if (art === warrior2) {
      setArt(warrior1);
    } else if (art === ranger1) {
      setArt(ranger2);
    } else if (art === ranger2) {
      setArt(ranger1);
    } else if (art === mage1) {
      setArt(mage2);
    } else if (art === mage2) {
      setArt(mage1);
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
            <pre style={{ color: "pink" }}>{art}</pre>
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