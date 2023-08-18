import { useState, useEffect } from "react";

import Button from "../components/Button";
import Input from "../components/Input";
import { useAuthentication } from "../hooks/useAuthentication";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);
    console.log("res: ", res, 'user: ', user);
  };
  useEffect(() => {
    if (authError) setError(authError);
  }, [authError]);
  return (
    <div className="flex  flex-col container items-center justify-start gap-4  min-h-screen h-auto" >
      <h1 className="mt-20 mb-5 text-5xl font-bold text-center">Entrar</h1>
      <p className="mb-5 text-xl text-center italic text-zinc-500">Faça login</p>
      <form
        className="flex flex-col items-center justify-start gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-start ">
          <label className="pb-1">Email</label>
          <Input
            placeholder={"Digite seu Nome"}
            value={email}
            type={"email"}
            setValue={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start ">
          <label className="pb-1">Senha</label>
          <Input
            placeholder={"Digite seu Nome"}
            value={password}
            type={"password"}
            setValue={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-10 ">
          {!loading && <Button> Entrar </Button>}
          {loading && <Button> Aguarde... </Button>}
        </div>
      </form>
      {error && (
        <p className="text-xl font-bold text-red-500 text-center"> {error}</p>
      )}
    </div>
  );
};

export default Login;
