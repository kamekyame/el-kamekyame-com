import { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("https://kamekyame.com");
  }, [router]);
  return <></>;
};
export default Home;
