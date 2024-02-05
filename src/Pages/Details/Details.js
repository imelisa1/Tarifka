import React, { useState, useEffect } from "react";
import { View, Text, Image ,TouchableOpacity, StyleSheet, ActivityIndicator,ScrollView} from "react-native";
import { Linking } from 'react-native';

const Details = ({route, navigation}) => {
    const id = route.params.id ;

    const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="+ id;

    const [dish, setDish] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addFavs, setAddFavs] = useState([]);

    const getCMeals = async function () { // veri çekme hook u
        const response = await fetch(url);
        const data = await response.json(); // json veri tipine dönüştürüyoruz.
        setDish(data.meals[0]);
        setLoading(false);
    }

    useEffect(() => {  // hook u çağırıyoeuz.
        getCMeals();
    },[])


    if(loading){  // loading durumunda dönecek spinner
        return <ActivityIndicator size="large"/>
    }

    const onYoutube = () => {
        Linking.openURL(dish.strYoutube);
    };

    const onFavs = () => {

    }

    return(
        <ScrollView>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: dish.strMealThumb}}/>
            <Text style={styles.title}> {dish.strMeal} </Text>
            <View style={styles.innerContainer}>
                 <Text style={styles.area}> {dish.strArea} </Text>
                 <TouchableOpacity onPress={onFavs}>
                    <Text style={styles.favs}>Add Favs</Text>
                 </TouchableOpacity>
            </View>
           
            <Text style={styles.description}> {dish.strInstructions} </Text>
            <TouchableOpacity onPress={onYoutube}>
                <Text style={styles.button} > Watch on YouTube </Text>
            </TouchableOpacity>
        </View>
       </ScrollView>
    )
}

export default Details;

const styles = StyleSheet.create({
    container: {
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderBottomColor: "gray",
    },
    favs: {
        marginRight: 20,
        backgroundColor: "red",
        alignSelf: 'center',
        color: 'white',
        fontSize: 19,
        fontWeight: 'bold',
        padding: 5,
        borderRadius: 15,
    },
    image: {
        height: 400,
        width: 500,
    },
    title: {
        color: "#6D2932",
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: 5,
        marginBottom: 10,
    },
    area: {
        color: "#6D2932",
        fontSize: 25,
        fontWeight: '700',
        marginLeft: 10,
        marginBottom: 10,
        
    },
    description: {
        marginLeft: 10,
        color: 'black',
        fontSize: 20,
        marginBottom: 10,
    },
    button: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlignVertical: 'center',
        textAlign: 'center',
        backgroundColor: "red",
        color: "white",
        width: 250,
        height: 50,
        marginHorizontal: 70,
        marginBottom: 5,
        borderRadius: 15,

    }
})