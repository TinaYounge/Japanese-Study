import { Container } from "@material-ui/core";
import React from "react";
import Homework from "../../Components/Homework/Homework";
import KanjiCard from "../../Components/KanjiCard/KanjiCard";
import LandingPage from "../../Components/LandingPage/LandingPage";

function Homepage() {
  return (
    <div>
      <LandingPage />
      {/* <Container maxWidth="lg"> */}
      <Homework />

      {/* <KanjiCard /> */}
      {/* </Container> */}
    </div>
  );
}

export default Homepage;
