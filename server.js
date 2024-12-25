const express = require('express');
require('dotenv').config();

const jwt = require('jsonwebtoken')
const app = express();

const port = process.env.PORT || 3000
const router = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//rutas
router.post('/auth', function (req, res) {
 const authHeader = req.headers.authorization;
 if (authHeader == "secret"  || authHeader =="test" ){// para la practica y validación, recuerda borrar esto en pro. O simplemente sustituir esta petición por una base de datos que guarde este y los usuarios tengan token. (como indique en mensajes anteriores).
     // genera token
     const payload = {  "user_id" : "id_a_verificar",   "date":Date.now()  }

     jwt.sign( payload ,  process.env.JWT_SECRET, { algorithm: 'HS256' },  function (error, token) {
          res.json({"response": "login OK!! ",  token: token});

          });
        return
   }

  res.json({"response":"Login erroneo"})

});


function verifyToken(req,res,next) {
   if(typeof  req.headers.authorization != "undefined" && req.headers.authorization!= null) {

       jwt.verify( req.headers.authorization,  process.env.JWT_SECRET, function (error, data) {

           if(!error && data.user_id != ""  ){
                req.user =  data.user_id
                next()
            }else {

             return  res.status(403).send("Forbidden User! or no user available");
           }
        });


   }else{

         res.status(403).send("Authorization undefined or  without token !");
         return

   }


}

router.post('/test',verifyToken, function(req,res){

    res.send("datos enviados al profile: " +  req.user  );

}

// todas la routes de las apis.
app.use("/", router)



app.listen(port, () => {
   console.log(`Ejemplo API running  http://localhost:${port}`);
   })
