import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, Image } from 'react-native';
import  { observer } from 'mobx-react'
import { usePkmStore } from '../../mobx/pkmProvider'
import PkmListItem from './UI/PkmListItem';


const HomeScreen = observer(({ navigation }) => {

  const { pkmStore } = usePkmStore()
  useEffect(() => {
    pkmStore.updatePokemonList()
  }, [])


  function onGoToDetails(pokemon) {
    navigation.navigate('Details', { pokemon })
  }

  return (
    <>
      <View style={styles.bgTop} />
      <View style={styles.bgBottom} />
      <FlatList
        data={pkmStore.pokemons}
        keyExtractor={(pkm) => pkm.name}
        renderItem={({item,index}) =><PkmListItem item ={item} index={index} onGoToDetails={onGoToDetails}/>}
        onEndReached={() =>pkmStore.onReachEndList()}
        onEndReachedThreshold={0.1}
        initialNumToRender={10}
      />


    </>
  );
})

export default HomeScreen;

const styles = StyleSheet.create({
  pokemonItem: {
    margin: 10,
    marginLeft: 0,
    paddingLeft:20,
    backgroundColor: 'white',
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    marginRight:20
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  bgTop: {
    position: 'absolute',
    backgroundColor: 'black',
    top: 0,
    left: 0,
    width: '100%',
    height: '40%',
  },
  bgBottom: {
    position: 'absolute',
    backgroundColor: 'red',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    marginTop: '60%'
  }
})