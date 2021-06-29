import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

const Abilities=({abilities})=>{
   const captString=(word)=>{
       const str1=word.charAt(0).toUpperCase()
       const str2=word.slice(1,word.length)
       return str1+str2
   }
    return(
        <View>
            <View><Text style={styles.txtTitle}>Habilidades</Text></View>
            <View style={styles.contAb}>
                {abilities?.map((e,i)=>{return(<View style={styles.abDiv} key={i}><Text >{captString(e)}</Text></View>)})}
            </View>
        </View>
    )
}

export default Abilities

const styles=StyleSheet.create({
    txtTitle:{
        alignSelf:'center',
        fontWeight:'bold',
    },
    contAb:{
        flexDirection:'row',
        alignSelf:'center'
    },
    abDiv:{
        padding:5,
        backgroundColor:'#F6F6F6',
        borderRadius:50,
        marginHorizontal:2
    }
})