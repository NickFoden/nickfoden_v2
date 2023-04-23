import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Posts } from "../src/content";
import DisplayPreview from "../src/components/DisplayPreview";

const Home = () => {
  const data = Posts;
  return (
    <>
      <main>
        <div className="posts_container">
          {data.map((content, idx) => (
            <DisplayPreview content={content} idx={idx} key={content.slug} />
          ))}
        </div>
      </main>
      <style jsx>{`
        .posts_container {
          display: flex;
          margin: 8px auto;
          flex-direction: column;
        }

        @media only screen and (min-width: 321px) {
          .posts_container {
            margin: 8px;
            flex-direction: row;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
