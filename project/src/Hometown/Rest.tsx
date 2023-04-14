import React from "react";
import Container from "react-bootstrap/esm/Container";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import HpBar from "./RestHP";
import CDButton from "../Components/CDButton";

function Rest() {
  const asciiArt = `                          ,^.
                         /||_\\
      (                 /_____\\
       )                /.,.\\\\\\
      (  (               \\=__/
          )              ,'-'.
    (    (  ,,       _.__|/ /|
     ) /\\ -((------((_|___/  |
   (  // | (\`\'      ((   \`\'--|
 _ -.;_/ \\\\--._      \\\\ \\-.__/.
(_;-// | \\ \\\-'.\\    <_,\\_\\'--'|
( \`.__ _  ___,')      <_,-'__,'
 \`'(_ )_)(_)_)'
`;
  const Button = styled.button`
    background-color: black;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 10px;
    margin: 20px 0px;
    cursor: pointer;
  `;
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
            <pre style={{ color: "pink" }}>{asciiArt}</pre>
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