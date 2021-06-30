import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import StatsRow from './StatsRow'
import { usePkmStore } from '../../../mobx/pkmProvider'

const StatsList=({ stats,color })=>{
    const {pkmStore} = usePkmStore()

    const captString=(word)=>{
        const str1=word.charAt(0).toUpperCase()
        const str2=word.slice(1,word.length)
        return str1+str2
    }

    return(
        <View style={styles.statsCont}>
            <View><Text style={styles.txtTitle}>Status</Text></View>
            <View style={{paddingVertical:20}}>
                {stats?.map((e,i)=>{
                    return(
                        <View style={styles.sttsRow} key={i}>
                            <Text>{captString(e.stat.name)}</Text>
                            <View style={styles.statsColor}>
                                <StatsRow amount={e.base_stat} color={color}/>
                            </View>
                            <Text>{e.base_stat}</Text>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}
export default StatsList

const styles=StyleSheet.create({
    statsCont:{
        paddingHorizontal:20,
    },
    txtTitle:{
        alignSelf:'center',
        fontWeight:'bold',
    },
    sttsRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    statsColor:{
        position:'absolute',
        marginLeft:'40%'
    
    }
})