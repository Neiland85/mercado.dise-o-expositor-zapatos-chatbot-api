
import  jwt  from  'jsonwebtoken'


const validateTokenMiddleware =  function ( req , res , next ) {
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
 export  default   validateTokenMiddleware;
