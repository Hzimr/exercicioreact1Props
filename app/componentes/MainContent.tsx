interface MainContentProps {
  children: React.ReactNode;
}
const MainContent = ({ children }: MainContentProps) => {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Veja nossos cartões de texto</h1>
      <div className="grid gap-4">{children}</div>
    </main>
  );
};

export default MainContent;
