import React from 'react'
import { render } from '@testing-library/react-native'
import TopDetails from '../../src/pages/details/UI/TopDetails';
import BodyDetails from '../../src/pages/details/UI/BodyDetails';

let component = null

beforeAll(()=>{
    
   
})


describe('Pkm Details Tests',()=>{      
    it('Should render TopDetails correctly',()=>{//it.skip -- passsar teste
        const { queryByTestId }=render(<TopDetails />)
        const component=queryByTestId('top-details')
        expect(component).toBeTruthy()
    });

    it('should has a pokedex position',()=>{
        const { queryByTestId }=render(<TopDetails pokedexEntry={'25'}/>)
        const component=queryByTestId('pokedex-entry-number')
        expect(component.props.children).toBe('#025')
    });

    it('should render pokemo name',()=>{
        const pokemonName='pikachu'
        const { queryByTestId }=render(<TopDetails pokemonName={pokemonName}/>)
        const component=queryByTestId('pokemon-name')
        expect(component.props.children).toBe(pokemonName)
    });

    it('should has a background color prop',()=>{
        const pokemonTypeColor={
            main:'orange',
            accent:'#FFCA35'
        }

        const { queryByTestId }=render(<TopDetails pokemonTypeColor={pokemonTypeColor}/>)
        const component=queryByTestId('top-details')
        expect(component.props.style[1].backgroundColor).toBe(pokemonTypeColor?.main)
    });

    it('should render pokemo type badge',()=>{
        const pokemonTypes=['electric','normal']

        const { queryAllByTestId }=render(<TopDetails pokemonTypes={pokemonTypes}/>)
        const components=queryAllByTestId('pokemon-type')
        
        expect(components.length).toEqual(pokemonTypes.length)

        components.forEach((component,index)=>{
            expect(component.props.children).toBe(pokemonTypes[index])
        })
    });
    it('should render pokemo image',()=>{
        const url='pikachu'

        const { queryByTestId }=render(<TopDetails pkmImage={url}/>)
        const component=queryByTestId('pokemon-image')
        expect(component.props.source.uri).toBe(url)
    });
    it('should match snapshot <TopDetails />',()=>{
        const url='pikachu'
        const pokemonTypes=['electric','normal']
        const pokemonName='pikachu'
        const pokedexEntry=32
        const component=render(<TopDetails 
        pkmImage={url}
        pokemonName={pokemonName}
        pokedexEntry={pokedexEntry}
        pokemonTypes={pokemonTypes}
        />).toJSON()
        expect(component).toMatchSnapshot()
    });

    it('Shold render BodyDetails correctly',()=>{
        const { queryByTestId } = render (<BodyDetails /> )
        const component=queryByTestId('body-details')
        expect(component).toBeTruthy()
    });
    //renderizar prop
    it('Shold render pkmname prop',()=>{
        const pkmName="pikachu"
        const { queryByTestId } = render (<BodyDetails pkmName={pkmName}/> )
        const component=queryByTestId('body-details-prop')
        expect(component).toBeTruthy()
    })
})