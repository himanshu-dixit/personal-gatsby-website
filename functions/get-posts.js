const { initializeFirebase } = require("./utils/firebase")

exports.handler = async function () {
  const admin = initializeFirebase()
  const db = admin.firestore()
  const snapshot = await db.collection("posts").get()

  const data = {}
  snapshot.forEach(doc => {
    data[doc.id] = doc.data()
  })

  return {
    statusCode: 200,
    body: JSON.stringify({ data }),
  }
}
