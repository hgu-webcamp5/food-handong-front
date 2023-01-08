import {Box, Paper, styled, Typography} from "@mui/material";

const StyledFooterTypo = styled(Typography)({
  fontWeight :"bold",
  color :"text.primary",
    }
);
function Footer() {
  return <>

      <Box sx={{
        px : 3, py : 1, mx : 3, mt: 15, pb:3, color: "text.secondary", borderTop: 2, borderColor: "text.secondary"
        }}>

        <StyledFooterTypo variant="caption" sx={{ display:"flex",
            justifyContent:"center", float: { xs: "center", md : "left"}}}> © 2023 webCamp team 5 All Rights Reserved
        </StyledFooterTypo>

        <Box component="div" sx={{display: { xs: 'flex', md: 'none' }}}></Box>

        <StyledFooterTypo variant="caption" sx={{float: { xs : "left" , md : "right"} }} >서비스 이용약관
        </StyledFooterTypo>

        <StyledFooterTypo variant="caption" sx={{float: { xs : "right" , md : "right"}, mr : {xs : 0 , md:10} }}>개인정보 처리방침
        </StyledFooterTypo>
      </Box>
  </>;
}

export default Footer;
