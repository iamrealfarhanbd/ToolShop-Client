import { useEffect, useState } from "react"

const useReview = ()=>{
    const [reviews , setReviews] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=> res.json())
        .then(reviewData=>setReviews(reviewData))
    },[])

    return [reviews,setReviews];
}
export default useReview;