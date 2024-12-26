
 import express from 'express';
  import { allZapatos }  from '../models/zapatos.model.js';

import validateTokenMiddleware from '../middlewares/validateRequest.js';

  const router = express.Router();


 router.post('/auth', function (req, res) {
 const authHeader = req.headers.authorization;
 if (authHeader == "secret"  || authHeader =="test" ){
 // genera token
   const payload = {  "user_id" : "id_a_verificar",   "date":Date.now()  }
   jwt.sign( payload ,  process.env.JWT_SECRET, { algorithm: 'HS256' },  function (error, token) {
          res.json({"response": "login OK!! ",  token: token});
          });
      return
   }
  res.json({"response":"Login erroneo"})
 });


router.get("/zapatos",validateTokenMiddleware , function ( req,res ) {
   res.json(allZapatos)
  })


router.get('/test', validateTokenMiddleware, function (req,res){  //cambio de ruta con método de lectura  como get y ya por sus validaciones pre establecidas mediante el middlewre
        res.send("datos enviados al profile: " +  req.user   );  });
 export default router
