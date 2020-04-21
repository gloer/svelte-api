import { db } from "./../src/firebase.js"
let forfattere = []

let f = db.collection("forfattere")

f.onSnapshot(snap => {
    forfattere = snap.docs
    console.log(forfattere)
})


const createApi = async () => {

    module.exports = (req, res) => {
        const { name = 'World' } = req.query
        res.status(200).send(`HEI ${name}`)
    }

}

createApi()


