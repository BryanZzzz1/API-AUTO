const { autos } = require("../autos");

const getAutos = (req, res) => {
    return res.json({
        ok: true,
        statusCode: 200,
        autos: autos.map(auto => ({
            id: auto.id,
            nombre: auto.nombre,
            modelo: auto.modelo,
            pais: auto.pais,
            imagenUrl: `https://api-auto-spj9.onrender.com/${auto.imagen}` // URL de la imagen
        }))
    });
};

const getAutoByid = (req, res) => {
    const id = parseInt(req.params.id);
    const auto = autos.find(a => a.id === id);
    if (!auto) {
        return res.status(404).json({
            ok: false,
            statusCode: 404,
            msg: "Auto no encontrado"
        });
    } else {
        return res.json({
            ok: true,
            statusCode: 200,
            auto: {
                id: auto.id,
                nombre: auto.nombre,
                modelo: auto.modelo,
                pais: auto.pais,
                imagenUrl: `https://api-auto-spj9.onrender.com/${auto.imagen}` // URL de la imagen
            }
        });
    }
};

module.exports = {
    getAutos,
    getAutoByid
};
