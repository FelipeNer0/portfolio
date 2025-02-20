import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import Link from "next/link";

export default function MarchineLearningIFCE() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white p-3 pt-0">
      {/* Header */}
      <header
        className="relative w-full max-w-6xl mx-auto h-72 bg-cover bg-center rounded-b-xl shadow-lg"
        style={{
          backgroundImage: "url('/fundo.jpg')",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3 bg-black bg-opacity-80 p-6 rounded-lg shadow-lg w-[95%] max-w-6xl">
          <h1 className="text-3xl font-bold">Felipe Ferreira de Sousa</h1>
          <p className="text-gray-300">
            Analista de Business Intelligence | Power BI | SQL | Python | ETL | Machine Learning
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

      {/* Container principal */}
      <main className="w-full max-w-6xl mx-auto p-8 mt-12">
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Machine Learning IFCE</h1>
          <p className="mb-4">
            Este projeto de Machine Learning foi desenvolvido no IFCE e tem como objetivo demonstrar a
            aplicação de técnicas avançadas de análise de dados para extrair insights relevantes.
          </p>
          <p className="mb-4">
          Este projeto de Machine Learning foi desenvolvido no IFCE e tem como objetivo demonstrar a
          aplicação de técnicas avançadas de análise de dados para extrair insights relevantes.
          </p>
          <p>
          Este projeto de Machine Learning foi desenvolvido no IFCE e tem como objetivo demonstrar a
          aplicação de técnicas avançadas de análise de dados para extrair insights relevantes.
          </p>
        </div>
        {/* Botão de voltar */}
        <Link
          href="/"
          className="text-blue-400 hover:underline inline-block mb-6"
        >
          &larr; Voltar para a página inicial
        </Link>
      </main>
    </div>
  );
}
