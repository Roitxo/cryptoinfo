require('dotenv').config()
const express = require("express")
const PORT = 3001
const app = express()
const axios = require('axios')

// Rutas
app.get('/api/', async (req, res) => {
    try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?limit=100', {
            headers: {
                'X-CMC_PRO_API_KEY': process.env.API_KEY
            }
        })
        res.status(200)
        res.send(response.data.data)
    } catch (error) {
        res.status(500)
        res.send({code: 500, message: "Se ha producido un error"})
        return
    }
})    

app.listen(PORT, () => console.log("Servidor de API en puerto " + PORT))