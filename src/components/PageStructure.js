import InformationalNavbar from "./InformationNavBar";
import styled from "styled-components";
import FooterInfo from "./FooterInfo";
import { useState } from "react";
import bgImg from "../assets/background-stars.svg";

const PageStructure = ({ data, planetName }) => {
  let num = 0;
  data.map((item, index) => {
    if (item.title === planetName) {
      return (num = index);
    }
  });

  const [activeBar, setActiveBar] = useState("overview");
  return (
    <Main>
      <InformationalNavbar
        data={data}
        activeBar={activeBar}
        setActiveBar={setActiveBar}
      />
      <ImgBox>
        <Image
          src={
            activeBar == "structure"
              ? data[num].structureImg
              : data[num].overviewImg[0]
          }
          style={{ width: `${data[num].overviewImg[1]}` }}
        ></Image>
        {activeBar == "surface" ? (
          <SurfaceImage src={data[num].surfaceImg}></SurfaceImage>
        ) : null}
      </ImgBox>
      <H1>{data[num].title}</H1>
      {activeBar == "overview" ? (
        <Info>{data[num].overviewContent}</Info>
      ) : activeBar == "structure" ? (
        <Info>{data[num].structureContent}</Info>
      ) : (
        <Info>{data[num].surfaceContent}</Info>
      )}

      <Source>source: Wikipedia</Source>
      <FooterInfo data={data} num={num} />
    </Main>
  );
};

export default PageStructure;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${bgImg});
  background-size: 100% 100%;
`;

const ImgBox = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Image = styled.img``;

const H1 = styled.h1`
  font-family: Antonio;
  font-size: 40px;
  font-weight: 400;
  line-height: 52px;
  letter-spacing: 0px;
  text-align: center;
  color: white;
`;

const Info = styled.p`
  font-family: Spartan;
  font-size: 11px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  color: white;
  margin: 16px 24px 32px 24px;
`;

const Source = styled.p`
  font-family: Spartan;
  font-size: 12px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;

  font-family: Spartan;
  font-size: 12px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
  color: rgba(255, 255, 255, 0.5);
`;

const SurfaceImage = styled.img`
  position: absolute;
  width: 100px;
  top: 160px;
`;
