import React from "react";
import Image from "next/image";

import { grpahCMSImageLoader } from "../util";

const Author = ({ author }) => (
  <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
    <div className="absolute left-0 right-0 -top-14">
      <Image
        as="image"
        unoptimized
        loader={grpahCMSImageLoader}
        alt={author.name}
        height="100"
        width="100"
        className="align-middle rounded-full"
        src={author.photo.url}
        placeholder="blur"
        blurDataURL={author.photo.url}
        sizes="(max-width: 768px) 30vw, (max-width: 1200px) 30, 28vh"
      />
    </div>
    <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
    <p className="text-white text-ls">{author.bio}</p>
  </div>
);

export default Author;

