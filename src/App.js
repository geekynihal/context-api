import logo from './logo.svg';
import CompA from './CompA';
import { createContext } from 'react';
const FirstName=createContext();
const LastName=createContext();
function App() {
  return (
   <FirstName.Provider value={"nihal"}>
     <LastName.Provider value={"gupta"}>
       <CompA/>
       </LastName.Provider>
   </FirstName.Provider>
  
  );
}

export default App;
export {FirstName,LastName};