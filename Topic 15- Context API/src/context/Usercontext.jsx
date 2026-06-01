import { createContext, useState, useContext } from "react";

const UserContext = createContext();
export { UserContext };

const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};
// Custom hook to consume the UserContext
export const useUserContext = () => {
    const context = useContext(UserContext);
    if(context == undefined) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
}

export default UserProvider;