import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.container}>
      {/* Pantalla */}
      <View style={styles.screen}></View>
      
      {/* Fila de tres botones */}
      <View style={styles.row}>
        <View style={styles.button}></View>
        <View style={styles.button}></View>
        <View style={styles.button}></View>
      </View>
      
      {/* Botón ancho */}
      <View style={styles.wideButton}></View>
      
      {/* Grid de botones (3x2) */}
      <View style={styles.grid}>
        <View style={styles.button}></View>
        <View style={styles.button}></View>
        <View style={styles.button}></View>
        <View style={styles.button}></View>
        <View style={styles.button}></View>
        <View style={styles.button}></View>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
} 

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  screen: {
    width: width * 0.9,
    height: height * 0.15,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width * 0.9,
  },
  button: {
    width: width * 0.25,
    height: width * 0.25,
    backgroundColor: '#ccc',
    borderRadius: 10,
  },
  wideButton: {
    width: width * 0.9,
    height: height * 0.07,
    backgroundColor: '#bbb',
    borderRadius: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: width * 0.9,
  },
});
