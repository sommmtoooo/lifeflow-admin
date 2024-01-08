interface RequestCardItemProps {
  name: string;
  value: string | boolean | number;
}

export default function RequestCardItem({ name, value }: RequestCardItemProps) {
  return (
    <div>
      <span className="font-bold mr-2">{name}:</span>
      <span>{value}</span>
    </div>
  );
}
