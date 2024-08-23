const express = require('express');
const mongoose=require('mongoose')
const app = express();
const appRouter = express.Router();


//ENVIRONMENT VARIABLES
require('dotenv').config();
const { MONGODB_URL, PORT } = process.env;

//ROUTES
// appRouter.use("/habit",habitRoutes)
// // appRouter.use("/user",userRoutes)

//MIDDLEWARES
// app.use(body-parser)
// app.use(cors)

app.use('/api/v1', appRouter);

mongoose.connect(MONGODB_URL).then(res=>app.listen(PORT,()=>{
  console.log(`🚀 Running on port ${PORT}`)
}))
