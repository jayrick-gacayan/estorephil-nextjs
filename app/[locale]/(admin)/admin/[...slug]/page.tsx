import { DashbaordContent } from "./_dashboard";

export default function Page({ params }: { params: { slug: string[] } }) {
  return (
    <div className="p-4">
      <DashbaordContent />
    </div>
  );
}