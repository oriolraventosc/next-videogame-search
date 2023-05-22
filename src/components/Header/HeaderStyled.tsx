import { styled } from "@mui/material";
import colors from "../../styles/colors";

const HeaderStyled = styled("header")`
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
    &-button:hover {
      background-color: #fff;
      color: ${colors.main};
    }
    &__sidenav {
      display: flex;
      position: fixed;
      height: calc(100vh - 90px);
      width: 100%;
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
        position: fixed;
        height: calc(100vh - 90px);
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
