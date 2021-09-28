import { StateType, ActionsType, CharacterType, TVShowType } from './types';

export const initialState = {
  character: 'sber' as CharacterType,
  tvShow: null as null | TVShowType,
}

export const reducer = (state: StateType, action: ActionsType): StateType => {
  switch (action.type) {
    case 'SET_CHARACTER':
      return {...state, character: action.characterId}
    case 'SET_TV_SHOW':
      return {...state, tvShow: action.tvShow}
    default: return state
  }
}

export const actions = {
  setCharacter: (characterId: CharacterType) => ({ type: 'SET_CHARACTER', characterId } as const),
  setTVShow: (tvShow: TVShowType | null) => ({ type: 'SET_TV_SHOW', tvShow } as const),
}