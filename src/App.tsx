import React, { useEffect, useReducer, useRef } from 'react';
import './App.css'
import { GlobalStyles } from './components/GlobalStyle';
import { initialState, reducer } from './store';
import { initAssistant } from './assistant';
import { createAssistant } from '@sberdevices/assistant-client';
import { Card, CardBody, CardContent, Container, TextBox } from '@sberdevices/plasma-ui';
import { MovieCard } from './components/MovieCard';
import { AppHeader } from './components/AppHeader';
import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 4rem;
`
const StylesCard = styled(Card)`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 1rem;
`

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const assistantRef = useRef<ReturnType<typeof createAssistant>>()
  useEffect(() => {
    assistantRef.current = initAssistant(dispatch)
  }, [])
  return (
    <div>
      <GlobalStyles character={state.character} />
      <Container style={{marginBottom: '5rem'}}>
        <AppHeader />
        {/* <AppContainer> */}
          {
            !state.tvShow ?
              <StylesCard>
                <CardBody style={{ height: '100%', alignItems: 'center' }}>
                  <CardContent style={{ height: '100%' }} cover={false}>
                    <TextBox>
                      {
                        state.character === 'joy' ?
                          'Я могу порекомендовать тебе сериал на основе твоих предпочтений. Назови сериал, который тебе нравится, а я посоветую похожие.' :
                          'Я могу порекомендовать вам сериал на основе ваших предпочтений. Назовите сериал, который вам нравится, а я посоветую похожие.'
                      }
                    </TextBox>
                  </CardContent>
                </CardBody>
              </StylesCard> :
              <MovieCard movie={state.tvShow} />
          }
        {/* </AppContainer> */}
      </Container>
    </div>
  );
}

export default App;
