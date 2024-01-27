import { Box } from "@mui/material";
import {
  DARK_ACCENT_COLOR,
  DARK_TEXT_COLOR,
  LIGHT_ACCENT_COLOR,
  LIGHT_TEXT_COLOR,
} from "../styles/style";
import { useContext } from "react";
import { darkModeContext } from "../context/DarkModeContext";
import { useWindowSize } from "../feature/useWindowSize";

export const Footer = () => {
  const { isDark } = useContext(darkModeContext);
  const windowSize = useWindowSize();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      flex={1}
      textAlign="center"
      bgcolor={isDark ? DARK_ACCENT_COLOR : LIGHT_ACCENT_COLOR}
      padding="4px 0"
      width="100%"
      flexShrink="0"
      boxShadow="0px -3px 5px 0px rgba(0,0,0,0.5)"
      zIndex={1000}
      height={windowSize.height * 0.1}
    >
      <p style={{ color: isDark ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR }}>
        作成者:佐久間道仁 (学籍番号 5422017)
      </p>
      <p style={{ color: isDark ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR }}>
        このサイトは日本大学文理学部情報科学科の選択必修科目
        Webプログラミングの最終課題として作成されました．
      </p>
    </Box>
  );
};
