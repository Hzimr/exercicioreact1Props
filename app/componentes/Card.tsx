import React from "react";

type FontSize = "text-sm" | "text-base" | "text-lg" | "text-xl" | "text-2xl";

interface CardProps {
  titulo: string;
  conteudo: string;
  cor?: string;
  tamanho?: FontSize; // Recebe diretamente a classe do Tailwind
}

const Card = ({
  titulo,
  conteudo,
  cor = "",
  tamanho = "text-base",
}: CardProps) => {
  return (
    <div
      className={`flex gap-3 justify-center items-center flex-col p-4 rounded shadow ${cor} h-32`}
    >
      <h2 className={`font-bold ${tamanho} text-amber-950`}>{titulo}</h2>
      <p className="text-gray-600 text-md">{conteudo}</p>
    </div>
  );
};

export default Card;
