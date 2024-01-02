type Props = {
  tag: string;
};

export default function PostTagBadge({ tag }: Props) {
  return (
    <span className="badge badge-outline badge-accent text-pretty text-xs m-1 w-auto h-auto">
      {tag}
    </span>
  );
}
