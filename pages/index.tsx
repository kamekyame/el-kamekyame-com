import type { NextPage } from "next";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

import Title from "../src/title";

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: 5,
      }}
    >
      <Title name="Top" />
      <Box
        component="h1"
        sx={{
          mb: 0,
        }}
      >
        すずとものブログ
      </Box>
      <Box component="h2" sx={{ m: 1 }}>
        ～Electone編～
      </Box>
      <Box component="p">
        YAMAHAの電子オルガン「Electone」を布教するために作成した「すずとものブログ～Electone編～」
        <br />
        エレクトーンに関する役立ち情報・ツールを公開していく予定なので、ぜひご活用ください！
      </Box>

      <Box component="h3" sx={{ m: 1 }}>
        Tools
      </Box>

      <Box sx={{ maxWidth: "90%" }}>
        <Card>
          <CardActionArea href="/tools/domino-define">
            <CardContent>
              <Typography gutterBottom variant="h6">
                Domino用エレクトーン定義ファイル
              </Typography>
              <Typography variant="body2">
                MIDI編集ソフト「Domino」で使用できるエレクトーン用定義ファイル。
                <br />
                XGサポートファイルやスタイルファイルの作成に役立ちます。
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
};

export default Home;
