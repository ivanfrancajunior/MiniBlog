import { useQuery } from "../hooks/useQuery";
import PostDetails from "../components/PostDetails";
import { Link } from "react-router-dom";
import { useFetchDocuments } from "../hooks/useFetchDocuments";
const Search = () => {
  const query = useQuery();
  const search = query.get("q");
  const { documents: posts } = useFetchDocuments("posts", search);
  return (
    <div className="flex  flex-col container items-center justify-start gap-4  min-h-screen h-auto">
      <h1 className="my-8 text-xl ">
        BUSCA POR: <span className="font-bold"> {search}</span>{" "}
      </h1>

      <div>
        {posts && posts.length === 0 && (
          <>
            <p>Nenuma postagem a partir da sua busca ... </p>
            <Link to="/">Voltar</Link>
          </>
        )}
        {posts && posts.map((post) => <PostDetails key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Search;
