 import jwt from 'jsonwebtoken';
 require('dotenv').config()

 function  isValidAuthByTokenTest ()
   {  return { response_status : 200, value:"authetication success"} };
 function  inValidAuthByTokenTest ()
   {  return {  response_status :400,  value :  "Authetification fail"}; }


async function main  ( auth) { //el main debe ser para la lectura final y veredicto de validación/error en el testing. Con todos los metodos disponibles o diferentes para testar (axios, peticion simple en test, cURL , http...)

  let value
  let token= ""

   if(!auth)
        value=  inValidAuthByTokenTest() ;
     else{
       try{  //de haber token valido. Veremos con su API si esto va correcto
           token=jwt.verify(auth ,  process.env.JWT_SECRET);
            if(token != null )  value =  isValidAuthByTokenTest(); else   value=  inValidAuthByTokenTest() ;

         }
         catch(ex) {

              value=  inValidAuthByTokenTest(); //Error al generar.

         }
    }
     console.log('Results for authentication',value.response_status,value.value  ) // si la validacion tiene éxito mostrar por pantalla.
}

main();
