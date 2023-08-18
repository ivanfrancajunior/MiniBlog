import { useParams } from "react-router-dom";
import { useFetchDocument } from "../hooks/useFetchDocument.jsx";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);
  return (
    <div className="flex  flex-col container items-center justify-start gap-4  min-h-screen h-auto">
      <h1>Posts</h1>
      {loading && <p>Carregando post...</p>}

      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.image} />
          <p>{post.body}</p>
          <h3>Esse post trata sobre</h3>
          <div>
            {post.tagsArray.map((tag) => (
              <p key={tag}>
                <span>#</span> {tag}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
