import React, { Component } from 'react'
import queryString from 'query-string'
import { Redirect } from 'react-router-dom'

export class Login extends Component {

    state = {
        redirect : false
    }

    setSession = () => {

        sessionStorage.setItem('Session',JSON.stringify(queryString.parse(this.props.location.search)))

        //TODO : didSuccedd için koşullar yeterli değil
        const didSucceed = sessionStorage.getItem('Session') !== null | undefined ? true : false

        return new Promise((resolve,reject) => {
            didSucceed ? resolve(true) : reject(false)
        })
    }

    componentDidMount(){
        this.setSession().then( res => this.setState({redirect : res})).catch( err => console.log(err))
    }

    render() {
        return (
            <div>
                <Redirect to='/app' />
            </div>
        )
    }
}

export default Login