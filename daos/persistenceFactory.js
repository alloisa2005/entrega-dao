import config from '../config.js'


class PersistenceFactory {
    static getPersistence = async () => {
        switch (config.app.persistence) {
            case "ARRAY":
                let { default: UsersDaoArray } = await import('./userDaoArray.js')
                // let UsersDaoArray = await import('./userDaoArray.js')
                return new UsersDaoArray()
            case "FILE":
                let { default: UserDaoFile } = await import('./userDaoFile.js')
                return new UserDaoFile()
             case "MONGO":
                 let { default: UsersDaoMongo } = await import('./userDAOMongo.js')
                 return new UsersDaoMongo()
        }
    }
}

export default PersistenceFactory;