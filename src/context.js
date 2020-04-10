import React, { Component, createContext } from 'react'
import { en,tr } from './utils/language'

export const AppContext = createContext()

export class Context extends Component {

    state = {
        // true:TR false:EN
        choosenLanguage : JSON.parse(localStorage.getItem('lang'))
    }

    componentDidUpdate(prevProps,prevState){
        if (this.state.choosenLanguage !== prevState.choosenLanguage) {
            localStorage.setItem('lang',JSON.stringify(this.state.choosenLanguage))
        }
    }

    changeLanguage = () => {
        this.setState( state => ({choosenLanguage : !state.choosenLanguage}) )
    }

    render() {
        const { choosenLanguage } = this.state
        return (
            <AppContext.Provider value={{ texts : choosenLanguage ? en : tr, changeLanguage:this.changeLanguage,lang:this.state.choosenLanguage }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default Context