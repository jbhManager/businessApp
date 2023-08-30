import axios from 'axios';
import User, { UserWithNoId } from "../model/userModel"

interface ServiceConfig<T>{
    host: string;
    port: number;
    pathMap: T
}
type TransitionServiceMap = {
    transition: "transitions"
}


export function createTransitionService(config: ServiceConfig<TransitionServiceMap>) {
    const userUrl = `http://${config.host}:${config.port}/${config.pathMap.transition}`
    return {
        createTransition: async function(user: UserWithNoId) {
            const result = await axios.post<User>(userUrl, user)
            return result.data;
        }
    }
}