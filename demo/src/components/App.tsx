import React, { useEffect, useState } from "react";
import Example from "./Example";
import SecondExample from "./SecondExample";
import "../style/App.scss";
import { Button, ThemeProvider, Typography } from "@mui/material";
import DemoTheme from "../style/Theme";
import { GitHub, CloudDownload, Star } from "@mui/icons-material";
import { StyledEngineProvider } from "@mui/material/styles";
import axios from "axios";
import Example3 from "./ThirdExample";

const App = () => {
  const [stars, setStars] = useState<number>(0);

  useEffect(() => {
    const url = "https://api.github.com/repos/gazi786/mui-carousel";
    axios
      .get(url)
      .then((res) => res.data)
      .then((res) => {
        setStars(res.stargazers_count);
      });
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={DemoTheme}>
        <div className="root">
          <Typography variant="h2">
            <Typography component="span" variant="h2" color="primary">
              React{" "}
            </Typography>
            Material UI Carousel
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Star style={{ fill: "orange" }} />
            <Typography variant="subtitle1">&nbsp;{stars}</Typography>
          </div>

          <Typography variant="subtitle1" align="left">
            Made by and Original Author &nbsp;
            <a
              href="https://github.com/learus"
              target="_blank"
              rel="noreferrer"
            >
              Learus
            </a>
          </Typography>

          <br />
          <Typography variant="subtitle1" align="left">
            Further improvements and upgrades by &nbsp;
            <a
              href="https://github.com/gazi786"
              target="_blank"
              rel="noreferrer"
            >
              Learus
            </a>
          </Typography>
          <div className="buttonContainer">
            <Button
              startIcon={<GitHub />}
              variant="contained"
              className="github"
              component="a"
              href="https://github.com/gazi786/mui-carousel.git"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </Button>
            &nbsp;
            <Button
              startIcon={<CloudDownload />}
              variant="contained"
              className="npm"
              component="a"
              href="https://www.npmjs.com/package/mui-carousel-react"
              target="_blank"
              rel="noreferrer"
            >
              npm
            </Button>
          </div>

          <br />
          <br />
          <div className="description">
            <div>
              <Typography variant="h4">{"<Carousel/>"}</Typography>
              <Typography>
                A Generic, extendible Carousel UI component for React using
                Material UI.
                <br />
                It switches between given children using a smooth animation.
                <br />
                Provides next and previous buttons. Also provides interactible
                bullet indicators.
              </Typography>
            </div>
            <div>
              <Typography variant="h4">Links</Typography>
              <Typography>
                <a
                  href="https://github.com/gazi786/mui-carousel/blob/master/README.md"
                  target="_blank"
                  rel="noreferrer"
                >
                  Documentation
                </a>
              </Typography>
              <Typography>
                <a
                  href="https://github.com/gazi786/mui-carousel/blob/master/CHANGELOG.md"
                  target="_blank"
                  rel="noreferrer"
                >
                  Changelog
                </a>
              </Typography>
              {/* <Typography>
                                <a href="https://www.buymeacoffee.com/Learus" target="_blank" rel='noreferrer'>Buy me a Coffee</a>
                            </Typography> */}
            </div>
          </div>

          <br />

          <div className="installation">
            <Typography
              style={{
                fontFamily: "monospace",
                color: DemoTheme.palette.primary.main,
              }}
            >
              # Latest Release (Version 1 using MUI v6 and framer-motion)
            </Typography>
            <Typography style={{ fontFamily: "monospace" }}>
              npm install mui-carousel-react
            </Typography>
          </div>

          <Example />
          <SecondExample />
          <Example3 />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
