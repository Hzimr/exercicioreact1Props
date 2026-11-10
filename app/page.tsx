import Card from "./componentes/Card";
import MainContent from "./componentes/MainContent";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-sky-700">
      <MainContent>
        <Card
          conteudo="Cartão 1"
          titulo="Card 1 o Melhor"
          cor="bg-green-100"
          tamanho="text-lg"
          key={1}
        ></Card>
        <Card
          conteudo="Cartão 2"
          titulo="Card 2 o quase Melhor"
          cor="bg-purple-100"
          tamanho="text-base"
          key={2}
        ></Card>
        <Card
          conteudo="Cartão 3"
          titulo="Card 3 dá pro gasto"
          cor="bg-yellow-100"
          tamanho="text-sm"
          key={3}
        ></Card>
      </MainContent>
    </div>
  );
}
