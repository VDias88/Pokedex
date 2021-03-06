import React from 'react'
import { View,Text,Image,StyleSheet } from 'react-native'
import addZeros from '../../../utils/addZeros';

type TopDetailsProps={
  pokedexEntry:number,
  pokemonName:string,
  pokemonTypes:string[],
  pkmImage:string,
  pokemonTypeColor:{
    main:string,
  }
}

const TopDetails: React.FC<TopDetailsProps>=({pokedexEntry,pokemonName,pokemonTypes,pkmImage,pokemonTypeColor})=>{
    return (
    <View style={[styles.container,{backgroundColor:pokemonTypeColor?.main}]} testID="top-details">
        <View style={styles.wrapper}>
            <View >
                <Text style={styles.entry} testID="pokedex-entry-number">
                    {`#${addZeros(pokedexEntry)}`}
                </Text>
                <Text style={styles.pkmName} testID="pokemon-name">
                    {pokemonName}
                </Text>
            </View>
            <View style={styles.badgesWrapper}>
                {
                    pokemonTypes?.map((type) => <Text style={styles.badge} key={type} testID="pokemon-type">{type}</Text>)
                }
            </View>
        </View>
        <Image style={styles.pkmImage} testID="pokemon-image" source={ { uri:pkmImage } }/>
    </View>
    )
}

export default TopDetails

const styles = StyleSheet.create({
    container: {
      padding: 20,
      paddingBottom:70,
    },
    wrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    entry: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    pkmName: {
      fontSize: 32,
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 5
    },
    pkmImage: {
      width: 120,
      height: 120,
      position:'absolute',
      right:0,
      top:70,
    },
    badge:{
        color:'white',
        paddingHorizontal: 10,
        paddingVertical:5,
        backgroundColor :"rgba(0,0,0,0.1)",
        borderRadius:20,
        marginHorizontal:2.5,

    },
    badgesWrapper:{
        flexDirection:'row',
        alignSelf:'flex-start',

    }
  })