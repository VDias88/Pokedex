import * as React from 'react'
import PkmStore from './pkmStore'

const PkmContext= React.createContext()

function PkmProvider({ children }){
    const pkmStore= React.useRef( new PkmStore()).current
    const value={ pkmStore }

    return (
        <PkmContext.Provider value={value}>
            {children}
        </PkmContext.Provider>
    )
}

function usePkmStore(){
    const context = React.useContext(PkmContext)//hook para ter acesso a estado de um provider(pkmstore)
    if(context === undefined){
        throw new Error('usePkmStore must be used within a PkmProvider')
    }

    return context
}
export {
    PkmProvider,
    usePkmStore

}