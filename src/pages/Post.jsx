import { useParams } from "react-router-dom";
import { useFetchDocument } from "../hooks/useFetchDocument";
import Loader from "../components/Loader";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);
  return (
    <div className='flex  flex-col container items-center justify-start gap-4  min-h-screen h-auto'>
      <h1 className='text-5xl text-center mt-16'>Posts</h1>
      {loading && (
        <>
          <Loader />
        </>
      )}

      {post && (
        <div>
          <h1 className='text-3xl text-center my-4 font-bold'>
            <span className="text-[#bfff00] text-4xl  font-bolder">{post?.title[0].toUpperCase()}</span>
            {post.title.slice(1, -1)}
          </h1>
          <img
            src={post.image}
            alt={post.image}
            className='min-w-[300px] max-w-[95%] h-auto mb-2 px-5'
          />
          <p className=' text-2xl text-center italic'> {post.body} </p>
          <h3 className='my-2 text-xl font-bold'>Tags:</h3>

          <div className='flex gap-4'>
            {post?.tags?.map((tag) => (
              <div key={tag}>
                {" "}
                <span className='text-[#bfff00]'>#</span>
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
