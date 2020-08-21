const fs = require('fs');



let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) console.log(err);
        else
            console.log(`data.json OK`);
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');

    } catch (er) {
        listadoPorHacer = [];
    }
    //console.log(listadoPorHacer);

}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

let actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}


const borrar = (descripcion) => {
    cargarDB();
    let longIni = listadoPorHacer.length;

    listadoPorHacer = listadoPorHacer.filter(tarea => tarea.descripcion != descripcion);
    guardarDB();
    let longFin = listadoPorHacer.length;

    if (longIni != longFin)
        return true;
    else
        return false;
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}