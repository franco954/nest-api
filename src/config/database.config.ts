

export default class DatabaseConfig {

    constructor(){
        
        const connectionString = process.env.MONGO_DB_URI

        const connectDatabase = (mongo) => {

            mongo.connect(connectionString, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then(() => {
                return 'db crud connected'
            })
            .catch((err) => {
                return err
            })

        }


    }
    

}