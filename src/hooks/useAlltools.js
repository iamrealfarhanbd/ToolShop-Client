import { useEffect, useState } from "react";

const useAllTools = () =>{
    const [tools, setTools] = useState([]);

    useEffect( ()=>{
        fetchData();
    }, []);


    const fetchData = async () => {
        try {
          const res = await fetch(`https://toolshop-server.onrender.com/tool`);
          const result = await res.json();
          if (!result.error) {
            setTools(result);
         console.log(tools);
          } else {
            console.log(result);
          }
        } catch (err) {
          console.log(err);
        }
      };
    return [tools, setTools]
}

export default useAllTools;