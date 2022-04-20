import React from "react";
import { OrderPage } from "../OrderPage";
import Categories from "./Categories Dashboard";
import CreateNewsletter from "./CreateNewsletter";
import MainCard from "./MainCard";
import MapData from "./MapData";
import { Container } from "./style";
import AddCard from "../Home/AddCard";
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
      <AddCard />
    </div>
  );
};

export default Home;
