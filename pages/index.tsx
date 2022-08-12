import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "https://kamekyame.com",
      permanent: true,
    },
  };
};

const Home = () => <></>;
export default Home;
