const faker = require('faker/locale/es');
const fs = require('fs');
var cant = 2                      //cantidad de empresas que desea generar


const {Schema, model} = require('mongoose');

const empresaSchema = new Schema({
    nombre_empresa: String,
    sufijo_empresa: String,
    descrip_empresa: String,  
},{
timestamp: true
});


/*function generateCompany() {
    let empresas = [];
    for (let id = 1; id <= cant; id++){

        const nombre_empresa = faker.company.companyName();
        const sufijo_empresa = faker.company.companySuffix();
        const descrip_empresa = faker.company.catchPhraseDescriptor();
    
        empresas.push({
            id:id,
            nombre_empresa: nombre_empresa,
            sufijo_empresa: sufijo_empresa,
            descrip_empresa: descrip_empresa,
        })
    }

    return { data: empresas }

}*/

//const generatedCompany = generateCompany();
//fs.writeFileSync('src/data.json', JSON.stringify(generatedCompany, null, "\t"))
    


//module.exports = model("empresa", empresas);

