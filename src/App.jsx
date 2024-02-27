    import React, { createContext, useState } from 'react'
    import Header from './components/Header/Header'
    import Total from './components/Total/Total'
    import Receipt from './components/Receipt/Receipt'
    import Page from './components/Page/Page'
    import './App.css'


    export const TotalContext= createContext(null);

    const App = () => {

        const [totalWorth, setTotalWorth] = useState(100000000000)

    return (
        <TotalContext.Provider value={{totalWorth, setTotalWorth}}>
        <Header />
        <Total />
        <Page />
        <Receipt />
        </TotalContext.Provider>
    )
    }

    export default App

