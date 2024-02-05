import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MealCard from "../../Components/MealCard/MealCard";

const Meals = ({route , navigation}) => {
    const name = route.params.category;  // route.params ile category sayfasından gelen veriyyi alıyoruz.

    const [meal, setMeal] = useState([]);  // category bazlı meal tutacağımız state

    const [loading, setLoading] = useState(true);

    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c="+ name; // gelen category datasıyla url i her seferinde güncelliyooruz.

    const getCMeals = async function () { // veri çekme hook u
        const response = await fetch(url);
        const data = await response.json(); // json veri tipine dönüştürüyoruz.
        setMeal(data.meals);
        setLoading(false);
    }

    useEffect(() => {  // hook u çağırıyoeuz.
        getCMeals();
    },[])

    if(loading){
       return <ActivityIndicator size="large"/>
    }

    handleClicedMeal = (idMeal) => {
        navigation.navigate("Details", { id : idMeal})
    };

    const renderMeal = ({item}) => <MealCard meal = {item} onClick={() => handleClicedMeal(item.idMeal)}/>

    return(
        <View style={styles.container}>
            <FlatList data={meal} renderItem={renderMeal}/>
        </View>
    )
}

export default Meals;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "orange",
    }
})