import React from "react";
import Container from "react-bootstrap/esm/Container";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import HpBar from "./RestHP";

function Rest() {

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
      style={{ display: "flex", flexDirection: "row", height: "100%" }}
    >
      <section
        className="section"
        style={{
          paddingTop: "40px",
          paddingBottom: "40px",
          flex: "1 0 auto",
        }}
      >
        <div className="backgroundImage2">
          <Container>
            <div className="row">
              <div className="col-md-12 text-center">
                <h2
                  className="overall-heading"
                  style={{ fontSize: "4em", color: "black" }}
                >
                  Rest
                </h2>
                <HpBar />

              </div>
            </div>
            <Button onClick={routeChange}>Back</Button>
          </Container>
        </div>
      </section>
    </div>
  );
}

export default Rest;