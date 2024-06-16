import { createContext } from "react";

const UserContext = createContext({ name: "Karan" });

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserConsumer, UserProvider };
export default UserContext;
