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
import BottomMenu from '../../Components/BottomMenu/BottomMenu'

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
        return restaurantsArray.push(restaurant.category);
      });
    
    const removeEquals = [...new Set(restaurantsArray)]

    let changePropertiesToObject = []

    removeEquals.map((category) => {
      const objectAux = {category, select: false}
      return changePropertiesToObject.push(objectAux)
    })

    setRestaurantCategory(changePropertiesToObject)
  };

  const swichCategory = (category) => {
    setCategoryValue(category)

    const result = restaurantCategory.map((cat) => {
      if(category.category === cat) {
        return {
          ...cat,
          select: true
        }
      } else {
        return {
          ...cat,
          select: false
        }
      }
    })
    setRestaurantCategory(result)
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <>
      <PagesHeader title={"FourFood"} backPage={false}/>

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
                select={category.select}
                key={category.category}
                onClick={() => {
                  swichCategory(category.category);
                }}
              >
                {category.category}
              </MenuItem>
            );
          })}
        </MenuOptions>

        <RestaurantCards>{restaurantsFiltration}</RestaurantCards>
      
        <BottomMenu page={"home"}/>
      </ContainerFeed>
    </>
  );
};

export default FeedPage;
