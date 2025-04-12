"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import image1 from "@/assets/images/image-1.png";
import image2 from "@/assets/images/image-2.png";
import image3 from "@/assets/images/image-3.png";
import image4 from "@/assets/images/image-4.png";
import image5 from "@/assets/images/image-5.png";
import image from "@/assets/images/image.png";
import frame from "@/assets/images/Frame 26086938.png";

export const ThreeDMarqueeDemo = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image,
    frame,
    "https://product.hstatic.net/200000722513/product/everest-60-compact-60_-layout-wi-photoroom_6c80fb3271fc49f1af1b1ff13ef13897_medium.png",
    "https://product.hstatic.net/200000722513/product/aula-f75-ban-phim-co-gaming-co-d-photoroom_6421c2df70924b8ea205533521d5e0d5_medium.png",
    "https://product.hstatic.net/200000722513/product/ek87_pro_-_black_golden_-_01_d8d_c75228a9fad643efb207f9044982b319_medium.png",
    "https://product.hstatic.net/200000722513/product/nexode-pro-100w-3-port-gan-fast-charger-5262691_db446241825e43dc92c46ff55abadf7a_medium.png",
    "https://product.hstatic.net/200000722513/product/l5hy1jih_3e71a044db784c5bbf451c75b25207b4_medium.png",
    "https://product.hstatic.net/200000722513/product/7f17aabcdda3afc465fb8718f01bc8df_2dc75e902d9f419c851aae6e50c32fd4_medium.png",
    "https://product.hstatic.net/200000722513/product/830.727_6eacef2b54ae4c5c8d050e519a95c1a5_medium.png",
    "https://product.hstatic.net/200000722513/product/3_1c356400926c459daf0b8393c466b0b0_medium.png",
    "https://product.hstatic.net/200000722513/product/10005_3c4283e8265546e09eb539736b614a0e_medium.jpg",
    "https://product.hstatic.net/200000722513/product/10011_5c718e805d4644df996d28b7327c9423_medium.jpg",
    "https://product.hstatic.net/200000722513/product/gvn00500_b9c1033a731746028c1d68fe8936dbe8_medium.png",
    "https://product.hstatic.net/200000722513/product/1024__1__b61842c73fff4821a93470f41c00c2d2_medium.png",
    "https://product.hstatic.net/200000722513/product/1024_5b3ad2cff4444235bdb9897806ebbc40_medium.png",
    "https://product.hstatic.net/200000722513/product/1024_6867f9eb7c6348f1a9d078053c7de4df_medium.png",
    "https://product.hstatic.net/200000722513/product/ideapad_slim_3_15irh10_ct2_06_d927ac853d7241138eb02d35a9fb46e2_medium.png",
    "https://product.hstatic.net/200000722513/product/khung-laptop-23_cd9037919f96427a9c25e318a8a00134_medium.png",
    "https://product.hstatic.net/200000722513/product/1024__1__919b0672b0984e2ab3f2a660513c0670_medium.png",
    "https://product.hstatic.net/200000722513/product/loq_15irx9_ct1_01_e2e64ca5dbd941cf95933becae145edf_medium.png",
    "https://product.hstatic.net/200000722513/product/thumbchuot_7445abea69bf461e881eeba2b6cbbd8d_medium.jpg",
    "https://product.hstatic.net/200000722513/product/211027011618-mk2a3za-a_c2dbcf7f3cdd4a96ace549a0bb0dcfb4_85f5a96d45b242f49524b67026980f85_medium.jpg",
    "https://product.hstatic.net/200000722513/product/cbook-air-m2-10gpu-8gb-512gb-silver-2_9996b049f85648169fad6e9f71ed1bc1_6c61a5a4d2a44212af3826b301a4af43_medium.jpg",
    "https://product.hstatic.net/200000722513/product/k-pro-13-m2-10gpu-16gb-512gb-silver-2_b9322cd38b244032bfbae665db01d586_0334bca49ca246aeac2fc80ed6edc7c2_medium.png",
    "https://product.hstatic.net/200000722513/product/mk2e3_4d662bfdc21c40d1b9cd2072aff24d8a_88ae01e5a8ae4602b3a69f5d0f42778c_medium.jpg",
    "https://product.hstatic.net/200000722513/product/s-tai-nghe-apple-airpods-max-silver-1_c335893771684d899d80a4225669af23_c0931c1cc73840cd9ec4e3c1ef2871bb_medium.png",
    "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/garmin_20_.png",
    "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/garmin_165.png",
    "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/m/amazfit_2_8.png",
    "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/h/u/huawei_1__1_2.png",
    "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/garmin_165.png",
    "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/_/n/_nh_v_tr_em_1_5.png",
    "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_422244.png",
    "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-10-9-inch-2022.png",
  ];

  return (
    <>
      <div className="mx-auto bg-gray-950/5 ring ring-neutral-700/10 dark:bg-neutral-800">
        <ThreeDMarquee images={images} />
      </div>
    </>
  );
};
