import React from 'react'
import { Container, Content, Icon } from './style'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'

export default function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight 
          title='Nova turma'
          subtitle='crie a turma para adicionar as pessoas'
        />

        <Button 
          title='Criar'
        />
      </Content>
    </Container>
  )
}