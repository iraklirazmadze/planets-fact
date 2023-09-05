import styled from "styled-components";
import PageStructure from "../PageStructure";
import { useNavigate } from "react-router";

const Navigation = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = (item) => {
    navigate(`/${item.title}`);
  };
  return (
    <MainPage>
      {data.map((item) => {
        return (
          <PlanetDivs key={item.title} onClick={() => handleClick(item)}>
            <Circle color={item.color}></Circle>
            <PlanetName>{item.title}</PlanetName>
          </PlanetDivs>
        );
      })}
    </MainPage>
  );
};

export default Navigation;

const MainPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #070724;
  margin-top: 23px;
  padding: 0 32px 0 24px;
`;

const PlanetDivs = styled.div`
  width: 100%;
  height: 65px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 25px;
`;

const PlanetName = styled.a`
  font-family: Spartan;
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1.3636363744735718px;
  text-align: center;
  color: white;
  text-transform: uppercase;
`;
