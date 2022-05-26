import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className="mb-5 text-5xl font-bold">My Blog</h2>
            <div className="card grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 shadow-2xl bg-base-100">
                <div className="card-body text-left bg-sky-500 text-white">
                <h1 className="mb-2 text-2xl font-bold">How will you improve the performance of a React Application?</h1>
                    <p className="mb-5 text-1xl font-bold">Ans: Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card-body text-left">
                <h1 className="mb-2 text-2xl font-bold">What are the different ways to manage a state in a React application?</h1>
                    <p className="mb-5 text-1xl font-bold">Ans: Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card-body text-left bg-sky-500 text-white">
                <h1 className="mb-2 text-2xl font-bold">How does prototypical inheritance work?</h1>
                    <p className="mb-5 text-1xl font-bold">Ans: Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card-body text-left">
                <h1 className="mb-2 text-2xl font-bold">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                    <p className="mb-5 text-1xl font-bold">Ans: Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card-body text-left bg-sky-500 text-white">
                <h1 className="mb-2 text-2xl font-bold">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                    <p className="mb-5 text-1xl font-bold">Ans: Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card-body text-left ">
                <h1 className="mb-2 text-2xl font-bold">What is a unit test? Why should write unit tests?</h1>
                    <p className="mb-5 text-1xl font-bold">Ans: Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;