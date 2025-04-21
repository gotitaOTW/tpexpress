import express from 'express';
import fechaValida from './modules/validarFecha.js'
import matematica from './modules/calculos.js'

const app=express();
const port=5000;

app.get('/',(req,res)=>{
    res.send("¡Ya estoy respondiendo!");
})

app.get('/saludar/:nombre',(req,res)=>{
    res.send(`Hola ${req.params.nombre}`);
})

app.get('/validarfecha/:ano/:mes/:dia',(req,res)=>{
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
        res.status(200).send(`${matematica[op](req.query.n1,req.query.n2)}`)
    }
})

app.listen(port,()=>{
    console.log(`Servidor escuchando en el puerto ${port}`)
})

