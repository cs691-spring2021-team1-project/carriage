import Firebase from 'firebase';
import Constants from 'expo-constants'

 const config = {
    apiKey: Constants.manifest.extra.apiKey,
    authDomain: Constants.manifest.extra.authDomain,
    databaseURL: Constants.manifest.extra.databaseURL,
    projectId: Constants.manifest.extra.projectId,
    storageBucket: Constants.manifest.extra.storageBucket,
    messagingSenderId: Constants.manifest.extra.messagingSenderId
  };
const db = Firebase.apps.length === 0 ? Firebase.initializeApp(config) : Firebase.app()

export default db;
