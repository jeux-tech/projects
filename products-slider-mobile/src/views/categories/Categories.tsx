import { categories } from "common/mockCategories";
import CategoryCard from "components/category-card/CategoryCard";
import useCarousel from "hooks/useCarousel";
import React, { useRef } from "react";
import "swiper/css";
import {
  CategoriesWrapper,
  StyledCategoriesOutterWrapper,
} from "./Categories.style";

type Props = {};

const Categories: React.FC<Props> = ({}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const childrenRefs = useRef(new Array(categories.length));
  const {} = useCarousel(wrapperRef, childrenRefs);

  return (
    <StyledCategoriesOutterWrapper>
      <CategoriesWrapper ref={wrapperRef}>
        {categories.map((card, index) => (
          <CategoryCard
            {...card}
            ref={(el) => (childrenRefs.current[index] = el)}
            key={index}
          />
        ))}
      </CategoriesWrapper>
    </StyledCategoriesOutterWrapper>
  );
};

export default Categories;
