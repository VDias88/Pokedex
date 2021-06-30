import React from 'react'
import { View,Text,StyleSheet,FlatList } from 'react-native'
import { usePkmStore } from '../../../mobx/pkmProvider'
import PkmListMove from './PkmListMove'

import { LogBox } from 'react-native'

LogBox.ignoreLogs([
	'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

const MovesList=({  })=>{

    const { pkmStore } = usePkmStore()
    
    return(
            <>
            <Text style={styles.title}>Moves</Text>
                <FlatList
                style={styles.listStyle}
                data={pkmStore.pokemonDetail.moves}
                keyExtractor={(moves)=>moves.move.name}
                renderItem={({item,index})=><PkmListMove move={item} />}
                />
            </>
    )
}
export default MovesList

const styles=StyleSheet.create({
    title:{
        alignSelf:'center',
        fontWeight:'bold',
    },
    listStyle:{
        
        padding:20
    }
})