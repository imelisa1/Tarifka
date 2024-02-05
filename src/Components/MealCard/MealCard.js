import React from "react";
import { View, Text, ImageBackground, TouchableWithoutFeedback } from "react-native";
import styles from "./MealCardstyles";


const MealCard = ({meal , onClick}) => {
    return(
        <TouchableWithoutFeedback onPress={onClick}>
            <View>
                <ImageBackground source={{uri : meal.strMealThumb}} style={styles.background}>
                    <Text style={styles.title}>{meal.strMeal}</Text>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default MealCard;