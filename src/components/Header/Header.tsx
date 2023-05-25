import colors from "@/styles/colors";
import HeaderStyled from "./HeaderStyled";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Sling as Hamburger } from "hamburger-react";
import { Typography, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);
  const router = useRouter();
  const navigate = (route: string) => {
    router.push(route);
    setActive(false);
  };
  return (
    <>
      <HeaderStyled>
        <div className="desktop">
          <article className="desktop__logo">
            <Link href={"/"}>
              <SportsEsportsIcon
                sx={{ fontSize: "3rem", color: "#fff" }}
                className="desktop__logo-icon"
              />
            </Link>
            <Link href={"/"}>
              <Typography
                variant="body2"
                className="desktop__logo-title"
                sx={{
                  fontSize: "2.2rem",
                  fontWeight: "regular",
                  display: "inline",
                  pl: "0.5rem",
                  color: "#fff",
                }}
              >
                Game4U
              </Typography>
            </Link>
          </article>
          <article className="desktop__navigation">
            <Link href={"/"}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "1.3rem",
                  fontWeight: "regular",
                  display: "inline",
                  color: "#fff",
                }}
                className="desktop__navigation-item"
              >
                Search videogames
              </Typography>
            </Link>
            <Link href={"/videogame"}>
              <Button
                disableRipple
                sx={{
                  backgroundColor: colors.lightmain,
                  color: "#fff",
                  fontSize: "1.2rem",
                  width: "100px",
                }}
                className="desktop__navigation-button"
              >
                Login
              </Button>
            </Link>
          </article>
        </div>
        <div className="mobile-tablet">
          <Link href={"/"}>
            <SportsEsportsIcon
              sx={{ fontSize: "3.5rem", color: "#fff" }}
              className="mobile__logo-icon"
            />
          </Link>
          <Hamburger
            color="#fff"
            toggled={active}
            toggle={() => setActive(!active)}
            size={30}
            rounded
            hideOutline={true}
          />
        </div>
        <article
          className={
            active ? "mobile-tablet__sidenav-active" : "mobile-tablet__sidenav"
          }
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: "1.5rem",
              fontWeight: "regular",
              display: "inline",
              color: "#fff",
            }}
            onClick={() => navigate("/")}
          >
            Search videogames
          </Typography>
          <Button
            disableRipple
            sx={{
              backgroundColor: colors.lightmain,
              color: "#fff",
              fontSize: "1.3rem",
              width: "150px",
            }}
            className="mobile-tablet-button"
            onClick={() => navigate("/videogame")}
          >
            Login
          </Button>
        </article>
      </HeaderStyled>
    </>
  );
};

export default Header;
