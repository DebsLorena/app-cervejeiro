import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function ABVScreen() {
  const router = useRouter();
  const [showResultModal, setShowResultModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ abv: number } | null>(null);

  const handleCalculate = () => {
    setLoading(true); // Inicia o carregamento

    // Simula uma chamada ao backend e recebimento do resultado
    setTimeout(() => {
      const backendResult = { abv: 5.5 };
      setResult(backendResult);
      setLoading(false); // Finaliza o carregamento
      setShowResultModal(true); // Exibe o modal com o resultado
    }, 2000); // Simula o tempo de processamento
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerScreen}>
        <Text style={styles.subTitleContainer}>Calcule o seu ABV</Text>
        <Text style={styles.textContainer}>Insira os dados abaixo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Estilo"
          placeholderTextColor="#888"
          id="estilo"
        />
        <TextInput
          style={styles.input}
          placeholder="OG"
          placeholderTextColor="#888"
          keyboardType="numeric"
          id="OG"
        />

        <TextInput
          style={styles.input}
          placeholder="Temperatura OG"
          placeholderTextColor="#888"
          keyboardType="numeric"
          id="temperaturaOG"
        />

        <TextInput
          style={[styles.input, styles.disabledInput]}
          placeholder="Correção OG"
          placeholderTextColor="#888"
          keyboardType="numeric"
          id="correcaoOG"
          editable={false}
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.button, styles.buttonGuardar]}>
            <Text style={styles.buttonText}>Guardar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonLimpar]}>
            <Text style={styles.buttonText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          placeholder="FG"
          placeholderTextColor="#888"
          keyboardType="numeric"
          id="OG"
        />

        <TextInput
          style={styles.input}
          placeholder="Temperatura FG"
          placeholderTextColor="#888"
          keyboardType="numeric"
          id="temperaturaOG"
        />

        <TextInput
          style={[styles.input, styles.disabledInput]}
          placeholder="Correção FG"
          placeholderTextColor="#888"
          keyboardType="numeric"
          id="correcaoOG"
          editable={false}
        />

        <TouchableOpacity style={styles.buttonFullWidth} onPress={handleCalculate}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>

      {/* Indicador de Carregamento */}
      {loading && (
        <ActivityIndicator size="large" color="#09d423" style={styles.loadingIndicator} />
      )}

      {/* Modal para exibir o resultado após o carregamento */}
      {result && (
        <Modal
          visible={showResultModal}
          transparent={true}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {/* Ícone X no canto superior direito */}
              <TouchableOpacity
                style={styles.closeIcon}
                onPress={() => setShowResultModal(false)}
              >
                <AntDesign name="close" size={24} color="black" />
              </TouchableOpacity>

              <Text style={styles.modalTitle}>Resultado ABV</Text>
              <Text style={styles.modalText}>ABV Calculado: {result.abv}%</Text>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-start',
    paddingTop: 72,
  },
  containerScreen: {
    marginHorizontal: 36,
  },
  subTitleContainer: {
    textAlign: 'center',
    color: '#09d423',
    fontSize: 32,
  },
  textContainer: {
    paddingBottom: 16,
    textAlign: 'left',
    color: 'white',
    alignSelf: 'flex-start',
    paddingTop: 16,
    fontSize: 16,
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    color: '#04623d',
    backgroundColor: '#ccc',
  },
  disabledInput: {
    backgroundColor: '#a3a3a3',
    color: '#04623d',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    flex: 1,
    backgroundColor: '#00190f',
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonGuardar: {
    marginRight: 8,
  },
  buttonLimpar: {
    marginLeft: 8,
  },
  buttonFullWidth: {
    backgroundColor: '#00190f',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  loadingIndicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -25,
    marginTop: -25,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#04623d',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 16,
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
});
