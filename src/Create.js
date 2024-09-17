import { useState } from "react";

const Create = () => {

    const [blogTitle, setTitle] = useState("");
    const [blogBody, setBody] = useState("");
    const [blogAuthor, setAuthor] = useState('vBlxze');
    const handleSubmit = (e) => {
        // Prevents the page from reloading after pressing submit button
        e.preventDefault(); 
        const blog = {blogTitle, blogBody, blogAuthor};
    }


    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form
                onSubmit={handleSubmit}
            >
                <label>Blog Title : </label>
                <input
                    type="text"
                    required
                    value={blogTitle}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body : </label>
                <textarea
                    required
                    value={blogBody}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author : </label>
                <select
                    value={blogAuthor}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="vBlxze">vBlxze</option>
                    <option value="Night">Night</option>
                    <option value="Jokesta">Jokesta</option>
                </select>

                <button>Add blog</button>
            </form>
        </div>
    );
}

export default Create;