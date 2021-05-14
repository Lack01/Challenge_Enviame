const faker = require('faker/locale/es');
const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const fs = require('fs');

const empresas = require('../data.json');

router.get('/', (req, res) =>{
    res.json(empresas);
});

router.post('/', (req, res) =>{
    //const { nombre_empresa, sufijo_empresa, descrip_empresa } = req.body;
     //if(nombre_empresa && sufijo_empresa && descrip_empresa){
        const id = (empresas.length + 1);
        var newEmpresa = {
            id,
            nombre_empresa: faker.company.companyName(),
            sufijo_empresa: faker.company.companySuffix(),
            descrip_empresa: faker.company.catchPhraseDescriptor()   
            };
            console.log(empresas);
        empresas.push(newEmpresa);
        res.json(empresas);

     //} else {
     //    res.send('Error de requerimiento')
     //}        
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { nombre_empresa, sufijo_empresa, descrip_empresa } = req.body;
    if (nombre_empresa && sufijo_empresa && descrip_empresa){
        _.each(empresas, (empresa, i)=>{
            if(empresa.id == id){
                empresa.nombre_empresa = nombre_empresa;
                empresa.sufijo_empresa = sufijo_empresa;
                empresa.descrip_empresa = descrip_empresa;
            }
        });
        res.send(empresas);
    }else{
        res.status(500).json({error: 'Hubo un error!'});
    }

});



router.delete('/:id', function(req, res, next){
    empresas.findByIdAndDelete({id:req.params.id}).then(function(empresas){})

    /*const {id} = req.params.id;
    _.each(empresas, (empresa, i) => {
        if (empresa.id == id) {
            empresas.splice(i, 1);
        }*/
        res.send(empresas);
    });
    
//});

module.exports = router;