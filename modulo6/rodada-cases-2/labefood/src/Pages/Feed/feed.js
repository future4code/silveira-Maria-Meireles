import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ContainerFeed,
  RestaurantCards,
  StyledSearchInput,
  MenuItem,
  MenuOptions,
} from "./style";
import { BASE_URL } from "../../constants/baseUrl";
import RestaurantCard from "../../Components/RestaurantCard/RestaurantCard";
import PagesHeader from "../../Components/PagesHeader/PagesHeader";

const FeedPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantCategory, setRestaurantCategory] = useState([]);
  const [categoryValue, setCategoryValue] = useState("");
  const [inputText, setInputText] = useState("");
  const token = localStorage.getItem("token");

  const getRestaurants = () => {
    axios
      .get(`${BASE_URL}/restaurants`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setRestaurants(res.data.restaurants);
        categoryFiltration(res.data.restaurants);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const restaurantsFiltration = restaurants
    .filter((restaurant) => {
      return (
        inputText
        ? restaurant.name.toLowerCase().includes(inputText.toLowerCase())
        : true
      )
    })
    .filter((restaurant) => {
        return (
        categoryValue
        ? restaurant.category.toLowerCase().includes(categoryValue.toLowerCase())
        : true
        )
    })
    .map((restaurant) => {
      return <RestaurantCard restaurant={restaurant} key={restaurant.name} />;
    });

  const categoryFiltration = (restaurants) => {
    const restaurantsArray = [];

    restaurants &&
      restaurants.map((restaurant) => {
        restaurantsArray.push(restaurant.category);
      });
    setRestaurantCategory([...new Set(restaurantsArray)]);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <>
      <PagesHeader title={"FourFood"} />

      <ContainerFeed>
        <StyledSearchInput
          placeholder="Restaurante"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />

        <MenuOptions>

            <MenuItem
                select={false}
                onClick={() => {
                  setCategoryValue("");
                }}
            >
            Todos
            </MenuItem>

          {restaurantCategory.map((category) => {
            return (
              <MenuItem
                select={false}
                key={category}
                onClick={() => {
                  setCategoryValue(category);
                }}
              >
                {category}
              </MenuItem>
            );
          })}
        </MenuOptions>

        <RestaurantCards>{restaurantsFiltration}</RestaurantCards>
      </ContainerFeed>
    </>
  );
};

export default FeedPage;
