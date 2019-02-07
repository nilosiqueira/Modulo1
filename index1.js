const express = require('express')

const app = express()

const logMiddleware = (req, res, next) => {
    console.log(
        `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
    )
    //criando uma variaveu dentro do req
    req.appName = "GoNode"

    return next()
}
//para o middleware funcionar em todas as requesições
app.use(logMiddleware)
app.get('/', logMiddleware, (req, res) => {
    return res.send(`Bem-vindo ao ${req.appName}, ${req.query.name}`)
})

app.get('/nome/:name', (req, res) => {
   // return res.send(`Bem vindo, ${req.params.name}`)
   return res.json({
       message: `Bem-vindo, ${req.params.name}`
   })
})

app.listen(3000)