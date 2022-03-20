import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const foods = [
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: "https://www.jessicagavin.com/wp-content/uploads/2017/07/meat-lasagna-1200.jpg"
    },
    {
        title: "Tandoori Chicken",
        description: "Amazing Indian dish with tenderloin chicken off the sizzles",
        price: "$19.20",
        image: "https://simmertoslimmer.com/wp-content/uploads/2019/12/Tandoori-Chicken-Tikka.jpg"
    },
    {
        title: "Chilaquiles",
        description: "Chilaquiles with cheese and sauce. A delicious mexican dish",
        price: "$14.50",
        image: "https://www.ladybehindthecurtain.com/wp-content/uploads/2019/10/Chilaquiles-Lady-Behind-The-Curtain-1.png"
    },
    {
        title: "Chicken Caesar Salad",
        description: "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
        price: "$14.50",
        image: "https://healthyfitnessmeals.com/wp-content/uploads/2020/05/instagram-In-Stream_Square___Low-carb-Caesar-salad-4.jpg"
    },
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image: "https://www.jessicagavin.com/wp-content/uploads/2017/07/meat-lasagna-1200.jpg"
    },
    {
        title: "Tandoori Chicken",
        description: "Amazing Indian dish with tenderloin chicken off the sizzles",
        price: "$19.20",
        image: "https://simmertoslimmer.com/wp-content/uploads/2019/12/Tandoori-Chicken-Tikka.jpg"
    },
    {
        title: "Chilaquiles",
        description: "Chilaquiles with cheese and sauce. A delicious mexican dish",
        price: "$14.50",
        image: "https://www.ladybehindthecurtain.com/wp-content/uploads/2019/10/Chilaquiles-Lady-Behind-The-Curtain-1.png"
    },
    {
        title: "Chicken Caesar Salad",
        description: "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
        price: "$14.50",
        image: "https://healthyfitnessmeals.com/wp-content/uploads/2020/05/instagram-In-Stream_Square___Low-carb-Caesar-salad-4.jpg"
    }
];

const styles = StyleSheet.create({
    menuItemStyle: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 20,
    },

    titleStyle: {
        fontSize: 19,
        fontWeight: "600"
    }
  });

export default function MenuItems() {
  return (
     <ScrollView showsVerticalScrollIndicator={false}>
        {foods.map((food, index) => (
            <View key={index}>
                <View style={styles.menuItemStyle}>
                    <BouncyCheckbox 
                        iconStyle={{ borderColor: 'lightgray', borderRadius: 0 }}
                        fillColor="green"
                    />
                    <FoodInfo food={food} />
                    <FoodImage food={food} />
                </View>
                <Divider width={0.5} orientation="vertical" style={{ marginHorizontal: 20 }} />
            </View>
        ))}
     </ScrollView>
    );
}

const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = (props) => (
    <View>
        <Image source={{uri: props.food.image}} style={{ width: 100, height: 100, borderRadius: 8, }} />
    </View>
);

