import db from '../firestore'
import Axios from 'axios'

export const checkIfUserDataExist = (user_id) => {
    // return db.collection('informations').where('user_id','==',user_id).get()
    return db.collection('informations').doc(user_id).get().then( doc => {
        if (doc.exists) return doc.data()
        else return false
    })
    .catch( err => console.log(err))
}

export const saveDataToDatabase = (data,user_id) => {
    //return db.collection("informations").add(data).catch( err => console.log(err))
    return db.collection("informations").doc(user_id).set(data).catch( err => console.log(err))
}

export const updateDatabase = (data,user_id) => {
    return db.collection('informations').doc(user_id).update(data).catch( err => console.log(err))
}

export const requestToLambda = (params) => {
    return Axios.post('https://fgmnul59k0.execute-api.eu-central-1.amazonaws.com/test/twifo',params)
}

export const checkSession = () => {
    return sessionStorage.getItem('Session') === null || undefined ? false : true
}

export const signInWithTwitter = () => {
    Axios.post(process.env.REACT_APP_API_URL + 'oauth',{ app_password : 'asd123056'}).then( res => window.location.replace(res.data.url))
}