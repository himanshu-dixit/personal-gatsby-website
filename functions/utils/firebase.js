var admin = require("firebase-admin")
var serviceAccount = require("../secrets/serviceAccountKey.json")

const initializeFirebase = () => {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  } catch (e) {
    console.log("Firebase already initialized")
  }
  return admin
}

module.exports = {
  initializeFirebase,
}
