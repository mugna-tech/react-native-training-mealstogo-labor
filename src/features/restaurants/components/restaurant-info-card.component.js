import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card, Paragraph } from "react-native-paper";

const RestaurantCard = styled(Card)`
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.sizes[1]};
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  padding: ${(props) => props.theme.sizes[1]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 3,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Card.Title title={name} subtitle="Card Subtitle" />
      <Title>{name}</Title>
      <Card.Content>
        <Paragraph>{address}</Paragraph>
      </Card.Content>
    </RestaurantCard>
  );
};
