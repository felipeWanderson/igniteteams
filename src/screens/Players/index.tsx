import React, { useState } from 'react'
import { Container, Form, HeaderList, NumberOfPlayers } from './styles'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { ButtonIcon } from '@components/ButtonIcon'
import { Input } from '@components/Input'
import Filter from '@components/Filter'
import { FlatList } from 'react-native'
import { PlayerCard } from '@components/PlayerCard'
import { Button } from '@components/Button'

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPalyers] = useState(['Felipe', 'Vini']);

  return (
    <Container>
        <Header showBackButton />

        <Highlight 
          title='Nome da turma'
          subtitle='adicione a galera e separe os times'
        /> 

        <Form>
          <Input 
            placeholder='Nome da pessoa'
            autoCorrect={false}
          />
          <ButtonIcon 
            icon="add"
          />
        </Form>

       <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter 
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        /> 

        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
       </HeaderList>

       <FlatList 
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard 
            name={item}
            onRemove={() => {}}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{paddingBottom: 100}, players.length === 0 && { flex: 1}]}
       />

       <Button 
        title='Remover Turma'
        type='SECONDARY'
       />
    </Container>
  ) 
}