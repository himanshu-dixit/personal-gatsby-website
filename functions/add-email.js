const { initializeFirebase } = require("./utils/firebase")

exports.handler = async function (event,) {
  const { email, name } = JSON.parse(event.body);
  if(!email){
    return {statusCode: 500}
  }

  const admin = initializeFirebase();
  const db = admin.firestore();
  const docRef = db.collection('subscribers').doc(`${email}-${name}`);

  await docRef.set({
    email, name
  });

  return {
    statusCode: 200,
    body: JSON.stringify({status: 'User added successfully'}),
  };
};