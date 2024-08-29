import { Image, StyleSheet, View, Text, FlatList, Dimensions } from 'react-native';

export default function ResultScreen() {
  const results = [
    { estilo: "IPA", data: "29/08/2024", abv: 4.5 },
    { estilo: "Sour", data: "31/09/2024", abv: 4.5 },
    { estilo: "NE", data: "29/08/2024", abv: 4.5 },
    { estilo: "RIS", data: "31/09/2024", abv: 4.5 },

  ];

  const renderItem = ({ item }: { item: { data: string, abv: number, estilo: string } }) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardText}>Estilo: {item.estilo}</Text>
        <Text style={styles.cardText}>Data: {item.data}</Text>
        <Text style={styles.cardText}>ABV: {item.abv}%</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>

      <Image
        style={styles.backgroundImage}
        source={require('@/assets/images/beer.png')}
      />

      <View style={styles.overlay}>
        <View style={styles.containerHeader}>
          <Text style={styles.titleContainer}>Resultados ABV</Text>
        </View>

        <FlatList
          data={results}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </View>
  );
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'black',
  },
  backgroundImage: {
    position: 'absolute',
    width: width,
    height: height * 0.4,
    bottom: 0,
    zIndex: 0,
  },
  overlay: {
    flex: 1,
    zIndex: 1,
    alignItems: 'center',
  },
  containerHeader: {
    alignItems: 'center',
    paddingTop: 36,
  },
  titleContainer: {
    fontSize: 32,
    paddingTop: 36,
    paddingBottom: 24,
    color: '#09d423',
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: '#d3d3d3',
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    width: 300,
    alignItems: 'flex-start',
  },
  cardContent: {
    alignItems: 'flex-start',
  },
  cardText: {
    fontSize: 18,
    color: '#00190f',
    fontWeight: 'bold',
  },
});
