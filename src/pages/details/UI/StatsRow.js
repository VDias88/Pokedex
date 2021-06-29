import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { colorTypes } from '../../../utils/pkmTypesColor'

const StatsRow = ({amount,color})=>{
    return(
        <View style={styles.innerRow}>
            <View style={[styles.outRow,{width:(amount/150)*150},{backgroundColor:colorTypes[color]?.main || 'red'}]}></View>
        </View>
    )
}
export default StatsRow

const styles=StyleSheet.create({
    innerRow:{
        width:150,
        height:10,
        backgroundColor:'#F6F6F6',
        borderRadius:50
        
    },
    outRow:{
        width:0,
        height:'100%',
        backgroundColor:'red',
        borderRadius:50
    }
})