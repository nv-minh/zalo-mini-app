import React from "react";
import { Box, Page } from "zmp-ui";
import { ProductItemSkeleton, ProductSkeleton } from "../../components/skeletons/skeletons";

const ListingIventory = () => {
  return (
    <Page className="overflow-hidden product-page">
      <Box className="!mt-2 !ml-4 product__grid relative">
        <Box
          id="product-list"
          className="bg-background mb-2 overflow-auto pb-4"
        >
          {[...Array(9)].map((__, index) => (
            <ProductSkeleton key={index} />
          ))}
        </Box>
      </Box>
    </Page>
  );
};

export default ListingIventory;
