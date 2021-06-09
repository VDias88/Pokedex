
import React,{useLayoutEffect} from 'react'
import { View, Text } from 'react-native'
import { observer } from 'mobx-react'
import { usePkmStore } from '../../mobx/pkmProvider'
import { Content,Container } from '@somapay/storybook-somapay-mobile'
import TopDetails from './UI/TopDetails'
import { colorTypes } from '../../utils/pkmTypesColor'


const DEFAULT_COLOR = 'red'

const PkmDetails = observer(({route,navigation}) => {
    const {pokemon}=route.params
    const {pkmStore} = usePkmStore()

    useLayoutEffect(() => {
        navigation.setOptions({
          headerStyle: {
            elevation:0,
            shadowOpacity:0,
            backgroundColor: colorTypes[pkmStore.pokemonDetail?.types?.[0]?.type?.name]?.main || DEFAULT_COLOR
          },
        })
      }, [navigation, pkmStore.pokemonDetail?.types])

      useLayoutEffect(() => {
        pkmStore.updatePokemonDetail(pokemon.name)
    }, [])

    const types=pkmStore?.pokemonDetail?.types?.map(({type})=>type.name)

    return (
        <Container>
            <Content>
                <TopDetails 
                pkmImage={pokemon.image}
                pokedexEntry={pkmStore.pokemonDetail.order}
                pokemonTypeColor={colorTypes[pkmStore.pokemonDetail?.types?.[0]?.type?.name]}
                pokemonTypes={types}
                pokemonName={pokemon.name}
                />
            </Content>
        </Container>
    )
})
export default PkmDetails