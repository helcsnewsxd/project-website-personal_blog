import { useState, useEffect } from "react";

type Props = {
  postName: string;
};

export default function Heart({ postName }: Props) {
  // Get from cookies if the user has liked the post
  // The cookie is an array of post names
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [showHeart, setShowHeart] = useState(false);

  useEffect(() => {
    const likedPosts = localStorage.getItem("likedPosts");
    if (likedPosts) {
      const parsedLikedPosts = JSON.parse(likedPosts);
      if (parsedLikedPosts.includes(postName)) {
        setIsLiked(true);
      }
    }

    // Quantity of likes
    fetch(`/api/likes/${postName}`)
      .then((res) => res.json())
      .then((data) => {
        setLikes(data.likes);
      });

    // Show heart count
    setShowHeart(true);
  }, [postName]);

  const toggleLike = () => {
    const newIsLiked = !isLiked;
    setIsLiked(newIsLiked);

    const likedPosts = localStorage.getItem("likedPosts");
    if (likedPosts) {
      const parsedLikedPosts = JSON.parse(likedPosts);
      if (parsedLikedPosts.includes(postName)) {
        const newLikedPosts = parsedLikedPosts.filter(
          (post: string) => post !== postName
        );
        localStorage.setItem("likedPosts", JSON.stringify(newLikedPosts));
      } else {
        localStorage.setItem(
          "likedPosts",
          JSON.stringify([...parsedLikedPosts, postName])
        );
      }
    } else {
      localStorage.setItem("likedPosts", JSON.stringify([postName]));
    }

    // Update the quantity of likes
    if (newIsLiked) {
      fetch(`/api/likes/${postName}`, {
        method: "POST",
        body: JSON.stringify({ likes: likes + 1 }),
      });
      setLikes(likes + 1);
    } else {
      fetch(`/api/likes/${postName}`, {
        method: "POST",
        body: JSON.stringify({ likes: likes - 1 }),
      });
      setLikes(likes - 1);
    }
  };

  const heartIcon = isLiked ? (
    <svg
      fill="currentColor"
      height="24"
      role="img"
      viewBox="0 0 48 48"
      width="24"
      className="hover:scale-105 cursor-pointer animatecss animatecss-rubberBand"
      onClick={toggleLike}
    >
      <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
    </svg>
  ) : (
    <svg
      fill="currentColor"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
      className="hover:scale-105 cursor-pointer"
      onClick={toggleLike}
    >
      <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
    </svg>
  );

  return (
    <div className="flex flex-row items-center">
      {heartIcon}
      {showHeart && <p className="ml-1 text-sm">{likes}</p>}
    </div>
  );
}
