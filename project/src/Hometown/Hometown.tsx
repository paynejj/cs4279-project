import Container from "react-bootstrap/esm/Container";
import styled from "styled-components";
import "./Hometown.css";
import { useNavigate } from "react-router-dom";
import CDButton from "../Components/CDButton";

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
  const routeChange1 = () => {
    let path = `/shop`;
    navigate(path);
  }
  const routeChange2 = () => {
    let path = `/quest`;
    navigate(path);
  }
  const routeChange3 = () => {
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
                  style={{ fontSize: "3em", color: "purple" }}
                >
                  Hometown
                </h2>
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
                    <img
                      src={require("../images/store_icon.png")}
                      onClick={routeChange1}
                      style={{ cursor: "pointer" }} />
                    <CDButton onClick={routeChange1}>Shop</CDButton>
                  </div>

                  <div
                    className="Quest-Section"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "50%",
                    }}
                  >
                    <img src={require("../images/quest_board_icon.png")}
                      onClick={routeChange2}
                      style={{ cursor: "pointer" }} />
                    <CDButton onClick={routeChange2}>Quest Board</CDButton>
                  </div>

                  <div
                    className="Rest-Section"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "50%",
                    }}
                  >
                    <img src={require("../images/fireplace_icon.png")}
                      onClick={routeChange3}
                      style={{ cursor: "pointer" }} />
                    <CDButton onClick={routeChange3}>Rest Area</CDButton>
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
