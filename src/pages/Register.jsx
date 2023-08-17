import Button from "../components/Button";
import Input from "../components/Input";
import { useState, useEffect } from "react";
import { useAuthentication } from "../hooks/useAuthentication";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { createUser, error: authError, loading } = useAuthentication();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const newUser = {
      name,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais!");
      
      return;
    }

    const res = await createUser(newUser);

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  useEffect(() => {
    if (authError) setError(authError);
  }, [authError]);

  return (
    <div className="flex  flex-col container items-center justify-start gap-4  ">
      <h1 className="mt-20 mb-5 text-5xl font-bold text-center">
        Cadastre-se para postar!
      </h1>
      <p className="mb-5 text-xl text-center italic text-zinc-500">
        Crie seu usuário e compartilhe sua histórias!
      </p>

      <form
        className="flex flex-col items-center justify-start gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-start ">
          <label className="pb-1">Nome</label>
          <Input
            placeholder={"Digite seu Nome"}
            value={name}
            setValue={(e) => setName(e.target.value)}
          />
        </div>
        
        <div className="flex flex-col items-start ">
          <label className="pb-1">Email</label>
          <Input
            placeholder={"Digite seu email"}
            value={email}
            setValue={(e) => setEmail(e.target.value)}
            type={"text"}
          />
        </div>
        <div className="flex flex-col items-start ">
          <label className="pb-1">Senha</label>
          <Input
            placeholder={"Digite uma senha"}
            value={password}
            setValue={(e) => setPassword(e.target.value)}
            type={"password"}
          />
        </div>
        <div className="flex flex-col items-start ">
          <label className="pb-1">Confime a senha</label>
          <Input
            placeholder={"Confirme sua senha"}
            value={confirmPassword}
            setValue={(e) => setConfirmPassword(e.target.value)}
            type={"password"}
          />
        </div>
        <div className="mt-10">
        {!loading &&<Button> Cadastrar </Button>}
        {loading &&<Button> Aguarde... </Button>}
        </div>
      </form>
      <div>
        {error && <p className="text-xl font-bold text-red-500"> { error}</p>
        }
       
      </div>
    </div>
  );
};

export default Register;
