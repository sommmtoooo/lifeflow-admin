interface DashboardCardProps {
  title: string;
  count: number;
}
export default function DashboardCard({ title, count }: DashboardCardProps) {
  return (
    <div
      className={`bg-neutral-700 mb-5 flex flex-col text-white rounded-md px-3 py-5`}
    >
      <h2 className="text-md">{title}</h2>
      <h3 className="text-2xl font-bold self-end">{count}</h3>
    </div>
  );
}
