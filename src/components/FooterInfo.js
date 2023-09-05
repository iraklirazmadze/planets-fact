import styled from "styled-components";

const FooterInfo = ({ data, num }) => {
  return (
    <MainBox>
      <InsideBox>
        <Title>rotation time</Title>
        <Value>{data[num].rotationTime}</Value>
      </InsideBox>
      <InsideBox>
        <Title>revolution time</Title>
        <Value>{data[num].revolutionTime}</Value>
      </InsideBox>
      <InsideBox>
        <Title>radius</Title>
        <Value>{data[num].radius}</Value>
      </InsideBox>
      <InsideBox>
        <Title>average temp</Title>
        <Value>{data[num].averageTemp}</Value>
      </InsideBox>
    </MainBox>
  );
};

export default FooterInfo;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-top: 28px;
  width: 87.2%;
`;

const InsideBox = styled.div`
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const Title = styled.p`
  font-family: Spartan;
  font-size: 8px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.7272727489471436px;
  text-align: left;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
`;

const Value = styled.p`
  font-family: Antonio;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.75px;
  text-align: right;
  color: white;
`;
