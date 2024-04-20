import React, { FC, useEffect } from 'react';
import BulletPoint from '../components/button/BulletPoint';


const ErrorPage: FC = () => {
  return (
    <div className="my-3 om-lg:my-[89px] py-3 px-3 w-full flex flex-col items-center justify-center">
      <img
        src='https://cdn.onehousing.vn/onehousing-web/web-asset/omre-assets/Image/192_Color/im_192empty_unknown_error%402x.png'
        width={128}
        height={128}
      />
      <p className="text-om-t18 font-medium mt-5 text-om-ink-500s">
        Hệ thống có chút vấn đề nhỏ
      </p>
      <p className="text-om-t16 text-om-ink-400s mt-2 text-center om-md:w-[500px]">
        Bạn vui lòng thử lại sau
      </p>
      <BulletPoint
        enable={true}
        text="Về trang chủ"
      />
    </div>
  );
};

export default ErrorPage;
