import * as React from "react";
import styled from "styled-components";

type BlogProps = {
  id?: string;
};

const Blog: React.FC<BlogProps> = () => {
  return <AbsWrapper>Blog</AbsWrapper>;
};

const AbsWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export default Blog;
