import React from 'react'
import { Container, Content, Icon } from './style'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'

export default function NewGroup() {
  const navigation = useNavigation();
  
    function handleNew() {
      navigation.navigate('players', { group: 'Turma boa'});
    }
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight 
          title='Nova turma'
          subtitle='crie a turma para adicionar as pessoas'
        />

        <Input 
          placeholder='Nome da turma'
        />

        <Button 
          title='Criar'
          style={{marginTop: 20}}
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
}