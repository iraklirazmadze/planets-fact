import styled from "styled-components";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Mercury from "./components/pages/Mercury";
import Header from "./components/Header";
import Venus from "./components/pages/Venus";
import data from "./data";
import Navigation from "./components/pages/Navigation";
import Earth from "./components/pages/Earth";
import Mars from "./components/pages/Mars";
import Jupiter from "./components/pages/Jupiter";
import Saturn from "./components/pages/Saturn";
import Uranus from "./components/pages/Uranus";
import Neptune from "./components/pages/Neptune";

function App() {
  return (
    <MainPage>
      <Header />
      <Routes>
        <Route path="/navigation" element={<Navigation data={data} />} />
        <Route path={"/"} element={<Mercury data={data} />} />
        <Route path={"/mercury"} element={<Mercury data={data} />} />
        <Route path="/venus" element={<Venus data={data} />} />
        <Route path="/earth" element={<Earth data={data} />} />
        <Route path="/mars" element={<Mars data={data} />} />
        <Route path="/jupiter" element={<Jupiter data={data} />} />
        <Route path="/saturn" element={<Saturn data={data} />} />
        <Route path="/uranus" element={<Uranus data={data} />} />
        <Route path="/neptune" element={<Neptune data={data} />} />
      </Routes>
    </MainPage>
  );
}

export default App;

const MainPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #070724;
`;
