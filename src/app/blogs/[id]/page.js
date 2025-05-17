import Link from "next/link";

const fetchBlogSingle = async (id) => {
    const response = await fetch (`https://dummyjson.com/posts/${id}`);
    return response.json()
}

const blogDetailSingle = async ({params}) => {
    const {id} = params;
    const blog = await fetchBlogSingle(id);

    return (
        <section className="single-blog-detail">
            <div className="container">
                <Link href='/blogs' className="btn-primary go-back">Back</Link>
                <div className="blog-item">
                    <span className="blog-number">{blog.id}.</span>
                    <div className="blog-detail">
                        <h4>{blog.title}</h4>
                        <p>{blog.body}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default blogDetailSingle;