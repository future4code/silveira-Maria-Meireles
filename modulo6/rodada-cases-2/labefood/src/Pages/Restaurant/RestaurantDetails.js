import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/baseUrl";
import RestaurantDetailsCard from "../../Components/RestaurantDetails/RestaurantDetailsCard";
import {
  RestaurantCard,
  RestaurantContainer,
  StyledCategoriesList,
  StyledCategory,
} from "./style";
import RestaurantProductCard from "../../Components/RestaurantProductCard/RestaurantProductCard";
import PagesHeader from "../../Components/PagesHeader/PagesHeader";

const RestaurantDetails = () => {
  const token = localStorage.getItem("token");
  const { restaurantId } = useParams();
  const [categoriesList, setCategoriesList] = useState([]);
  const [restaurantDetails, setRestaurantDetails] = useState({});

  const getRestaurantInfo = () => {
    axios
      .get(`${BASE_URL}/restaurants/${restaurantId}`, {
        headers: {
          auth: token,
        },
      })

      .then((res) => {
        setRestaurantDetails(res.data.restaurant);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  useEffect(() => {
    if (restaurantDetails.products) {
      const newCategories = [];
      for (const product of restaurantDetails.products) {
        if (!newCategories.includes(product.category)) {
          newCategories.push(product.category);
        }
      }
      setCategoriesList(newCategories);
    }
  }, [restaurantDetails]);

  return (
    <RestaurantContainer>
      <PagesHeader title={"Restaurante"} backPage={true} />
      <RestaurantCard>
        <RestaurantDetailsCard restaurant={restaurantDetails} />
        {restaurantDetails.products &&
          categoriesList.map((category) => {
            return (
              <StyledCategoriesList>
                <StyledCategory> {category} </StyledCategory>
                {restaurantDetails.products
                  .filter((product) => {
                    return product.category === category;
                  })
                  .map((product) => {
                    return (
                      <RestaurantProductCard
                        key={product.id}
                        product={product}
                        restaurant={restaurantDetails}
                      />
                    );
                  })}
              </StyledCategoriesList>
            );
          })}
      </RestaurantCard>
    </RestaurantContainer>
  );
};

export default RestaurantDetails;
