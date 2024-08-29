import { Image, StyleSheet, Platform, View, Text } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.titleContainer}>Ajudante Cervejeiro!</Text>
        <Text style={styles.subTitleContainer}>Sejam bem vindos!</Text>
      </View>
      <Image style={styles.containerImage}
        source={require('@/assets/images/beer.png')}
      />

      <Text style={styles.textContainer}>Use o app para calcular o ABV da sua cerveja artesanal e cronometrar com precisão o tempo para a adição de aditivos durante a fervura </Text>
    </View >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  containerHeader: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    paddingTop: 36,
  },
  containerImage: {
    marginTop: 'auto',
    marginBottom: 'auto',
    alignSelf: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 32,
    paddingTop: 36,
    color: 'white',
  },
  subTitleContainer: {
    textAlign: 'center',
    color: '#09d423',
  },
  textContainer: {
    paddingBottom: 24,
    textAlign: 'center',
    color: 'white',
    marginHorizontal: 36,
  }
});
