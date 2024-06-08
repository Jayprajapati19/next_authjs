import mongoose from "mongoose";

export async function connect(){
    try {
            mongoose.connect(process.env.MONGO_URL!)
            const connection =  mongoose.connection

            connection.on('connected', ()=>{
                    console.log('MondoDB conncted');

                    
            })

            connection.on('error',(err)=>{
                console.log("MongoDb Connection error, plase make sure db is up and runing"+ err);
                process.exit();
                
    })


    } catch (error) {
        console.log("Somethign went Wrong in connecting to DB");
        console.log(error);
        
        
    }
}