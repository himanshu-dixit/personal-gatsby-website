const { initializeFirebase } = require("./utils/firebase")

exports.handler = async function (event) {
  const { type, id } = JSON.parse(event.body)

  const admin = initializeFirebase()
  const db = admin.firestore()
  const docRef = db.collection("posts").doc(id)

  try {
    if (type === "views") {
      await docRef.update({
        views: admin.firestore.FieldValue.increment(1),
      })
    }

    if (type === "upvote") {
      await docRef.update({
        upvote: admin.firestore.FieldValue.increment(1),
      })
    }
  } catch (_e) {
    await docRef.set({
      views: 1,
      upvote: 10,
    })
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ status: "Action performed successfully" }),
  }
}
