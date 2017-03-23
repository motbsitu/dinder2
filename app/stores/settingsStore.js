import firebase from 'firebase'
import MobxFirebaseStore from 'mobx-firebase-store'

const config = {
  apiKey: "AIzaSyCdHzKi2wkAumosbEiMO79dxCPiM9iQMhA",
    authDomain: "dinder-5eaef.firebaseapp.com",
    databaseURL: "https://dinder-5eaef.firebaseio.com",
    storageBucket: "dinder-5eaef.appspot.com",
    messagingSenderId: "842791904999"
}
export default class SettingsStore extends MobxFirebaseStore {
  constructor(){
    firebase.initializeApp(config)
    super(firebase.database().ref())

    this.splashTime = 1000
    this.splashImg = require('../../images/splash.jpg')
    this.loginBG = require ('../../images.login.jpg')
  }
  get LoginBG(){
    return this.loginBG
  }
  get SplashTime(){
    return this.splashTime
  }
  get SplashImg(){
    return this.splashImg
  }
}
