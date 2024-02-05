import React from "react";
import { Text, View, Image ,TouchableWithoutFeedback} from "react-native";
import styles from './CategoryCardStyle';

const CategoryCard = ({meal, onSearch}) => {
    return(
        <TouchableWithoutFeedback onPress={onSearch}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: meal.strCategoryThumb }}/>
                <Text style={styles.title}> {meal.strCategory} </Text>
            </View>
        </TouchableWithoutFeedback>
        
    )
}

export default CategoryCard;