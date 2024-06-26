import styled from "styled-components";
import { setFlex } from "./SetStyle";

export const Img = styled.img`
  ${(props) => setFlex(props.$flex || "h_start_start")};
  height: ${(props) => props.$height || "100%"};
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "0"};
`;
