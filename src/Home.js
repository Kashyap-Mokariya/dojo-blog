// const Home = () => {

//     const clickHere = (e) => {
//         console.log('Button clicked and these are the objects : ', e);
//     }

//     const clickHereAgain = (name, e) => {
//         console.log('Button was clicked by : ' + name , e.target);
//     }

//     return (
//         <div className="home">
//             <h2>Homepage</h2>
//             <button onClick={clickHere}>Click Here</button>
//             <button onClick={(e) => clickHereAgain('Kashyap', e)}>Click Here Again</button>
//         </div>
//     );
// }

// export default Home;

// import { useState } from "react";

// const Home = () => {

//     const [name, setName] = useState('vBlxze');
//     const [Age, setAge] = useState(20);

//     const clickHere = () => {
//         setName('Night');
//         setAge(25);
//     }

//     return (
//         <div className="home">
//             <h2>Homepage</h2>
//             <p> {name} is {Age} years old</p>
//             <button onClick={clickHere}>Click Here</button>
//         </div>
//     );
// }

// export default Home;


// import { useState } from "react";

// const Home = () => {

//     const [blogs, setBlogs] = useState([
//         {title : 'My new website', body : 'lorem ipsum...', author : 'Kashyap', id : 1},
//         {title : 'Welcome Party!', body : 'lorem ipsum...', author : 'Night', id : 2},
//         {title : 'Top elites', body : 'lorem ipsum...', author : 'Jokesta', id : 3},
//     ]);

//     return (
//         <div className="home">

//             {/* when using arrow functions, you can use parentheses () instead of curly braces { } to return an expression directly. This is particularly useful when you want to return a JSX element or a single expression without having to explicitly use the return keyword. */}
//             {blogs.map((blog) => (
//                 <div className="blog-preview" key={blog.id}>
//                     <h2> {blog.title} </h2>
//                     <p> Written by {blog.author} </p>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Home;


import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title : 'My new website', body : 'lorem ipsum...', author : 'vBlxze', id : 1},
        {title : 'Welcome Party!', body : 'lorem ipsum...', author : 'Night', id : 2},
        {title : 'Top elites', body : 'lorem ipsum...', author : 'Jokesta', id : 3},
        {title : 'The God of Elites', body : 'lorem ipsum...', author : 'vBlxze', id : 4}
    ]);

    const deleteBlog = (id) => {
        const newBlogList = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogList);
    }

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All of the blogs are listed here!" deleteBlog={deleteBlog} />
            <BlogList blogs = {blogs.filter((blog) => blog.author === 'vBlxze')} title = "vBlxze's blogs" deleteBlog = {deleteBlog}/>
        </div>
    );
}

export default Home;