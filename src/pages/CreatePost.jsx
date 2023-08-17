import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { useAuthValue } from "../context/AuthContetxt";
import { useInsertDocument } from "../hooks/useInsertDocument";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();
  const navigate = useNavigate();
  const { insertDocument, response } = useInsertDocument("posts");

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormError("");

    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ter uma URL.");
      return;
    }

    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }

    if (formError) return;

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    navigate("/");
  };

  return (
    <div className="flex  flex-col container items-center justify-start gap-4  h-auto">
      <h1 className="mt-20 mb-5 text-5xl font-bold text-center">Criar Post</h1>
      <p className="mb-5 text-xl text-center italic text-zinc-500">
        Escreva sobre o q quiser e compartilhe!
      </p>

      <form
        className="flex flex-col items-center justify-start gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-start ">
          <label className="pb-1">Título</label>
          <Input
            placeholder={"Insira um título"}
            value={title}
            type={"text"}
            setValue={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start ">
          <label className="pb-1">URL da imagem</label>
          <Input
            placeholder={"Insira uma imagem para seu post"}
            value={image}
            type={"text"}
            setValue={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start ">
          <label className="pb-1">Conteúdo</label>
          <Input
            placeholder={"Insira o conteúdo do post"}
            value={body}
            type={"text"}
            setValue={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start ">
          <label className="pb-1">Tags</label>
          <Input
            placeholder={"Insira suas tags separadas por vírgula"}
            value={tags}
            type={"text"}
            setValue={(e) => setTags(e.target.value)}
          />
        </div>
        <div className="mt-10 ">
          {!response.loading && <Button> Criar </Button>}
          {response.loading && <Button> Criando... </Button>}
        </div>
      </form>
      {formError && (
        <p className="text-xl font-bold text-red-500 text-center">
          {" "}
          {(response.error || formError) && (
            <p className="error">{response.error || formError}</p>
          )}
        </p>
      )}
    </div>
  );
};

export default CreatePost;
