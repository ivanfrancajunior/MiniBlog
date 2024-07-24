import { Link } from "react-router-dom";
import { useAuthValue } from "../context/AuthContetxt";
import { useFetchDocuments } from "../hooks/useFetchDocuments";
import { useDeleteDocument } from "../hooks/useDeleteDocument";
import Loader from "../components/Loader";
import Button from "../components/Button";
const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;
  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

  const { deleteDocument } = useDeleteDocument("posts");

  if (loading) <Loader />;

  return (
    <div className='flex  flex-col container items-center justify-start gap-4  min-h-screen h-auto'>
      <h2 className='my-8 text-5xl'>Dashboard</h2>
      <p className='my-8 text-4xl font-bold'>Gerencie seus Posts </p>
      {posts && posts.length === 0 ? (
        <div className="flex flex-col gap-5 items-center justify-center">
          <p>Não foram encontrados posts 😕</p>
          <Button className='pb-1 '>
            <Link to='/posts/create'>Crie seu post!</Link>
          </Button>
        </div>
      ) : (
        <>
          {posts &&
            posts.map((post) => (
              <div
                key={post.id}
                className='flex items-center justify-between gap-4 p-4 border-y w-[320px]'
              >
                <p className='text-orange-500'>{post.title}</p>
                <div className='flex gap-4 items-center '>
                  <Link
                    to={`/posts/${post.id}`}
                    className='p-2 bg-blue-500 rounded  text-center'
                  >
                    {" "}
                    Ver{" "}
                  </Link>
                  <Link
                    to={`/posts/edit/${post.id}`}
                    className='p-2 bg-yellow-500 rounded  text-center'
                  >
                    {" "}
                    Editar{" "}
                  </Link>
                  <button
                    onClick={() => deleteDocument(post.id)}
                    className='p-2 bg-red-500 rounded text-center'
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Dashboard;
