var admin = require("firebase-admin")
const {
  type,
  project_id,
  private_key_id,
  private_key,
  client_email,
  client_id,
  auth_uri,
  token_uri,
  auth_provider_x509_cert_url,
  client_x509_cert_url} = process.env;


let cert =  {
  type,
  project_id,
  private_key_id,
  private_key: private_key.replace(/\\n/g,'\n'),
  client_email,
  client_id,
  auth_uri,
  token_uri,
  auth_provider_x509_cert_url,
  client_x509_cert_url} ;

// cert = require("../secrets/serviceAcccountKey.json")


const initializeFirebase = () => {
  try {

    admin.initializeApp({
      credential: admin.credential.cert(cert)
    })
  } catch (e) {
    console.log("Firebase already initialized")
  }
  return admin
}

module.exports = {
  initializeFirebase,
}
