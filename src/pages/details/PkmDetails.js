
import React,{useLayoutEffect} from 'react'
import { StyleSheet } from 'react-native'
import { observer } from 'mobx-react'
import { usePkmStore } from '../../mobx/pkmProvider'
import { Content,Container } from '@somapay/storybook-somapay-mobile'
import TopDetails from './UI/TopDetails'
import BodyDetails from './UI/BodyDetails'
import { colorTypes } from '../../utils/pkmTypesColor'
import MovesList from './UI/MovesList'


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
            <Content  scrollViewProps={{
              
            }}>
                <TopDetails 
                pkmImage={pokemon.image}
                pokedexEntry={pkmStore.pokemonDetail.order}
                pokemonTypeColor={colorTypes[pkmStore.pokemonDetail?.types?.[0]?.type?.name]}
                pokemonTypes={types}
                pokemonName={pokemon.name}
                />
                <BodyDetails
                pkmName={pokemon.name}
                
                />
            </Content>
        </Container>
    )
})
export default PkmDetails

const styles=StyleSheet.create({
  bodyDetails:{
    position:'absolute',
    backgroundColor:'red',
    zIndex:10,
    height:'100%'
  },
  
})