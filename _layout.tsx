import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      {/* Tab 1: Home */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'เมนูหลัก',
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              size={focused ? 32 : 28}
              name="home"
              color={focused ? '#FFC300' : '#FF4081'} // สีสันสดใส
            />
          ),
        }}
      />
      
      {/* Tab 2: Services */}
      <Tabs.Screen
        name="Servies"
        options={{
          title: 'บริการ',
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              size={focused ? 32 : 28}
              name="support-agent" // ใช้ไอคอนตัวแทนบริการลูกค้า
              color={focused ? '#28A745' : '#85C1E9'}
            />
          ),
        }}
      />
      
      {/* Tab 3: Notifications */}
      <Tabs.Screen
        name="noti"
        options={{
          title: 'การแจ้งเตือน',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={focused ? 32 : 28}
              name="notifications" // ใช้รูประฆัง
              color={focused ? '#FFC107' : '#FF5733'}
            />
          ),
        }}
      />
      
      {/* Tab 4: Profile */}
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'โปรไฟล์',
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              size={focused ? 29 : 28}
              name="user-circle" // รูปโปรไฟล์แบบวงกลม
              color={focused ? '#1565C0' : '#D1C4E9'}
            />
          ),
        }}
      />
    </Tabs>
  );
}
