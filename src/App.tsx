function App() {
  return (
    <div className="min-h-screen bg-gray-300 flex justify-center items-center p-6">
      
      <div className="bg-white w-full max-w-5xl shadow-2xl grid grid-cols-3 rounded-2xl overflow-hidden">
        
        {/* SIDEBAR */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-700 text-white p-6 flex flex-col items-center">
          
          <img
            src="/fotominha.jpeg"
            alt="eu"
            className="w-28 h-28 rounded-full border-4 border-white mb-4 object-cover"
          />
          
          <h1 className="text-lg font-bold text-center">
            João Miguel Jardim de Almeida
          </h1>
          <p className="text-sm text-gray-300 mb-6">
            Desenvolvedor Front-end
          </p>

          {/* Contato */}
          <div className="w-full">
            <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-2">
              Contato
            </h2>
            <p className="text-sm">joaomig172@gmail.com</p>
            <p className="text-sm">+55 31 98574-8375</p>
          </div>

          {/* Skills */}
          <div className="w-full mt-6">
            <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-2">
              Skills
            </h2>
            <ul className="text-sm space-y-1">
              <li>React</li>
              <li>JavaScript</li>
              <li>Tailwind</li>
              <li>HTML e CSS</li>
              <li>Git</li>
            </ul>
          </div>
        </div>

        {/* CONTEÚDO */}
        <div className="col-span-2 p-8 flex flex-col gap-8">
          
          {/* SOBRE */}
          <section>
            <h2 className="text-xl font-bold border-b border-gray-200 pb-2 mb-2">
              Sobre
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Sou estudante de desenvolvimento web com foco em front-end, utilizando tecnologias como React e JavaScript. Tenho interesse em criar interfaces modernas e funcionais, e estou em busca da minha primeira oportunidade na área para desenvolver minhas habilidades e crescer profissionalmente.
            </p>
          </section>

          {/* FORMAÇÃO */}
          <section>
            <h2 className="text-xl font-bold border-b border-gray-200 pb-2 mb-2">
              Formação
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">
                  Front-End JavaScript em React
                </h3>
                <p className="text-sm text-gray-500">2025 - 2026</p>
                <p className="text-sm text-gray-600">
                  Desenvolvimento de aplicações web com React.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Programação Web HTML e CSS
                </h3>
                <p className="text-sm text-gray-500">2021</p>
                <p className="text-sm text-gray-600">
                  Criação de páginas web utilizando HTML e CSS.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default App;