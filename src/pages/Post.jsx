import { useParams } from "react-router-dom";
import { useFetchDocument } from "../hooks/useFetchDocument";
import Loader from "../components/Loader";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);
  return (
    <div className="flex  flex-col container items-center justify-start gap-4  min-h-screen h-auto">
      <h1 className="text-5xl text-center mt-16">Posts</h1>
      {loading && (
        <>
          <Loader />
        </>
      )}

      {post && (
        <div>
          <h1 className="text-2xl text-center my-4">{post.title}</h1>
          <img src={post.image} alt={post.image} className="w-[320px] mb-2" />
          <p className="text-orange-300 text-2xl text-center"> {post.body} </p>
          <h3 className="my-2">Tags:</h3>
          <div className="flex gap-4">
            {post.tagsArray.map((tag) => (
              <div key={tag}>
                {" "}
                <span className="text-purple-300">#</span>
                {tag}{" "}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
