export function AdminPageHeader({ text }: { text: string }) {
  return (
    <div className="p-4">
      <h1 className="text-4xl text-zinc-300">{text}</h1>
    </div>
  );
}