import React from "react";
import { FaLinkedin, FaGithub, FaStar, FaRegStar } from "react-icons/fa6";
import Link from "next/link";

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
  {
    title:
      "Análise de classificadores para predição de evasão do Instituto Federal do Ceará campus Horizonte",
    description:
      "Projeto explorou uso de algoritmos de Machine Learning para prever a evasão na instituição considerando dados sobre o perfil dos ingressantes, informações demográficas, socioeconômicas e outros indicadores relevantes. A análise não se limita a estatísticas descritivas, mas também incorpora técnicas de previsão e classificação, permitindo uma compreensão mais profunda dos padrões de evasão.",
    link: "/projects/marchineLearningIFCE",
  },
];

const experiences = [
  {
    company: "CTC",
    position: "Analista de Business Intelligence (BI)",
    period: "jan de 2025 - presente",
    description:
      "Trabalhando com Microsoft Power BI e Inteligência de Negócios.",
  },
  {
    company: "CTC",
    position: "Analista de Suporte",
    period: "dez de 2023 - jan de 2025",
    description:
      "Apoio a equipe de atendimento N1, gerenciar e analisar dados, melhorias no processo de atendimento.",
  },
  {
    company: "CTC",
    position: "Help Desk",
    period: "dez de 2021 - dez de 2023",
    description:
      "Apoio a equipe de atendimento N1, gerenciar e analisar dados, melhorias no processo de atendimento.",
  },
  {
    company: "Leal Advocacia",
    position: "Cobrador Interno",
    period: "nov de 2018 - nov de 2021",
    description:
      "Atendimento ao cliente, telemarketing, call center, pacote office.",
  },
  {
    company: "EBC - Empresa Brasil de Comunicação",
    position: "Jovem Aprendiz",
    period: "mai de 2016 - mai de 2018",
    description:
      "Auxiliar de escritório, protocolo e arquivamentos de documentos.",
  },
];

const education = [
  {
    institution: "IFB - Instituto Federal de Brasília",
    degree:
      "Curso Superior de Tecnologia (CST), Tecnologia em Sistemas para Internet - TSI",
    period: "set de 2022 - fev de 2025",
  },
  {
    institution: "Faculdade JK",
    degree:
      "Curso Superior de Tecnologia (CST), Análise e Desenvolvimento de Sistemas",
    period: "jan de 2018 - dez de 2020",
  },
];

const skills = [
  { name: "Python", level: 2 },
  { name: "SQL", level: 2 },
  { name: "Power BI", level: 3 },
  { name: "Machine Learning", level: 1 },
  { name: "ETL", level: 2 },
  { name: "HTML/CSS", level: 2 },
  { name: "JavaScript", level: 2 },
  { name: "React", level: 1 },
  { name: "Node.js", level: 2 },
  { name: "Flutter", level: 1 },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white p-3 pt-0">
      {/* Cabeçalho */}
      <header
        className="relative w-full max-w-6x1 mx-auto h-72 bg-cover bg-center rounded-b-xl shadow-lg"
        style={{
          backgroundImage: "url('/fundo.jpg')",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3 bg-black bg-opacity-80 p-6 rounded-lg shadow-lg w-[95%] max-w-9xl">
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
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/FelipeNer0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 text-xl"
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
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center mb-4">
                <span className="mr-2">{skill.name}</span>
                {[...Array(3)].map((_, idx) => {
                  const starClass =
                    idx < skill.level ? "text-yellow-400" : "text-gray-400";
                  return (
                    <span key={idx} className={`${starClass} text-xl`}>
                      {idx < skill.level ? <FaStar /> : <FaRegStar />}
                    </span>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Experiência</h2>
            {experiences.map((experience, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{experience.company}</h3>
                <p className="text-gray-400">{experience.position}</p>
                <p className="text-gray-500">{experience.period}</p>
                <p className="mt-2">{experience.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Formação</h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{edu.institution}</h3>
                <p className="text-gray-400">{edu.degree}</p>
                <p className="text-gray-500">{edu.period}</p>
              </div>
            ))}
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
                  <Link
                    href={project.link}
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline block mt-2"
                  >
                    Ver Projeto
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
