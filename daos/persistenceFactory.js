import config from '../config.js'


class PersistenceFactory {
    static getPersistence = async () => {
        switch (config.app.persistence) {
             case "MONGO":
                 let { default: UsersDaoMongo } = await import('./userDAOMongo.js')
                 return new UsersDaoMongo()
        }
    }
}

export default PersistenceFactory;