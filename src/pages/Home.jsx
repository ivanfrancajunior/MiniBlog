import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useFetchDocuments } from "../hooks/useFetchDocuments";
import Input from "../components/Input";
import Button from "../components/Button";
import PostDetail from "../components/PostDetails";
const Home = () => {
  const [query, setQuery] = useState("");
  const { documents: posts, loading } = useFetchDocuments("posts");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  return (
    <div className='flex  flex-col container items-center justify-start gap-4  min-h-screen h-auto'>

      <form
        className=' mt-20 flex flex-col items-center justify-start gap-4'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col md:flex-row items-center gap-2'>
          <Input
            placeholder={"Pesquisar por tags"}
            value={query}
            type={"text"}
            setValue={(e) => setQuery(e.target.value)}
          />
          <Button className='pb-1'>Pesquisar</Button>
        </div>
      </form>
      <div className='container mx-auto flex flex-col items-center justify-start mt-20'>
        {loading && <p>Carregando...</p>}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
        {posts && posts.length === 0 && (
          <div>
            <p> Não foram encontrados posts 🙁</p>
            <Link to='/posts/create' className='btn'>
              Criar um post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
