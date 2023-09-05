import { useState } from "react";
import styled from "styled-components";

const InformationalNavbar = ({ data, activeBar, setActiveBar }) => {
  return (
    <Main data={data}>
      <Li
        style={
          activeBar == "overview"
            ? {
                borderBottom: `4px solid ${data[0].color}`,
                color: "white",
              }
            : null
        }
        onClick={() => setActiveBar("overview")}
      >
        overview
      </Li>
      <Li
        style={
          activeBar == "structure"
            ? { borderBottom: `4px solid ${data[0].color}`, color: "white" }
            : null
        }
        onClick={() => setActiveBar("structure")}
      >
        structure
      </Li>
      <Li
        style={
          activeBar == "surface"
            ? { borderBottom: `4px solid ${data[0].color}`, color: "white" }
            : null
        }
        onClick={() => setActiveBar("surface")}
      >
        surface
      </Li>
    </Main>
  );
};

export default InformationalNavbar;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const Li = styled.div`
  font-family: Spartan;
  font-size: 9px;
  font-weight: 700;
  line-height: 10px;
  letter-spacing: 1.9285714626312256px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  text-transform: uppercase;
  margin: 0 24px;
  height: 24px;
  :hover {
    color: white;
    cursor: pointer;
  }
`;
