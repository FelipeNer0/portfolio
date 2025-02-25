import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export default function MarchineLearningIFCE() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white p-3 pt-0">
      {/* Cabeçalho */}
      <header
        className="relative w-full max-w-7xl mx-auto h-72 bg-cover bg-center rounded-b-xl shadow-lg"
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

      {/* Container principal */}
      <main className="w-4/5 max-w-7xl mx-auto p-12 mt-12">
        <div className="bg-gray-900  p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">
            Análise de classificadores para predição de evasão do Instituto
            Federal do Ceará campus Horizonte
          </h1>
          <p className="mb-4 text-lg">
            Este projeto teve como objetivo analisar e comparar diferentes
            algoritmos de classificação para prever a evasão de estudantes no
            Instituto Federal do Ceará (IFCE). A evasão escolar é um problema
            crítico no ensino superior, impactando diretamente o desempenho
            acadêmico e a alocação de recursos institucionais.
          </p>
          <p className="mb-4 text-lg">
            Utilizando técnicas de Machine Learning, avaliamos modelos de
            aprendizado supervisionado, como Árvores de Decisão, Random Forest e
            Regressão Logística, entre outros. Os modelos foram treinados e
            testados com um conjunto de dados reais, considerando variáveis
            socioeconômicas e acadêmicas dos alunos.
          </p>
          <p className="mb-4 text-lg">
            Os resultados obtidos possibilitaram identificar padrões e fatores
            que influenciam a evasão, auxiliando na criação de estratégias para
            mitigar esse problema e aprimorar a permanência estudantil.
          </p>
          <h2 className="text-2xl font-bold mb-4 mt-8">Metodologia</h2>
          <p className="mb-4 text-lg">
            A metodologia selecionada para esse estudo foi a CRoss-Industry
            Standard Process for Educational Data Mining (CRISP-EDM), adaptada
            para o contexto educacional. O processo foi dividido em seis etapas,
            conforme imagem abaixo (RAMOS et al., 2020).
          </p>
          <figure className="w-2/5 h-auto mx-auto rounded-lg">
            <Image
              src="/CRISP-EDM.png"
              alt="CRISP-EDM"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <figcaption className="text-center text-gray-400 mt-2">
              Fonte: Jorge Ramos, Rodrigo Rodrigues, João Silva e Pamella
              Oliveira (2020)
            </figcaption>
          </figure>
          <p className="mb-4 text-lg">
            A etapa 1 consistiu na realização do levantamento das problemáticas
            educacionais da instituição para as quais buscamos soluções por meio
            da mineração (Ramos et al., 2020). Na etapa 2 realizamos a análise
            inicial e compreensão dos dados para selecionar aqueles que seriam
            utilizados na solução do problema educacional. Na etapa 3, efetuamos
            o pré-processamento dos dados, o que envolveu a junção das bases de
            dados, extração, transformação e limpeza das variáveis para a
            construção da tabela de análise (Ramos et al., 2020). Na etapa 4,
            escolhemos as técnicas de modelagem de dados, utilizando algoritmos
            de aprendizagem de máquina. A etapa 5 consistiu na avaliação dos
            modelos preditivos desenvolvidos, comparando-os com outros modelos
            criados. Por fim, na etapa 6, aplicamos a solução em produção, por
            meio de plugins ou dashboards para auxiliar na tomada de decisão dos
            responsáveis institucionais.
          </p>
          <p className="mb-4 text-lg">
            Coletamos dados da plataforma IFCE em Números, incluindo informações
            demográficas e acadêmicas. O objetivo foi compreender o contexto e
            identificar fatores relacionados à evasão. Os dados coletados
            passaram por um processo de pré-processamento, que incluiu:
          </p>
          <ul className="mb-4 list-disc pl-8 text-lg">
            <li>
              Limpeza de Dados: Remoção de entradas duplicadas, tratamento de
              valores ausentes e correção de inconsistências.
            </li>
            <li>
              Transformação de Dados: Normalização e padronização das variáveis,
              além da codificação de variáveis categóricas.
            </li>
            <li>
              Divisão dos Dados: Separação dos dados em conjuntos de treinamento
              e teste, garantindo que o modelo fosse avaliado de forma justa.
            </li>
          </ul>
          <p className="mb-4 text-lg">
            Aplicamos algoritmos de aprendizado de máquina, como Support Vector
            Machine, Árvore de Decisão, Random Forest e K-vizinhos mais
            próximos, para desenvolver modelos preditivos. Cada modelo foi
            treinado com um conjunto de dados e validado com um conjunto
            separado para avaliar seu desempenho. Após a modelagem, os modelos
            foram avaliados com base nas seguintes métricas:
          </p>
          <ul className="mb-4 list-disc pl-8 text-lg">
            <li>
              Acurácia: Proporção de previsões corretas em relação ao total de
              previsões.
            </li>
            <li>
              Precisão: Proporção de verdadeiros positivos em relação ao total
              de positivos previstos.
            </li>
            <li>
              Recall: Proporção de verdadeiros positivos em relação ao total de
              positivos reais.
            </li>
            <li>
              F1-Score: Média harmônica entre precisão e recall, útil para
              avaliar a performance em conjuntos de dados desbalanceados.
            </li>
            <li>
              Especificidade: Proporção de verdadeiros negativos em relação ao
              total de negativos reais.
            </li>
            <li>
              AUC-ROC: Área sob a curva ROC, que mede a habilidade do modelo em
              distinguir entre as classes positivas e negativas.
            </li>
          </ul>
          <p className="mb-4 text-lg">
            Comparando os resultados obtidos, conseguimos determinar qual modelo
            apresentou o melhor desempenho na predição da evasão.
          </p>
          <h2 className="text-2xl font-bold mb-4 mt-8">Resultados</h2>
          <p className="mb-4 text-lg">
            Como primeiros resultados, foram gerados gráficos e tabelas baseados
            nas frequências de valores de cada variável.
          </p>
          <figure className="w-3/5 h-auto mx-auto rounded-lg">
            <Image
              src="/graficoPizzaSituacaoMatricula.png"
              alt="Quantidade de Situação matricula"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <figcaption className="text-center text-gray-400 mt-2">
              Fonte: Autores, (2024).
            </figcaption>
          </figure>
          <p className="mb-4 text-lg">
            O gráfico mostra a distribuição das situações de matrícula dos
            alunos do Instituto Federal do Ceará, considerando os status
            Concluíd, Evadido, Matriculado e Trancado.
          </p>

          <ul className="mb-4 list-disc pl-8 text-lg">
            <li>
              Concluído (48.4%): A maior parte dos alunos, com 3072 alunos,
              completou o curso. Isso indica uma boa taxa de sucesso acadêmico,
              o que é positivo para a instituição.
            </li>

            <li>
              Evadido (41.0%): Com 2604 alunos, essa categoriareflete a evasão,
              um indicador crítico que destaca a quantidade de alunos que
              abandonaram o curso. Esse dado sugere que a evasão é um problema
              considerável, impactando quase metade dos estudantes.
            </li>
            <li>
              Matriculado (7.5%): Com 474 alunos ainda matriculados, essa
              categoria mostra a proporção de estudantes que continuam a
              frequentar as aulas, mas ainda não completaram o curso. Esse dado
              representa um número relativamente pequeno de alunos em relação
              aos Concluídos e Evadidos.
            </li>
            <li>
              Trancado (3.1%): Por fim, com 196 alunos em situação de matrícula
              trancada, essa categoria representa uma minoria, mas ainda assim,
              é importante monitorar, pois pode indicar estudantes
              temporariamente afastados por diversos motivos.
            </li>
          </ul>
          <p>
            Esse sresultados revelam que, embora haja uma boa taxa de conclusão,
            a evasão ainda é um grande desafio, com a maioria dos alunos não
            finalizando seus cursos.
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
