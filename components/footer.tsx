import Link from "../src/link";
import { Box, Typography, AppBar } from "@mui/material";
import Twitter from "@mui/icons-material/Twitter";
import GitHub from "@mui/icons-material/GitHub";
import YouTube from "@mui/icons-material/YouTube";

export default function App() {
  return (
    <AppBar
      position="static"
      elevation={0}
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        p: 2,
        pt: 7,
        pb: 10,
        gap: 2,
      }}
    >
      <Box>
        <Box sx={{ m: 1, "& a": { mx: 1.5 } }}>
          <Box
            component="a"
            href="https://github.com/kamekyame"
            target="_blank"
            color="inherit"
          >
            <GitHub />
          </Box>
          <Box
            component="a"
            href="https://twitter.com/SuzuTomo2001"
            target="_blank"
            color="inherit"
          >
            <Twitter />
          </Box>
          <Box
            component="a"
            href="https://www.youtube.com/channel/UCP4eqORRoflTk1wyTzvslqA"
            target="_blank"
            color="inherit"
          >
            <YouTube />
          </Box>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography>©2022 kamekyame</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          px: 2,
          "& a": {
            textDecoration: "none",
          },
        }}
      >
        <Typography variant="h6" sx={{ my: 1 }}>
          Contents
        </Typography>
        <Link href="/" color="inherit">
          Top
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          px: 2,
          "& a": {
            textDecoration: "none",
          },
        }}
      >
        <Typography variant="h6" sx={{ my: 1 }}>
          kamekyame.com
        </Typography>
        <Link href="https://kamekyame.com" color="inherit">
          Main
        </Link>
        <Link href="https://t7s.kamekyame.com" color="inherit">
          ナナシス関連
        </Link>
      </Box>
    </AppBar>
  );
}
