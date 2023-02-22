import React from "react";
import Container from "react-bootstrap/esm/Container";
import styled from "styled-components";
import "./Hometown.css";
import { useNavigate } from "react-router-dom";

function Hometown() {
  const Button = styled.button`
    background-color: black;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 10px;
    margin: 20px 0px;
    cursor: pointer;
    justify-content: center;
  `;
  let navigate = useNavigate(); 
  const routeChange1 = () =>{ 
    let path = `/shop`; 
    navigate(path);
  }
  const routeChange2 = () =>{ 
    let path = `/quest`; 
    navigate(path);
  }
  const routeChange3 = () =>{ 
    let path = `/rest`; 
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
            paddingTop: "60px",
            paddingBottom: "40px",
            flex: "1 0 auto",
          }}
        >
        <div className="backgroundImage">
          <Container>
            <div className="row">
              <div className="col-md-12 text-center">
                <h2
                  className="overall-heading"
                  style={{ fontSize: "3em", color: "#cfae70" }}
                >
                  Hometown
                </h2>
                <div
                  className="underline mx-auto"
                  style={{
                    height: "10px",
                    width: "8rem",
                    marginTop: "10px",
                    marginBottom: "20px",
                    backgroundColor: "#cfae70",
                  }}
                />
                <div
                  className="Hometown"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "100%",
                  }}
                >
                  <div
                    className="Shop-Section"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "50%",
                    }}
                  >
                    <img src={require("../images/store_icon.png")} />
                    <Button onClick={routeChange1}>Shop</Button>
                  </div>

                  <div
                    className="Quest-Section"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "50%",
                    }}
                  >
                    <img src={require("../images/quest_board_icon.png")} />
                    <Button onClick={routeChange2}>Quest Board</Button>
                  </div>

                  <div
                    className="Rest-Section"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "50%",
                    }}
                  >
                    <img src={require("../images/fireplace_icon.png")} />
                    <Button onClick={routeChange3}>Rest Area</Button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
          </div>
        </section>
      </div>
  );
}

export default Hometown;
