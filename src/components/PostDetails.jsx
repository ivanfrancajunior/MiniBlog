
import { Link } from "react-router-dom";

const PostDetail = ({ post }) => {
  return (
    <div className="mb-8">
      <img className="max-w-[480px]" src={post.image} alt={post.title} />
      <h2 className="mb-2">{post.title}</h2>
      <p className="italic text-gray-600 text-sm mb-4">
        Criado por: {post.createdBy}
      </p>
      <div className="mb-3 flex">
        {post.tagsArray.map((tag) => (
          <p key={tag} className="mr-2">
            <span className="font-bold">#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ler
      </Link>
    </div>
  );
};

export default PostDetail;