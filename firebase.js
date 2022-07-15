import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyDLKsN5CJQU5pOQL34zqu0NGZtu1e27YPs",
	authDomain: "bike-shop-1d640.firebaseapp.com",
	projectId: "bike-shop-1d640",
	storageBucket: "bike-shop-1d640.appspot.com",
	messagingSenderId: "985824347165",
	appId: "1:985824347165:web:9b7455ee8adcbb69a9f2f4"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };