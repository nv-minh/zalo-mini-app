import React, { FC, HTMLProps, PropsWithChildren } from "react";
import { Box, Text } from "zmp-ui";
import { BodyTextProps } from "zmp-ui/text";

export const TextSkeleton: FC<PropsWithChildren<BodyTextProps>> = ({
  className,
  ...props
}) => {
  return (
    <Text
      {...props}
      className={`bg-skeleton text-transparent w-fit h-fit animate-pulse ${className ?? ""
        }`}
    />
  );
};

export const BoxSkeleton: FC<HTMLProps<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`bg-skeleton animate-pulse ${className ?? ""}`}
    />
  );
};

export const ImageSkeleton: FC<HTMLProps<HTMLImageElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`bg-skeleton animate-pulse ${className ?? ""}`}
    />
  );
};

export const InputSkeleton: FC<HTMLProps<HTMLInputElement>> = ({
  className,
  ...props
}) => {
  return (
    <input
      {...props}
      className={`bg-skeleton w-[100%] animate-pulse h-[40px] ${className ?? ""
        }`}
    />
  );
};

export const BannerMainSkeleton: FC = () => {
  return <BoxSkeleton className="h-[360px] mb-2"></BoxSkeleton>;
};
export const BannerSecondSkeleton: FC = () => {
  return <BoxSkeleton className="h-[180px] mb-2"></BoxSkeleton>;
};

export const AvatarSkeleton: FC = () => {
  return <ImageSkeleton className="w-[48px] h-[48px] rounded-full" />;
};

export const ProductItemSkeleton: FC = () => {
  return (
    <div className="space-y-2">
      <ImageSkeleton className="w-full aspect-square rounded-lg" />
      <TextSkeleton>1234567890</TextSkeleton>
      <TextSkeleton size="xxSmall">20,000đ</TextSkeleton>
    </div>
  );
};
export const FlashSaleSkeleton: FC = () => {
  return (
    <>
      <BoxSkeleton className="w-full flex flex-row justify-between items-center">
        <TextSkeleton>Giá sốc hôm nay </TextSkeleton>
        <Box>
          <Box>
            <BoxSkeleton></BoxSkeleton>
            <BoxSkeleton></BoxSkeleton>
            <BoxSkeleton></BoxSkeleton>
          </Box>
          <BoxSkeleton></BoxSkeleton>
        </Box>
      </BoxSkeleton>
    </>
  );
};

export const NotificationSkeleton: FC = () => {
  return (
    <TextSkeleton className="w-full my-1 flex justify-center mx-2">
      Giảm giá 100%
    </TextSkeleton>
  );
};

export const ProductSkeleton = () => {
  return (
    <Box className="!flex bg-background !mb-2">
      <ImageSkeleton className="aspect-square w-[120px] h-[92px]" />
      <Box className="!flex flex-col w-full">
        <TextSkeleton className="font-medium ml-3 mt-2">
          Sản phẩm skeleton
        </TextSkeleton>
        <Box>
          <Box className={"!flex flex-col !ml-3 !mt-2"}>
            <TextSkeleton className="text-grey-color font-bold text-[14px] line-through">
              122.000đ
            </TextSkeleton>
          </Box>
          <Box className="!flex items-center !mt-2">
            <Box>
              <TextSkeleton className="font-bold text-red-color self-start ml-3 text-[14px]">
                122.000đ
              </TextSkeleton>
            </Box>
            <Box className="!flex justify-center mb-2 self-center py-1 mr-4 px-2 rounded-[4px]">
              <TextSkeleton className="text-[12px] font-medium text-text-color">
                Mua ngay
              </TextSkeleton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};