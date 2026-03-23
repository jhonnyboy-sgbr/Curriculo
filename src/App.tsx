function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center p-6">
      
      {/* Container do currículo */}
      <div className="bg-white w-full max-w-4xl shadow-lg grid grid-cols-3 rounded-xl overflow-hidden">
        
        {/* SIDEBAR */}
        <div className="bg-gray-800 text-white p-6 flex flex-col items-center">
          <img
            src="/fotominha.jpeg" alt="eu"
            className="w-28 h-28 rounded-full mb-4"
          />
          
          <h1 className="text-xl font-bold">João Miguel Jardim de Almeida</h1>
          <p className="text-sm text-gray-300 mb-4">Desenvolvedor Front-end</p>

          <div className="w-full">
            <h6 className="font-semibold mb-2">Contato</h6>
            <p className="text-sm">joaomig172@gmail.com</p>
            <p className="text-sm">+55 31 98574-8375</p>
          </div>

          <div className="w-full mt-6">
            <h6 className="font-semibold mb-2">Skills</h6>
            <ul className="text-sm space-y-1">
              <li>React</li>
              <li>JavaScript</li>
              <li>Tailwind</li>
              <li>Html e CSS</li>
              <li>Git</li>
            </ul>
          </div>
        </div>

        {/* CONTEÚDO PRINCIPAL */}
        <div className="col-span-2 p-6 flex flex-col gap-6">
       
          {/* Experiência */}
          <section>
            <h6 className="text-lg font-bold mb-2">Formação</h6>
            <div className="flex flex-col gap-2">
              <div>
                <h3 className="font-semibold">Front-End JavaScript em React</h3>
                <p className="text-sm text-gray-500">2025 - 2026</p>
                <p className="text-sm">
                  Desenvolvimento de aplicações web com React.
                </p>
              </div>
               <div>
                <h3 className="font-semibold">Programação Web Html e CSS</h3>
                <p className="text-sm text-gray-500">2021</p>
                <p className="text-sm">
                  Criação de páginas web utilizando HTML e CSS.
                </p>
              </div>
                 
          {/* Sobre */}
          <section>
            <h2 className="text-lg font-bold mb-2">Sobre</h2>
            <p className="text-sm text-gray-600">
              Sou estudante de desenvolvimento web com foco em front-end, utilizando tecnologias como React e JavaScript. Tenho interesse em criar interfaces modernas e funcionais, e estou em busca da minha primeira oportunidade na área para desenvolver minhas habilidades e crescer profissionalmente.
            </p>
          </section>

            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default App;