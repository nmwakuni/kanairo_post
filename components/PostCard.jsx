import Image from "next/image";
import moment from "moment";
import Link from "next/link";

import { grpahCMSImageLoader } from "../util";

const PostCard = ({ post }) => (
  <div className=" bg-white pb-0 mb-0 rounded-b-lg shadow-2xl">
    <div className="relative overflow-hidden pt-2 shadow-md h-60 max-h-60">
      <Link href={`/post/${post.slug}`}>
        <img
          as="image"
          placeholder="blur"
          blurDataURL={post.featuredImage.url}
          src={post.featuredImage.url}
          alt=""
          className="object-left w-full object-cover"
        />
      </Link>
      <div className="text-white px-2 absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rouded drop-shadow-lg text-left cursor-pointer hover:text-pink-100 text-xl xl:text-md font-semibold">
        <h1>
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        <div className="block lg:flex text-left pl-1 w-full">
          <div className="flex justify-left mb-2 lg:mb-0  lg:w-auto mr-4">
            <Image
              unoptimized
              loader={grpahCMSImageLoader}
              alt={post.author.name}
              height="30"
              width="30"
              className="align-middle rounded-full"
              src={post.author.photo.url}
            />
            <p className="inline align-middle text-white ml-2 font-bold text-sm">
              {post.author.name}
            </p>
          </div>
          <div className="text-sm text-left items-end lg:ml-20 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="align-middle">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p className="line-clamp-4 text-left xl:text-sm text-md mt-5 text-black font-normal px-2 mb-2">
        {post.excerpt}
      </p>
    </div>
    <div className="text-left pl-2">
      <Link href={`/post/${post.slug}`}>
        <button className=" inline-block xl:text-sm text-white text-md font-bold bg-gray-500 rounded-lg max-w-max px-2 py-1 lg:px-3 lg:py-2 mb-3 cursor-pointer">
          read more
        </button>
      </Link>
    </div>
  </div>
);

export default PostCard;

//hover:scale-105 transition-transform duration-200 ease-out

