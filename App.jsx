/** @jsxImportSource @emotion/react */
import { css } from "@emotion/css";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const globalStyles = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    place-content: center;
    background-color: black;
    overflow: hidden;
    background-image: url('assets/background.avif');
    background-size: cover;
    background-position: bottom;
  }
`;

const logo = css`
  width: 190px;
  height: 190px;
  position: relative;
  z-index: 1;
  transition: transform 0.5s ease, filter 0.5s ease;

  &:hover {
    transform: scale(1.2);
    filter: blur(10px);
  }

  &:hover + .background {
    transform: scale(1.3);
    filter: blur(0px);
  }
`;

const background = css`
  position: absolute;
  inset: 0;
  background-image: url('assets/background.avif');
  background-size: cover;
  background-position: bottom;
  filter: blur(10px);
  transition: transform 0.5s ease, filter 0.5s ease;
`;

const App = () => {
  return (
    <>
      <style>{globalStyles}</style>
      <img src="assets/logo.png" className={logo} alt="logo" />
      <section className={`${background} background`}></section>
    </>
  );
};

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
