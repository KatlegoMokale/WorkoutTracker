import { StyleSheet, Text, View } from 'react-native';

export default function ExerciseListItem({item}) {
    return (
      <View style={styles.exerciseContainer}>
              <Text style={styles.exerciseName}>{item.name}</Text>
              <Text style={styles.exerciseSubtitle}>
                {item.muscle.toUpperCase()} | {item.equipment.toUpperCase()}
                </Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    exerciseName: {
      fontSize:20, 
      fontWeight: '500',
    },
    exerciseSubtitle: {
      color: 'dimgray'
    },
    exerciseContainer: {
     backgroundColor: '#fff',
     borderRadius:10,
     padding:10
    }
  });
  