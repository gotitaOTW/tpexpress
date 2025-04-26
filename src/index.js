import express from 'express';
import fechaValida from './modules/validarFecha.js'
import matematica from './modules/calculos.js'
import omdb from './modules/omdb.js'
import Alumno from './models/alumno.js'

const alumnos=[];
alumnos.push(new Alumno("Jhonny Melaslavo", "48511418", 17));
alumnos.push(new Alumno("Aaron Seleneitor", "48511418", 22));
alumnos.push(new Alumno("El Mata Mata 99", "48511418", 19));


const app=express();
const port=2022;

app.get('/',(req,res)=>{
    res.send("¡Ya estoy respondiendo!");
})

app.listen(port,()=>{
    console.log(`Servidor escuchando en el puerto ${port}`)
})

app.get('/saludar/:nombre',(req,res)=>{
    res.send(`Hola ${req.params.nombre}`);
})

app.get('/validarfecha/:dia/:mes/:ano',(req,res)=>{
    let respuesta="Fecha inválida";
    if(fechaValida(parseInt(req.params.ano),parseInt(req.params.mes),parseInt(req.params.dia))){
        respuesta="Fecha válida";
    }
    res.send(respuesta);
})

app.get('/matematica/:operacion',(req,res)=>{
    let op=req.params.operacion;
    let num1=parseInt(req.query.n1);
    let num2=parseInt(req.query.n2);
    if(matematica.validarNums(num1,num2)||(op!="sumar"&&op!="restar"&&op!="multiplicar"&&op!="dividir")){
        res.status(404).send("Números inválidos u operación matemática inválida")
    }
    else{
        res.status(200).send(`${matematica[op](parseInt(req.query.n1),parseInt(req.query.n2))}`)
    }
})

app.get('/omdb',(req,res)=>{
    let respuesta=omdb.buscarPorTitulo(req.query.titulo);
    res.status(200).send(`Buscar por título: ${respuesta}`);
})

app.get('/omdb',(req,res)=>{
    let respuesta=omdb.buscarPorId(req.query.id);
    res.status(200).send(`Buscar por ID: ${respuesta}`);
})

app.get('/alumnos',(req,res)=>{
    let alumno, contenido="";
    for(let i=0; i<alumnos.length;i++){
        alumno=alumnos[i];
        contenido+=`${i+1}. ${alumno.toString()}<br>`;
    }
    res.status(200).send(contenido);
})

app.get('/alumnos:dni',(req,res)=>{
    let dni=req.params.dni;
    let estado, respuesta;
    let buscado=alumnos.find(alumno=>alumno.dni==dni);
    if(buscado!=null){
        respuesta=`El alumno de DNI ${dni} es ${buscado.nombre}`;
        estado=200;
    }
    else{
        respuesta=`No hay un alumno de DNI ${dni}`
        estado=404;
    }
    res.status(estado).send(respuesta);
})


