import { StyleSheet, Text, View } from 'react-native';

export default function ExerciseListItem({item}) {
    return (
      <View style={styles.exerciseContainer}>
              <Text style={styles.exerciseName}>{item.name}</Text>
              <Text style={styles.exerciseSubtitle}>
                <Text style={styles.subvalue}>{item.muscle}</Text> | <Text>{item.equipment}</Text>
                </Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    exerciseName: {
      fontSize: 20,
      fontWeight: "500",
    },
    exerciseSubtitle: {
      color: "dimgray",
    },
    exerciseContainer: {
      backgroundColor: "#fff",
      borderRadius: 10,
      padding: 10,
      gap:5,
      marginHorizontal:2,

      //Shadow
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    subvalue: {
      textTransform: "capitalize",
    },
  });
  