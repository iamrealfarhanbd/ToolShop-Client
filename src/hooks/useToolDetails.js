import { useEffect, useState } from "react";

const useToolDetails = toolId =>{
    const [tool, setTool] = useState({});

    useEffect( () =>{
        const url = `https://toolshop-server.onrender.com/tool/${toolId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setTool(data));

    }, [toolId]);
    return [tool]
}

export default useToolDetails;