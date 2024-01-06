import type PostType from "@/interfaces/post";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "next-share";

type PropsSharingButton = {
  post: PostType;
  postURL: string;
};

const shareButtonWidth = 64;

const emailButton = ({ post, postURL }: PropsSharingButton) => (
  <EmailShareButton
    url={postURL}
    subject={post.title}
    body={`
¡Hola! 👋
Te comparto este post que me pareció interesante. 🤓

👉 ${post.description}

Espero que te guste. 😁

`}
  >
    <EmailIcon size={shareButtonWidth} round />
  </EmailShareButton>
);

const facebookButton = ({ post, postURL }: PropsSharingButton) => (
  <FacebookShareButton
    url={"https://github.com/next-share"}
    quote={"next-share is a social share buttons for your next React apps."}
    hashtag={"#nextshare"}
  >
    <FacebookIcon size={shareButtonWidth} round />
  </FacebookShareButton>
);

const messengerButton = ({ post, postURL }: PropsSharingButton) => (
  <FacebookMessengerShareButton
    url={"https://github.com/next-share"}
    appId={""}
  >
    <FacebookMessengerIcon size={shareButtonWidth} round />
  </FacebookMessengerShareButton>
);

const linkedinButton = ({ post, postURL }: PropsSharingButton) => (
  <LinkedinShareButton url={"https://github.com/next-share"}>
    <LinkedinIcon size={shareButtonWidth} round />
  </LinkedinShareButton>
);

const redditButton = ({ post, postURL }: PropsSharingButton) => (
  <RedditShareButton
    url={"https://github.com/next-share"}
    title={"next-share is a social share buttons for your next React apps."}
  >
    <RedditIcon size={shareButtonWidth} round />
  </RedditShareButton>
);

const telegramButton = ({ post, postURL }: PropsSharingButton) => (
  <TelegramShareButton
    url={"https://github.com/next-share"}
    title={"next-share is a social share buttons for your next React apps."}
  >
    <TelegramIcon size={shareButtonWidth} round />
  </TelegramShareButton>
);

const twitterButton = ({ post, postURL }: PropsSharingButton) => (
  <TwitterShareButton
    url={"https://github.com/next-share"}
    title={"next-share is a social share buttons for your next React apps."}
  >
    <TwitterIcon size={shareButtonWidth} round />
  </TwitterShareButton>
);

const whatsappButton = ({ post, postURL }: PropsSharingButton) => (
  <WhatsappShareButton
    url={"https://github.com/next-share"}
    title={"next-share is a social share buttons for your next React apps."}
    separator=":: "
  >
    <WhatsappIcon size={shareButtonWidth} round />
  </WhatsappShareButton>
);

const shareButtons = [
  emailButton,
  facebookButton,
  messengerButton,
  linkedinButton,
  redditButton,
  telegramButton,
  twitterButton,
  whatsappButton,
];

type Props = {
  post: PostType;
};

export default function Share({ post }: Props) {
  const postURL: string = `https://helcsnewsxd.vercel.app/blog/posts/${encodeURIComponent(
    post.slug
  )}`;

  return (
    <>
      <label htmlFor={`modal_share_${post.slug}`} className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-6 17c1.513-6.587 7-7.778 7-7.778v-2.222l5 4.425-5 4.464v-2.223c0 .001-3.78-.114-7 3.334z" />
        </svg>
      </label>

      <input
        type="checkbox"
        id={`modal_share_${post.slug}`}
        className="modal-toggle"
      />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost right-2 top-2 fixed"
              onClick={() => {
                const checkbox = document.getElementById(
                  `modal_share_${post.slug}`
                );
                if (checkbox) {
                  checkbox.click();
                }
              }}
            >
              ✕
            </button>
          </form>

          <h3 className="text-lg font-bold">Compartir</h3>
          <div className="mt-5">
            <div className="grid grid-cols-4 gap-2 items-center">
              {shareButtons.map((button, index) => (
                <div key={index} className="hover:scale-105">
                  {button({ post, postURL })}
                </div>
              ))}
            </div>

            <button
              className="btn btn-primary mt-5 rounded-3xl hover:scale-105"
              onClick={() => {
                navigator.clipboard.writeText(postURL);
              }}
            >
              Copiar enlace
            </button>
          </div>
        </div>

        <label className="modal-backdrop" htmlFor={`modal_share_${post.slug}`}>
          Cerrar
        </label>
      </div>
    </>
  );
}
