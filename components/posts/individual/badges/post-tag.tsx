import Link from "next/link";

type Props = {
  tag: string;
  type: Boolean;
};

export default function PostTagBadge({ tag, type }: Props) {
  return (
    <Link
      href={`/blog?searchValue=${encodeURIComponent(tag)}`}
      className={`badge badge-outline badge-accent text-pretty m-1 w-auto h-auto hover:scale-105 ${
        type ? "text-xs" : "text-sm lg:text-base"
      }`}
    >
      {tag}
    </Link>
  );
}
