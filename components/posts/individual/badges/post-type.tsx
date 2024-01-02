type Props = {
  type: string;
};

export default function PostTypeBadge({ type }: Props) {
  return (
    <span className="badge badge-accent rounded-md text-pretty text-xs m-1 text-base-100">
      {type}
    </span>
  );
}
