import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export function Groups() {
  return (
    <View style={styles.container}>
      <Text>Groups</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  }
})