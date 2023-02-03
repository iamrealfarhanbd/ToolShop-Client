import { useEffect, useState } from "react";

const useToolDetails = toolId =>{
    const [tool, setTool] = useState({});

    useEffect( () =>{
        fetchData();
    }, [toolId]);

    const fetchData = async () => {
        try {
          const res = await fetch(`https://toolshop-server.onrender.com/tool/${toolId}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          const result = await res.json();
          if (!result.error) {
            setTool(result);
         
          } else {
            console.log(result);
          }
        } catch (err) {
          console.log(err);
        }
      };
    return [tool]
}

export default useToolDetails;