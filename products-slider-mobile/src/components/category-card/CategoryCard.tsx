import Typography from "components/typography/Typography";
import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import theme from "theme";
import { StyledCategoryCard } from "./CategoryCard.style";

type Props = {
  id: number;
  name: string;
  image: string;
};

const CategoryCard = forwardRef<HTMLDivElement, Props>(
  ({ id, image, name }, ref) => {
    const navigate = useNavigate();
    const animate = {
      color: "#f1f1f1",
      backgroundColor: theme.colors.primary._100,
      y: 0,
    };
    const initial = { color: "#1a1a1a", backgroundColor: "#1a1a1a", y: 100 };
    return (
      <StyledCategoryCard
        key={"category-card-" + id}
        ref={ref}
        initial={initial}
        animate={animate}
        exit={initial}
        src={image}
        onClick={() => navigate(`/${id}`)}
      >
        <Typography variant="h2" size="sm">
          {name}
        </Typography>
      </StyledCategoryCard>
    );
  }
);

export default CategoryCard;
