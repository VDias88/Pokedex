import React from 'react'
import { View,Text,FlatList,StyleSheet } from 'react-native'

const StatsList=({ stats })=>{
    return(
        <View>
            <View><Text style={styles.txtTitle}>Habilidades</Text></View>
            <View>
                {stats.map((e,i)=>{
                    return(
                        <View style={styles.sttsRow} key={i}>
                            <Text>{e.stat.name}</Text>
                            <View>
                                <View></View>
                            </View>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}
export default StatsList

const styles=StyleSheet.create({
    txtTitle:{
        alignSelf:'center',
        fontWeight:'bold',
    },
    sttsRow:{
        flexDirection:'column'
    }
})