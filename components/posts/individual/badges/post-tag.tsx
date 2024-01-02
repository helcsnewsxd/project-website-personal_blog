type Props = {
  tag: string;
  type: Boolean;
};

export default function PostTagBadge({ tag, type }: Props) {
  return type ? (
    <span className="badge badge-outline badge-accent text-pretty text-xs m-1 w-auto h-auto">
      {tag}
    </span>
  ) : (
    <span className="badge badge-outline badge-accent text-pretty text-sm lg:text-base m-1 w-auto h-auto">
      {tag}
    </span>
  );
}
