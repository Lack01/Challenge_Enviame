const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("HELLO");
});

module.exports = router;





/*const { Router } = require('express');
const router = Router()

const Empresa = require ('../models/Empresa');

router.get('/empresas', (req, res) => {
    const empresas = await Empresa.find()
    res.json(empresas);
});
router.post('/empresas', async (req, res) => {
    const newEmpresa = new Empresa(req.body)
    await newEmpresa.save()
    res.send('recibido!')
});

module.exports = router; */