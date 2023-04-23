interface ContentHeading {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
}

interface ContentImage {
  alt: string;
  height?: number;
  src: string;
  type: "image";
}

interface ContentLink {
  href: string;
  text: string;
  type: "a";
}

interface ContentParagraph {
  type: "p";
  text: string;
}

export type ContentItem =
  | ContentHeading
  | ContentImage
  | ContentLink
  | ContentParagraph;

export interface Content {
  data: ContentItem[];
  date: string;
  slug: string;
  status: "draft" | "published";
  thumbNail: string;
  title: string;
  tags: string[];
}
