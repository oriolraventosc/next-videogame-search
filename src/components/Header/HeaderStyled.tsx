import { styled } from "@mui/material";
import colors from "../../styles/colors";

const HeaderStyled = styled("header")`
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 62px;
  }

  .navbar .menu-items {
    display: flex;
  }

  .navbar .nav-container a:hover {
    font-weight: bolder;
  }

  .nav-container {
    display: block;
    position: relative;
    height: 60px;
    width: inherit;
    padding-right: 3.1rem;
  }

  .nav-container .checkbox {
    position: absolute;
    display: block;
    height: 32px;
    width: 32px;
    top: 20px;
    left: 20px;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }

  .nav-container .hamburger-lines {
    display: block;
    height: 26px;
    width: 32px;
    position: absolute;
    top: 17px;
    left: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: #fff;
  }

  .line.line1 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
  }

  .line.line2 {
    transition: transform 0.2s ease-in-out;
  }

  .line.line3 {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
  }

  .line.line1-active {
    transform: rotate(45deg);
  }

  .line.line2-active {
    transform: scaleY(0);
  }

  .line.line3-active {
    transform: rotate(-45deg);
  }

  .desktop {
    display: none;
  }
  .row .three {
    padding: 80px 30px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #2c3e50;
    color: #ecf0f1;
    text-align: center;
  }

  .hamburger .line {
    width: 40px;
    border-radius: 5px;
    height: 5px;
    background-color: #ecf0f1;
    display: block;
    margin: 8px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .hamburger:hover {
    cursor: pointer;
  }

  /* ONE */

  #hamburger-1.is-active .line:nth-child(2) {
    opacity: 0;
  }

  #hamburger-1.is-active .line:nth-child(1) {
    -webkit-transform: translateY(13px) rotate(45deg);
    -ms-transform: translateY(13px) rotate(45deg);
    -o-transform: translateY(13px) rotate(45deg);
    transform: translateY(13px) rotate(45deg);
  }

  #hamburger-1.is-active .line:nth-child(3) {
    -webkit-transform: translateY(-13px) rotate(-45deg);
    -ms-transform: translateY(-13px) rotate(-45deg);
    -o-transform: translateY(-13px) rotate(-45deg);
    transform: translateY(-13px) rotate(-45deg);
  }
  .mobile-tablet {
    display: flex;
    padding-left: 2rem;
    padding-right: 2rem;
    height: 90px;
    justify-content: space-between;
    align-items: center;
    z-index: 9;
    position: relative;
    &-button:hover {
      background-color: #fff;
      color: ${colors.main};
    }
    &__sidenav {
      display: flex;
      position: fixed;
      height: calc(100vh - 90px);
      width: 100%;
      z-index: 8;
      gap: 4rem;
      background-color: ${colors.main};
      transform: translateX(100%);
      transition: all 0.5s ease-in-out;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      &-list {
        list-style: none;
      }
      &-active {
        display: flex;
        gap: 4rem;
        width: 100%;
        z-index: 8;
        position: fixed;
        margin-top: -6.2rem;
        height: calc(100vh + 3rem);
        background-color: ${colors.main};
        transform: translateX(0%);
        transition: all 0.5s ease-in-out;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    }
  }
  background-color: ${colors.main};
  width: 100vw;
  left: -2rem;
  position: relative;
  @media (min-width: 1024px) {
    .mobile-tablet__sidenav {
      display: none;
    }
    width: 100%;
    .mobile-tablet {
      display: none;
    }
    left: -4rem;
    padding-left: 4rem;
    padding-right: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    .desktop {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      flex-direction: row;
      &__logo {
        display: flex;
        justify-content: center;
        align-items: center;
        &-icon:hover {
          cursor: pointer;
        }
        &-title:hover {
          cursor: pointer;
        }
      }
      &__navigation {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        &-item:hover {
          cursor: pointer;
          transition: 0.2s;
        }
        &-button:hover {
          background-color: #fff;
          color: ${colors.main};
        }
      }
    }
  }
`;

export default HeaderStyled;
