import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PostDetail = ({ post }) => {
  return (
    <div className="mb-8">
      <img className="w-[320px] md:w-[600px] mb-2" src={post.image} alt={post.title} />
      <h2 className="mb-2 text-2xl ">{post.title}</h2>
      <p className="italic text-sm mb-4 text-orange-400">
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
      <Link to={`/posts/${post.id}`} className="btn btn-outline text-purple-400 font-bold">
        Ler
      </Link>
    </div>
  );
};

export default PostDetail;

PostDetail.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdBy: PropTypes.string.isRequired,
    tagsArray: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
