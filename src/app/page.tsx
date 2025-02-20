import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const projects = [
  {
    title: "Dashboard de Vendas",
    description: "Análise de vendas por região e produto.",
    link: "https://app.powerbi.com/view?example1",
  },
  {
    title: "Análise de Clientes",
    description: "Insights sobre o comportamento dos clientes.",
    link: "https://app.powerbi.com/view?example2",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white p-8 pt-0">
      {/* Cabeçalho */}
      <header className="header">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3 bg-black bg-opacity-80 p-6 rounded-lg shadow-lg w-[95%] max-w-6xl">
          <h1 className="text-3xl font-bold">Felipe Ferreira de Sousa</h1>
          <p className="text-gray-300">
            Analista de Business Intelligence | Power BI | SQL | Python | ETL |
            Machine Learning
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/felipefsousa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 text-xl"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/FelipeNer0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 text-xl"
              title="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 mt-20">
        {/* Coluna Esquerda */}
        <div className="space-y-6">
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Sobre</h2>
            <p className="mb-4">
              Transformar dados em insights estratégicos é minha paixão! 💻📊
            </p>
            <p className="mb-4">
              Atualmente, estou me especializando em Análise de Dados e Machine
              Learning, com o objetivo de aprimorar minhas habilidades e
              impactar a tomada de decisões com base em dados sólidos e
              estratégias eficazes. 🚀
            </p>
            
            <p>
              Estou sempre em busca de novos desafios para aplicar meu
              conhecimento e continuar a evoluir na área!
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <p className="mb-4">
              Habilidades e Tecnologias:
              <br />
              ✔ Power BI
              <br />
              ✔ SQL
              <br />
              ✔ Python
              <br />
              ✔ Machine Learning
              <br />✔ Node.js & Flutter
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Experiência</h2>
            <p></p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Formação</h2>
            <p></p>
          </div>
        </div>

        {/* Coluna Direita */}
        <div className="space-y-6">
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Certificação</h2>
            <p></p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Projetos</h2>
            <div className="grid grid-cols-1 gap-4 mt-4">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline block mt-2"
                  >
                    Ver Dashboard
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
