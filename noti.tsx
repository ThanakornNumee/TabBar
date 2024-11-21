import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function NotificationsPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>การแจ้งเตือน</Text>
      <Text style={styles.description}>
        นี่คือหน้าการแจ้งเตือน คุณสามารถดูการแจ้งเตือนและจัดการได้ที่นี่
      </Text>

      <Button
        title="กลับไปยังหน้าหลัก"
        onPress={() => router.push('/')} // นำทางกลับไปยังหน้า "เมนูหลัก"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
});