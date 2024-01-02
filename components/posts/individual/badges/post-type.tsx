import Link from "next/link";

type Props = {
  type: string;
};

export default function PostTypeBadge({ type }: Props) {
  return (
    <Link
      href={`/blog?postType=${type}`}
      className="badge badge-accent rounded-md text-pretty text-xs m-1 text-base-100 hover:scale-105 cursor-pointer"
    >
      {type}
    </Link>
  );
}
