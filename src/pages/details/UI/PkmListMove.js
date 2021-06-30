import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { observer } from 'mobx-react';

const PkmListMove= observer(({ move })=>{
    const captString=(word)=>{
        const str1=word.charAt(0).toUpperCase()
        const str2=word.slice(1,word.length)
        return str1+str2
    }
      return (
       <View style={styles.contStyle}>
           <Text style={styles.txtStyle}>{captString(move?.move?.name)}</Text>
       </View>
      )
})
  
export default PkmListMove

const styles=StyleSheet.create({
    txtStyle:{
       

    },
    contStyle:{
        backgroundColor:'#F6F6F6',
        padding:10,
        margin:2,
        borderRadius:50
    }
})