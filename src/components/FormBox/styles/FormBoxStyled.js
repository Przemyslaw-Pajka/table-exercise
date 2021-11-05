import styled from "styled-components";

export const FormBoxStyled = styled.div`
  margin: 0px auto;
  width: 100%;
  max-width: 448px;
  background: #fff;
  background: ${(props) => (props.isLightThemeColor ? "#fff" : "#212121")};
  border-radius: 4px;
  box-shadow: rgb(60 66 87 / 12%) 0px 7px 14px 0px,
    rgb(0 0 0 / 12%) 0px 3px 6px 0px;
`;
FormBoxStyled.defaultProps = {
  isLightThemeColor: "#fff",
};
