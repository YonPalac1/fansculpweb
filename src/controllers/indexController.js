// Con los controladores manejaremos las respuestas que enviaremos al cliente/front
// Como apis, vistas, textos
module.exports = {
    index: (req, res) => {
        res.render("index")
    }
}