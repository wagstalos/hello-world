"use client";
import { useEffect, useState } from "react";
import { createSanityClient } from "../../sanity/sanity"; // Caminho para o arquivo sanity.js

export default function Projetos() {
  const [projetos, setProjetos] = useState([]);
  const sanityClient = createSanityClient();

  useEffect(() => {
    sanityClient
      .fetch('*[_type == "project"]')
      .then((data) => setProjetos(data));
  }, [sanityClient]);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Meus Projetos
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetos.map((projeto) => (
            <div
              key={projeto._id}
              className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={projeto.img}
                alt={projeto.title}
                className="w-full h-52 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {projeto.title}
              </h2>
              <p className="text-gray-600 mb-2">{projeto.body}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md">
                  {projeto.categoria}
                </span>
                <span className="px-3 py-1 text-sm bg-green-500 text-white rounded-md">
                  {projeto.tag}
                </span>
              </div>
              <a
                href={projeto.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-white bg-blue-600 hover:bg-blue-700 transition-colors py-2 rounded-lg font-medium"
              >
                Acessar Projeto
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
