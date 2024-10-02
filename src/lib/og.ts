import { Metadata } from "next/types";

export const imageUrl = (title: string, eyebrow?: string) => {
  return `https://futurodigital.wondercraft.co/api/og?title=${title}&eyebrow=${eyebrow}`;
};

type TogObjectFactory = {
  title: string;
  description: string;
  ogImageTitle: string;
  ogImageEyebrow?: string;
};
export const ogObjectFactory = ({
  title,
  description,
  ogImageTitle,
  ogImageEyebrow = "",
}: TogObjectFactory): Metadata => {
  return {
    title,
    description: description,

    openGraph: {
      title,
      description,
      images: [
        {
          url: imageUrl(ogImageTitle, ogImageEyebrow),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl(ogImageTitle, ogImageEyebrow)],
    },
  };
};
