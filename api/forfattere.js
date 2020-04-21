import { db } from "./../src/firebase.js"
let forfattere = []

let f = db.collection("forfattere")




const createApi = async () => {

    f.onSnapshot(snap => {
        forfattere = snap.docs
        console.log(forfattere)
    }).then(() => {
        module.exports = (req, res) => {
            const { name = 'BOB' } = req.query
            res.status(200).send(`HEI ${name}`)
        }
    })

    

}

createApi()


