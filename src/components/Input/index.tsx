import { View, Text, TextInputProps } from 'react-native'
import React from 'react'
import { Container } from './styles'
import { useTheme } from 'styled-components/native'

export function Input({ ...rest }: TextInputProps) {

  const {COLORS} = useTheme()
  return (
    <Container 
      placeholder={COLORS.GRAY_300}  
      {...rest} 
    />
  )
}