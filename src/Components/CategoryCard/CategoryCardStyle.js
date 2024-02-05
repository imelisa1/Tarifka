
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        flexDirection: 'row',
        marginLeft: 25,
        borderTopLeftRadius: 70,
        borderBottomLeftRadius: 70,
        marginTop: 25,
        marginBottom: 8,
    },
    image: {
        height: 150,
        width: 150,
        resizeMode: 'contain',
        borderRadius: 75,
        marginLeft: 10,
    },
    title: {
        fontSize: 27,
        alignSelf: 'center',
        marginLeft: 8,
        fontWeight: '400',
        color: "black",
    }
});