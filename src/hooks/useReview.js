import { useEffect, useState } from "react"

const useReview = ()=>{
    const [reviews , setReviews] = useState([])
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        try {
          const res = await fetch(`https://toolshop-server.onrender.com/review`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          const result = await res.json();
          if (!result.error) {
            setReviews(result);
         
          } else {
            console.log(result);
          }
        } catch (err) {
          console.log(err);
        }
      };
    return [reviews,setReviews];
}
export default useReview;