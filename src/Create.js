// import { useState } from "react";

// const Create = () => {

//     const [title, setTitle] = useState("");
//     const [body, setBody] = useState("");
//     const [author, setAuthor] = useState('vBlxze');
//     const [isLoading, setIsLoading] = useState(false);

//     const handleSubmit = (e) => {
//         // Prevents the page from reloading after pressing submit button
//         e.preventDefault();
//         const blog = { title, body, author };
//         setIsLoading(true);

//         fetch('http://localhost:8000/blogs', {
//             method: 'POST',
//             headers: { 'Content-type': "application/json" },
//             body: JSON.stringify(blog)
//         }).then(() => {
//             console.log("New blog added");
//             setIsLoading(false);
//         })
//     }


//     return (
//         <div className="create">
//             <h2>Add a new blog</h2>
//             <form
//                 onSubmit={handleSubmit}
//             >
//                 <label>Blog Title : </label>
//                 <input
//                     type="text"
//                     required
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                 />
//                 <label>Blog body : </label>
//                 <textarea
//                     required
//                     value={body}
//                     onChange={(e) => setBody(e.target.value)}
//                 ></textarea>
//                 <label>Blog author : </label>
//                 <select
//                     value={author}
//                     onChange={(e) => setAuthor(e.target.value)}
//                 >
//                     <option value="vBlxze">vBlxze</option>
//                     <option value="Night">Night</option>
//                     <option value="Jokesta">Jokesta</option>
//                 </select>

//                 {!isLoading && <button>Add blog</button>}
//                 {isLoading && <button disabled>Adding blog</button>}
//             </form>
//         </div>
//     );
// }

// export default Create;

import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const titleRef = useRef();
    const bodyRef = useRef();
    const authorRef = useRef('vBlxze');
    const [isLoading, setIsLoading] = useState(false);
    const toHomePage = useHistory();

    const handleSubmit = (e) => {
        // Prevents the page from reloading after pressing submit button
        e.preventDefault();
        const blog = {
            title: titleRef.current.value,
            body: bodyRef.current.value,
            author: authorRef.current.value
        };
        setIsLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-type': "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New blog added");
            setIsLoading(false);
            toHomePage.push('/');
        });
    };

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title : </label>
                <input
                    type="text"
                    required
                    ref={titleRef}
                />
                <label>Blog body : </label>
                <textarea
                    required
                    ref={bodyRef}
                ></textarea>
                <label>Blog author : </label>
                <select
                    defaultValue="vBlxze"
                    ref={authorRef}
                >
                    <option value="vBlxze">vBlxze</option>
                    <option value="Night">Night</option>
                    <option value="Jokesta">Jokesta</option>
                </select>

                {!isLoading && <button>Add blog</button>}
                {isLoading && <button disabled>Adding blog</button>}
            </form>
        </div>
    );
};

export default Create;
