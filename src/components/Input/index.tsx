import { View, Text, TextInputProps, TextInput } from 'react-native'
import React from 'react'
import { Container } from './styles'
import { useTheme } from 'styled-components/native'

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}
export function Input({ inputRef, ...rest }: Props) {

  const {COLORS} = useTheme()
  return (
    <Container 
      ref={inputRef}
      placeholder={COLORS.GRAY_300}  
      {...rest} 
    />
  )
}