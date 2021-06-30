import React,{ useEffect } from 'react'
import { View,Text,FlatList,StyleSheet } from 'react-native'
import { usePkmStore } from '../../../mobx/pkmProvider'
import PkmStore from '../../../mobx/pkmStore';
import Abilities from '../UI/Abilities' 
import StatsList from './StatsList';
import MovesList from './MovesList';


type BodyDetailsProps={
    pkmName:string,
}

const BodyDetails:React.FC<BodyDetailsProps>=({pkmName})=>{
    const { pkmStore } = usePkmStore()
    useEffect(() => {
      pkmStore.updatePokemonDetail(pkmName)
    }, [])
    
    const setHeight = (height)=>{
        return `${height/10}m`
    }
    const setWeight = (weight)=>{
        return `${weight/10}kg`
    }
    const listAb=(abilities)=>{
        if(abilities === undefined){

        }else{
            const list=[]
            abilities.forEach(e=>{
                list.push(e.ability.name)
            })
            return list
        }  
    }
    return(
        <View testID="body-details" style={styles.bodyStyle}>
           <View testID="body-details-prop" style={styles.contHead}>
                <View >
                    <Text style={styles.headText} >{`${setHeight(pkmStore.pokemonDetail.height)}`}</Text>
                    <Text style={styles.headSubText}>Altura</Text>
                </View>
                <View>
                    <Text style={styles.headText} >{`${setWeight(pkmStore.pokemonDetail.weight)}`}</Text>
                    <Text style={styles.headSubText}>Peso</Text>
                </View>
           </View>
           <View>
               <Abilities abilities={listAb(pkmStore.pokemonDetail.abilities)}/>
           </View>
           <View>
                <StatsList  stats={pkmStore.pokemonDetail.stats} color={pkmStore.pokemonDetail?.types?.[0]?.type?.name}/>
           </View>
           <View>
                <MovesList />
           </View>
        </View>
    )
}
export default BodyDetails

const styles=StyleSheet.create({
    contBox:{
        fontSize:20
    },
    contHead:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingVertical:20
        
    },
    headText:{
        fontWeight:'bold',
        fontSize:20
    },
    headSubText:{
        alignSelf:'center'
    },
    bodyStyle:{
        height:'100%',
        
    }
})