import { useEffect } from "react"
import Login from "./components/Login"
import Spotify from "./components/Spotify/Spotify";
import { useStateProvider } from "./utils/StateProvider";
import { reducerCases } from "./utils/constants.js"

const App = () => {
  const [{ token }, dispatch] = useStateProvider();

  useEffect(()=>{
    const hash = window.location.hash;
    if(hash){
      const accessToken = hash.substring(1).split("&")[0].split("=")[1];
      if(accessToken){
        dispatch({ type: reducerCases.SET_TOKEN, accessToken});
      }
    }
  },[dispatch, token]);

  return <>{ token ? <Spotify /> : <Login />}</>
    
}

export default App
