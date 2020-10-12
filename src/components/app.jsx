import React from 'react'
import { AppForSomeone } from './appForSomeone'
import { AppHeader } from './appHeader'
import { AppMain } from './appMain'

export const App = () => {
    return(
        <div className="app">
            <AppHeader />
            <AppMain />
            <AppForSomeone />
        </div>
    )
}