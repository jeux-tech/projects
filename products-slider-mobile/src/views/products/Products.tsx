import { categories } from "common/mockCategories";
import Typography from "components/typography/Typography";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowBack } from "styled-icons/boxicons-regular";
import {
  StyledBackButton,
  StyledDescription,
  StyledMedia,
} from "./Products.style";

type Props = {};

const Products: React.FC<Props> = ({}) => {
  const navigate = useNavigate();
  const { category } = useParams();

  const mockCategory = categories.find((c) => c.id.toString() === category);
  return (
    <>
      <StyledMedia
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        src={mockCategory?.image!}
      >
        <StyledBackButton onClick={() => navigate("/")}>
          <ArrowBack color="#f1f1f1" width={32} height={32} />
        </StyledBackButton>
        <Typography variant="h1">{mockCategory?.name}</Typography>
      </StyledMedia>
      <StyledDescription
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
      >
        <Typography variant="h3" weight="bold" size="sm">
          Lorem ipsum
        </Typography>
        <Typography variant="p" color="white_70">
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          condimentum fringilla ante, vitae dapibus velit pharetra a.
          <br />
          <br />
          Nunc iaculis feugiat rhoncus. Nam ac auctor ligula. In non ligula
          erat. Cras venenatis nibh quam, sit amet tincidunt lectus blandit id.
          Aenean in purus nec felis auctor suscipit a at diam. Praesent rhoncus
          pulvinar volutpat. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Mauris vel augue rhoncus, condimentum nisi nec, dapibus
          magna.
        </Typography>
      </StyledDescription>
    </>
  );
};

export default Products;
