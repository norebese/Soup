import dotenv from 'dotenv';

dotenv.config()

const required = (key, defaultValue=undefined) =>{
  const value = process.env[key] || defaultValue;

  if(value == null){
    throw new Error(`키 ${value}는 undefined!`)
  }
  return value
}

export const config = {
  server:{
    hostport: required("HOST_PORT")
  },
  mongodb:{
    mongodbUrl: required("MONGODB_URL")
  },
  firebase:{
    apiKey: required("FIREBASE_APIKEY"),
    authDomain: required("FIREBASE_AUTHDOMAIN"),
    projectId: required("FIREBASE_PROJECTID"),
    storageBucket: required("FIREBASE_STORAGEBUCKET"),
    messagingSenderId: required("FIREBASE_MESSAGINGSENDERID"),
    appId: required("FIREBASE_APPID")
  },
  jwt:{
    secretkey: required("JWT_SECRET"),
    expiresinSec: required("JWT_EXPIRESINSEC")
  },
  bcrypt:{
    saltRound: required("BCRYPT_SALT_ROUNDS")
  },
  openapi:{
    key: required("OPENAPI_KEY")
  }
}