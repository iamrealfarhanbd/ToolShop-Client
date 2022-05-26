import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className="mb-5 text-5xl font-bold">My Blog</h2>
            <div className="card grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 shadow-2xl bg-base-100">
                <div className="card-body text-left bg-sky-500 text-white">
                <h1 className="mb-2 text-2xl font-bold">How will you improve the performance of a React Application?</h1>
                    <p className="mb-5 text-1xl font-bold">Ans: To get the most out of React rendering, ensure components only receive props they need.You will be able to minimize your CPU usage and avoid rendering extraneous features.The idea is to create a functional component that collects and redistributes all props.</p>
                </div>
                <div className="card-body text-left">
                <h1 className="mb-2 text-2xl font-bold">What are the different ways to manage a state in a React application?</h1>
                    <p className="mb-5 text-1xl font-bold">Ans: State management is a difficult part of any application, which is why there are so many state management libraries/tools available, such as Redux, MobX, Flux, RxJS, and others. Each state update re-renders all relevant components, so it keeps distinct components in sync with one another. It can also serve as a conduit for communication between separate components.One of the most challenging aspects of any application is managing state, which is why there are so many state management libraries/tools available, such</p>
                </div>
                <div className="card-body text-left bg-sky-500 text-white">
                <h1 className="mb-2 text-2xl font-bold">How does prototypical inheritance work?</h1>
                    <p className="mb-5 text-1xl font-bold">Ans: It is an object-oriented programming technique in which behavior reuse (also known as inheritance) is achieved by reusing existing prototype objects. Formal names for prototypical, prototype-oriented, classless, or instance-based programming include prototype, prototype-oriented, prototype-based, and prototype-oriented.</p>
                </div>
                <div className="card-body text-left">
                <h1 className="mb-2 text-2xl font-bold">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                    <p className="mb-5 text-1xl font-bold">Ans: Directly updating state does not modify it immediately. Instead, it generates a pending state transition, which will only be accessed after you have used this function. You will lose control of the state in all your components.</p>
                </div>
                <div className="card-body text-left bg-sky-500 text-white">
                <h1 className="mb-2 text-2xl font-bold">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                    <p className="mb-5 text-1xl font-bold">Ans: To find all items in an array that satisfy a specific condition, use the filter method.To find out if at least one item meets the criteria, use the find method.To determine if a value is contained in an array, use the includes method.To find the position of a particular item in an array, use the indexOf method.</p>
                </div>
                <div className="card-body text-left ">
                <h1 className="mb-2 text-2xl font-bold">What is a unit test? Why should write unit tests?</h1>
                    <p className="mb-5 text-1xl font-bold">Ans: In unit testing, components of a program are tested to ensure that they work properly. Developers write unit tests to ensure that their code works properly. It helps detect bugs early and prevent them in the future.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;