import axios from 'axios';
import User, { UserWithNoId } from "../model/userModel"

interface ServiceConfig<T>{
    host: string;
    port: number;
    pathMap: T
}
type UserServiceMap = {
    user: "users"
}


export function createUserService(config: ServiceConfig<UserServiceMap>) {
    const userUrl = `http://${config.host}:${config.port}/${config.pathMap.user}`
    return {
        createUser: async function(user: UserWithNoId) {
            const result = await axios.post<User>(userUrl, user)
            return result.data;
        }
    }
}

export function getUserService(config: ServiceConfig<UserServiceMap>) {
    const userUrl = `http://${config.host}:${config.port}/${config.pathMap.user}`
    return {
        getUsers: async function() {
            const result = await axios.get<User[]>(userUrl) 
            return result.data;
        }
    }
}

