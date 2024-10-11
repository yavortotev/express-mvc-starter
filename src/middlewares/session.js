const { verifyToken } = require("../services/jwt");

function session(){
 
    return function(req,res,next){
        
        const token = req.cookies?.token;

        if(token){
            try {
                const sessionData = verifyToken(token);
            //TODO if we need more stuff from session data we can add it in req.user
            req.user={
                email: sessionData.email,
                id: sessionData.id
            };
 
            res.locals.hasUser = true; // TODO just clarify : Used - res.locals.hasUser = true  -for templates to check user presence        

                
            } catch (err) {
                res.clearCookie('token')
                
            }
            
        
        }
    

         next();


    }

   
 

}


module.exports = { session }