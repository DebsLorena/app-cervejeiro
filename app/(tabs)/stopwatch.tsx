import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const timerRef = useRef<NodeJS.Timeout | undefined>();

  const startTimer = () => {
    if (isRunning) return;

    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setElapsedTime((prev) => prev + 1000);
    }, 1000);
  };

  const stopTimer = () => {
    if (!isRunning) return;

    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  const clearTimer = () => {
    stopTimer();
    setElapsedTime(0);
  };

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <View style={styles.container}>
      <View style={[styles.buttonContainer]}>
        <TouchableOpacity style={styles.button} onPress={startTimer}>
          <Ionicons name="play" size={24} color="white" />
          <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={stopTimer}>
          <Ionicons name="pause" size={24} color="white" />
          <Text style={styles.buttonText}>Parar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={clearTimer}>
          <Ionicons name="trash" size={24} color="white" />
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require('@/assets/images/beer-loading.gif')}
        style={styles.glassImage}
      />
      <Text style={styles.timeText}>{formatTime(elapsedTime)}</Text>
      <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.button}>
          <Ionicons name="alarm" size={24} color="white" />
          <Text style={styles.buttonText}>Alarme</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  glassImage: {
    width: 300,
    height: 360,
    resizeMode: 'contain',
  },
  timeText: {
    color: 'white',
    fontSize: 48,
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    backgroundColor: '#00190f',
    paddingVertical: 15,
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});
