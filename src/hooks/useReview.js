import { useEffect, useState } from "react"

const useReview = ()=>{
    const [reviews , setReviews] = useState([])
    useEffect(()=>{
        fetch('https://toolshop-server.onrender.com/review')
        .then(res=> res.json())
        .then(reviewData=>setReviews(reviewData))
    },[])

    return [reviews,setReviews];
}
export default useReview;