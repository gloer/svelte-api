   
module.exports = (req, res) => {
    const { name = 'BOB' } = req.query
    res.status(200).send(`HEI ${name}`)
}
    

