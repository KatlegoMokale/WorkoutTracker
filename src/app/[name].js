import { useLocalSearchParams } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import execrises from '../../assets/data/exercises.json';


export default function ExeceriseDetailsScreen(){
    const params = useLocalSearchParams();

    const execrise = execrises.find((item) => item.name === params.name);

    if(!execrise){
        return <Text>
            Execerise not found
        </Text>
    }

    return (
        <View>
            <Text style={styles.exerciseName}>{execrise.name}</Text>
              <Text style={styles.exerciseSubtitle}>
                <Text style={styles.subvalue}>{execrise.muscle}</Text> | <Text>{execrise.equipment}</Text>
                </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    exerciseName: {
        fontSize: 20,
        fontWeight: "500",
      },
      exerciseSubtitle: {
        color: "dimgray",
      },
      subvalue: {
        textTransform: "capitalize",
      },
})