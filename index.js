const express = require("express");
const app = express();
const cors = require("cors");
const puerto = 3001;

const { getAutos, getAutoByid } = require("./controllers/autos.controllers");

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Rutas para obtener información sobre autos
app.get("/autos", getAutos);
app.get("/autos/:id", getAutoByid);

app.listen(puerto, () => {
    console.log(`Servidor arriba ok en puerto ${puerto}`);
});

