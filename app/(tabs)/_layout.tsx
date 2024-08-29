import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#00190f',
          height: 65,
        },
        tabBarItemStyle: {
          paddingVertical: 10,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'beer' : 'beer-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="abv"
        options={{
          title: 'ABV',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'calculator' : 'calculator'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="stopwatch"
        options={{
          title: 'Cronômetro',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'stopwatch' : 'stopwatch-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="result"
        options={{
          title: 'Resultados',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'list' : 'list-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
