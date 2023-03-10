import mongoose from 'mongoose';

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@clusteranthony.rf4uk66.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority`;

export default () => {
  mongoose.connect(uri)
  .then( () => console.log(`DB: ${process.env.MONGODB_DB} lista para usar`))
  .catch( err => console.log(err))
} 
  