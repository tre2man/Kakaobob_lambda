var admin = require("firebase-admin");
var firestore = require("firebase-admin/firestore");
var serviceAccount = require("./key/kakaobob-ac167-firebase-adminsdk-gsr5j-824536b875.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = firestore.getFirestore();

const saveData = async (collection, doc, data) => {
  try {
    await db.collection(collection).doc(doc).set(data);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

const getData = async (collection, doc) => {
  try {
    const data = await db.collection(collection).doc(doc).get();
    return data.data();
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  saveData,
  getData,
};
