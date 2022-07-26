import React, { useEffect } from "react";
import type { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";

import Title from "../../../src/title";
import Link from "../../../src/link";

const baseUrl = "https://api.github.com/repos/kamekyame/el-domino_define";

async function getReleases() {
  let url = `${baseUrl}/releases`;
  const res = await fetch(url);
  if (res.ok === false) return;
  const json = await res.json();
  return json;
}

export const getStaticPaths: GetStaticPaths<{ tag: string[] }> = async () => {
  return {
    paths: [{ params: { tag: [] } }],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<{}> = async (ctx) => {
  const paramTag = Array.isArray(ctx.params?.tag)
    ? ctx.params?.tag[0]
    : ctx.params?.tag;

  const releases = await getReleases();

  const release = paramTag
    ? releases.find((r: any) => r.tag_name === paramTag)
    : releases[0];

  // const release = await getRelease(ctx.params?.tag);
  if (release === undefined) {
    return { notFound: true };
  }
  return {
    props: {},
  };
};

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("https://www.kamekyame.com/el/domino-define");
    }, 5000);
  }, [router]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "90%",
        mx: "auto",
        mb: 5,
      }}
    >
      <Title name="Domino音源定義ファイル" />
      <Typography align="center" variant="h4" sx={{ m: 5 }}>
        Domino用音源定義ファイル
      </Typography>
      <Box sx={{ margin: "auto", textAlign: "center" }}>
        このページは
        <Link href="https://www.kamekyame.com/el/domino-define">
          kamekyame.com/el/domino-define
        </Link>
        に移行しました。
        <br />
        5秒後に自動的に移動します。
      </Box>
    </Box>
  );
};

export default Home;
