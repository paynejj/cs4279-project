import React from "react";
import Container from "react-bootstrap/esm/Container";
import styled from "styled-components";

function Shop() {
  const Button = styled.button`
    background-color: black;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 10px;
    margin: 20px 0px;
    cursor: pointer;
  `;

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
        <div className="backgroundImage">
          <Container>
            <div className="row">
              <div className="col-md-12 text-center">
                <h2
                  className="overall-heading"
                  style={{ fontSize: "3em", color: "white" }}
                >
                  Store
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
                
              </div>
            </div>
          </Container>
          </div>
        </section>
      </div>
  );
}

export default Shop;