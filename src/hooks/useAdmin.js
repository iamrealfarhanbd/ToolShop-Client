import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect( () =>{
        const email = user?.email;
        if(email){
            fetchData();
        }
    }, [user])
    const fetchData = async () => {
        try {
          const res = await fetch(`https://toolshop-server.onrender.com/tool`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
          });
          const result = await res.json();
          if (!result.error) {
            setAdmin(result);
            setAdminLoading(false);
         
          } else {
            console.log(result);
          }
        } catch (err) {
          console.log(err);
        }
      };
    return [admin, adminLoading]
}

export default useAdmin;