import { View, Text } from 'react-native'
import React from 'react'
import { Container, LoadingIndicator } from './styles'

export function Loading() {
  return (
    <Container>
      <LoadingIndicator />
    </Container>
  )
}