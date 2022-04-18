import React from "react";
import { OrderPage } from "../OrderPage";
import Categories from "./Categories Dashboard";
import CreateNewsletter from "./CreateNewsletter";
import MainCard from "./MainCard";
import MapData from "./MapData";
import { AddPlantCard } from "./AddPlantCard";
import { Container } from "./style";
// import { data } from '../../utils/auth/data';

const Home = () => {
  return (
    <div>
      <MainCard />
      <Container>
        <Categories />
        <MapData />
      </Container>
      <CreateNewsletter />
      <AddPlantCard />
    </div>
  );
};

export default Home;
