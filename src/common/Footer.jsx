import { Box } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      flex={1}
      textAlign="center"
      bgcolor="skyblue"
      padding="4px 0"
      width="100%"
      flexShrink="0"
    >
      <p>作成者:佐久間道仁 (学籍番号 5422017)</p>
      <p>このサイトは日本大学文理学部情報科学科の選択必修科目 Webプログラミングの最終課題として作成されました．</p>
    </Box>
  );
};
