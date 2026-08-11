interface PlaceholderPageProps {
  title: string;
  description: string;
}


function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <main className="page-card">
      <p className="eyebrow">Módulo</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </main>
  );
}


export default PlaceholderPage;