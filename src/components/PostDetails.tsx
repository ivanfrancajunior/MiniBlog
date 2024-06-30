import { Link } from "react-router-dom";

interface Props {
  post: {
    title: string;
    createdBy: string;
    tagsArray: string[];
    image: string;
    id: string;
  };
}

const PostDetail = ({ post }: Props) => {
  return (
    <div className='w-96 border-2 border-black hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center  md:w-[540px] mb-4 rounded-md'>
      <img className='' src={post?.image} alt={post?.title} />
      <div className='p-4'>
        <Link to={`/posts/${post?.id}`}>
          <h2 className='mb-2 text-2xl font-semibold hover:text-[#bfff00]'>
            {post?.title}
          </h2>
          <p className='text-xl mb-4 '>
            <span className='text-purple-400 '>@{post?.createdBy}</span>
          </p>
        </Link>
        <div className='mb-3 text-red-500 '>
            {post?.tagsArray?.map((tag) => (
              <p key={tag} className='mr-2'>
                <span className='font-bold'>#</span>
                {tag}
              </p>
            ))}
          </div>
      </div>
    </div>
  );
};

export default PostDetail;
