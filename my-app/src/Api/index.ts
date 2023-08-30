import { createUserService, getUserService } from "./userService";
import { createTransitionService } from "./transitionService";

const userHost = process.env.REACT_APP_USER_SERVICE_HOST;
const userPort = process.env.REACT_APP_USER_SERVICE_PORT;
const transitionHost = process.env.REACT_APP_TRANSITION_SERVICE_HOST;
const transitionPort = process.env.REACT_APP_TRANSITION_SERVICE_PORT;

if (!userHost || !userPort) {
    throw new Error("User service host or port not provided");
}

if (!transitionHost || !transitionPort) {
    throw new Error("Transition service host or port not provided");
}

const API = {
    userService: createUserService({
        host: userHost,
        port: parseInt(userPort),
        pathMap: { user: "users" }
    }),
    getUserService: getUserService({
        host: userHost,
        port: parseInt(userPort),
        pathMap: { user: "users" }
    }),
    transitionService: createTransitionService({
        host: transitionHost,
        port: parseInt(transitionPort),
        pathMap: { transition: "transitions" }
    })
};

export default API;
