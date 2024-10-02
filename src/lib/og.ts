import { Metadata } from "next/types";

export const ogImageUrl = (title: string, eyebrow?: string) => {
  const safeTitle = encodeURIComponent(title);
  const safeEyebrow = eyebrow ? encodeURIComponent(eyebrow) : "";

  return `https://futurodigital.wondercraft.co/api/og?title=${safeTitle}&eyebrow=${safeEyebrow}`;
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
          url: ogImageUrl(ogImageTitle, ogImageEyebrow),
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
      images: [ogImageUrl(ogImageTitle, ogImageEyebrow)],
    },
  };
};
