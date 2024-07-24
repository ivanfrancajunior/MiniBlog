import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../context/AuthContetxt";
import { useUpdateDocument } from "../hooks/useUpdateDocuments";
import { useFetchDocument } from "../hooks/useFetchDocument";
import Input from "../components/Input";

const EditPost = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
      setImage(post.image);

      const textTags = post.tagsArray.join(", ");

      setTags(textTags);
    }
  }, [post]);

  const { user } = useAuthValue();
  const { updateDocument, response } = useUpdateDocument("posts");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormError("");

    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ter uma URL.");
    }

    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }

    if (formError) return;
    const data = {
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    };
    updateDocument(id, data);

    navigate("/dashboard");
  };

  return (
    <div className='flex  flex-col container items-center justify-start gap-4  min-h-screen h-auto'>
      {post && (
        <>
          <h2 className='text-2xl mt-7'>
            <span className='font-bold'>Editando Post:</span> {post.title}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col items-center justify-start mt-5'>
              <label className='block mb-4'>
                <div className='flex items-center justify-start gap-5'>
                  <span className="font-bold">Título:</span>
                  <Input
                    type='text'
                    name='title'
                    required
                    placeholder='Insira um título'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className='w-full p-2 border rounded text-zinc-800'
                  />
                </div>
              </label>

              <label className='block mb-4'>
                <div className='flex items-center justify-start gap-5'>
                <span className="font-bold">URL da imagem</span>
                  <Input
                    type='text'
                    name='image'
                    required
                    placeholder='Insira uma imagem para seu post'
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                    className='w-full p-2 border rounded text-zinc-800'
                  />
                </div>
              </label>
            </div>
            <p className='mb-2 font-bold'>Preview da imagem atual:</p>
            <img
              className='w-full max-w-full mb-4'
              src={post.image}
              alt={post.title}
            />

            <label className='block mb-4'>
              <span>Conteúdo</span>
              <textarea
                name='body'
                required
                placeholder='Insira o conteúdo do post'
                onChange={(e) => setBody(e.target.value)}
                value={body}
                className='w-full p-2 border rounded text-zinc-800'
              />
            </label>

            <label className='block mb-4'>
              <span>Tags</span>
              <Input
                type='text'
                name='tags'
                required
                placeholder='Insira suas tags separadas por vírgula'
                onChange={(e) => setTags(e.target.value)}
                value={tags}
                className='w-full p-2 border rounded text-zinc-800'
              />
            </label>

            {!response.loading ? (
              <button className='p-2 bg-yellow-500 rounded  text-center'>
                Editar
              </button>
            ) : (
              <button className='btn' disabled>
                Editando...
              </button>
            )}
            {(response.error || formError) && (
              <p className='error'>{response.error || formError}</p>
            )}
          </form>
        </>
      )}
    </div>
  );
};

export default EditPost;
