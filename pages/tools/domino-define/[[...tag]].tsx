import type { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const paramTag = Array.isArray(ctx.params?.tag)
    ? ctx.params?.tag[0]
    : ctx.params?.tag;

  return {
    redirect: {
      destination:
        "https://kamekyame.com/el/domino-define" +
        (paramTag ? "/" + paramTag : ""),
      permanent: true,
    },
  };
};

const Home = () => <></>;
export default Home;
