import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
//   background-color: red;
  padding-left: 200px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: row;
//   background-color: green;
  margin-left: 50px;
  padding-top: 150px;
  justify-content: space-between;
`;

export const Logo = styled.div`
  height: 160px;
  text-align: center;
  padding: 50px;
  font-size: 50px;
  letter-spacing: 15px;
  font-weight: 100;
  text-decoration: none;
`;

export const NavBar = styled.nav`
  height: 215px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavCon = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  margin-top:10px;
  margin-bottom: 20px;
//   background-color: red;
//   background-color: green;
`;

