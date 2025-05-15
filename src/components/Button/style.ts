import styled from "styled-components";

export const Container = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  padding: 0.9rem 2rem;
  margin: 0;
  font-family: inherit;
  font-size: 17px;
  position: relative;
  display: inline-block;
  letter-spacing: 0.05rem;
  font-weight: 700;
  border-radius: 500px;
  overflow: hidden;
  background: #66ff66;
  color: ghostwhite;

  span {
    position: relative;
    z-index: 10;
    transition: color 0.4s;
  }

  &:hover span {
    color: black;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -10%;
    width: 120%;
    height: 100%;
    z-index: 0;
    background: #000;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  &:hover::before {
    transform: translate3d(100%, 0, 0);
  }
`;
