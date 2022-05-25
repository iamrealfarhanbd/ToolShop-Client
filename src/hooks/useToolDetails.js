import { useEffect, useState } from "react";

const useToolDetails = toolId =>{
    const [tool, setTool] = useState({});

    useEffect( () =>{
        const url = `http://localhost:5000/tool/${toolId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setTool(data));

    }, [toolId]);
    return [tool]
}

export default useToolDetails;