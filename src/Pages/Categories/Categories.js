import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { FlatList } from "react-native";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";

const Categories = ({navigation}) => {
     // veri çekme işlemi
    const [category, setCategory] = useState([]); // category datasını tuttuğumuz state
    const [loading, setLoading] = useState(true); // loading tuttuğumuz state

    const url = "https://www.themealdb.com/api/json/v1/1/categories.php"; // kullanacağımız url

    const getMeals = async function () {  // veri çekme hook u
        const response = await fetch(url);
        const data = await response.json(); // json veri tipine dönüştürüyoruz.
        setCategory(data.categories);
        setLoading(false);
    }

    useEffect(() => {  // hook u çağırıyoeuz
        getMeals();
    },[])

    if(loading){  // loading durumunda dönecek spinner
        return <ActivityIndicator size="large"/>
    }

    handleMealsSelect = (strCategory) => {  // navigate fonksiyonu ve category adını meals sayfasınaa gönderiyoruz
        navigation.navigate("Meals", { category : strCategory });
    }

    return(
        <View style={styles.whole_container}>
            <FlatList data={category} renderItem={({item}) => <CategoryCard meal = {item} onSearch={() => handleMealsSelect(item.strCategory)} /> }  />
        </View>
        
    )
}

export default Categories;

const styles = StyleSheet.create({
    whole_container: {
        backgroundColor: "orange",
    }
})

