import { motion } from "framer-motion";
import styled from "styled-components";
import theme from "theme";

export const StyledCategoryCard = styled(motion.div)<{ src: string }>`
  position: relative;
  width: 80%;
  height: 240px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: ${theme.colors.primary._100};
  margin: auto;
  font-size: 48px;
  font-weight: 600;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  color: #f1f1f1;
  overflow: hidden;
  transition: 0.2s all;
  padding: 24px;

  & > * {
    z-index: 10;
  }

  &::before {
    content: "";
    background: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
    filter: blur(2px);
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 0;
  }
`;
