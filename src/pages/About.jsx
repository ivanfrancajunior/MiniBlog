const About = () => {
  return (
    <div className="flex  flex-col container items-center justify-start gap-4  min-h-screen h-auto">
      <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold ">Sobre o Projeto</h1>
        <p className="mt-4 text-gray-300">
          Bem-vindo à página de informações sobre o projeto desenvolvido durante o curso de React!
        </p>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-orange-800">Descrição do Projeto</h2>
          <p className="mt-2 text-gray-300">
            Este projeto é um blog interativo onde os usuários podem compartilhar fotos e publicações. O sistema
            permite que os usuários façam login, criem novas publicações, visualizem suas próprias publicações, vejam
            as publicações de outros usuários e realizem operações de CRUD (criar, ler, atualizar e deletar) em suas
            próprias publicações.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-orange-800">Tecnologias Utilizadas</h2>
          <p className="mt-2 text-gray-300">
            Este projeto foi construído com as seguintes tecnologias: React, React Router Dom, Firebase e Tailwind CSS.
          </p>
        </div>

        <div className="mt-12">
        <h1 className="text-3xl font-extrabold mb-4">Sobre o Objetivo</h1>
          <h2 className="text-xl font-semibold text-orange-800">Objetivo</h2>

          <p className="mt-2 text-gray-300">
            O objetivo principal deste projeto foi explorar os conceitos fundamentais do React, incluindo o uso do React
            Hooks, o gerenciamento de estado com o uso do useReducer, a realização de chamadas HTTP com React e a
            navegação entre páginas utilizando o React Router Dom.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-orange-800">Estrutura do Projeto</h2>
          <p className="mt-2 text-gray-300">
            O projeto foi estruturado de forma a focar no desenvolvimento do frontend utilizando as tecnologias React,
            React Router Dom e Tailwind CSS. A abstração do backend permitiu um foco mais intenso nos conceitos centrais
            do React.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
