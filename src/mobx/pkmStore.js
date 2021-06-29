import { makeAutoObservable,configure, action} from 'mobx'
//usando mobx,
configure({
    enforceActions:false
})
const LIMIT = 10
let currentOffset=0

//

class PkmStore{

    pokemons=[]
    pokemonDetail={}
    //PkmStore.fetchPokemons--retornar promisses resolvidas contendo offset(ou nao)
    async fetchPokemons(offset=0) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`)
        const pkmJson = await response.json()
        let pkms = pkmJson.results.map(async (pkm) => {
          const pkmDetail = await this.getPokemoDetail(pkm.name)
          pkm.image = pkmDetail.sprites.front_default
          return pkm
        })
        pkms = await Promise.all(pkms)
        return pkms
    }
    //pegar detalhes do pkm usando seu nome
    async getPokemoDetail(name) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const detail = await response.json()
        return detail
    }
    //funcao para atualizar lista de pokemons
    async updatePokemonList(offset) {
        //uso da fetchPokemons para pegar pkms antigos e adicionar novos
        const pkmJson = await this.fetchPokemons(offset)
        //adição dos novos
        this.pokemons = [...this.pokemons,...pkmJson]
    }
    //
    async updatePokemonDetail(name){
        const pkmDetail=await this.getPokemoDetail(name)
        this.setPokemonDetail(pkmDetail)
    }

    addPkmToList=action((pokemons,pkmJson)=>{
        this.pokemons=[...pokemons,...pkmJson]
    })

    setPokemonDetail=action((pokemon)=>{
        this.pokemonDetail=pokemon
    })

    onReachEndList(){
        currentOffset+=LIMIT
        this.updatePokemonList(currentOffset)
    }

    constructor(){
        makeAutoObservable(this)
    }
}
export default PkmStore