import React from "react";
import "./events/style.css";

// Use images from public/img instead of ../assets/images
const shopHeader = "/img/shop/shop-header.png";
const headerTitleBg = "/img/header-title-bg.png";
const mainPic = "/img/mainPic.png";

const Shop = () => {
  let a = [1, 2, 3, 4, 5, 6, 7, 8];
  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <IoIosArrowForward
  //       onClick={onClick}
  //       className="size-10 absolute top-[32%] text-yellow-700 -right-[10%]"
  //     />
  //   );
  // }

  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <IoIosArrowBack
     
  //       onClick={onClick}
  //       className={`size-10 absolute top-[32%] text-yellow-700 -left-[7%] ml-[2%]`}
  //     />
  //   );
  // }
  return (
    <section className="max-w-[2000px] relative md:mx-auto mx-[21px]  lg:rounded-none lg-[21px] rounded-3xl">
      <img
        src={shopHeader}
        alt="فروشگاه"
        className="rounded-none hidden md:block max-h-[150px] w-full object-cover"
      />
      <div className="relative flex justify-center">
        <img
          src={headerTitleBg}
          alt="فروشگاه"
          className="md:hidden relative w-[400px]"
        />
        <p className="font-sans text-[24px] absolute top-[28%] sm:right-[35%] right-[25%] md:hidden ">
          فروشگاه
        </p>
      </div>
      <div className="md:px-[80px] pt-[50px] pb-[20px] text-[#323232] text-[17px] space-y-[50px]">
        <div className="space-y-6">
          <p className="font-sansBold">
            فروشگاه موسسه خیریه با انگیزه حمایت از تولیدات اعضای موسسه و به
            منظور توانمند سازی آنها اقدام به فروش محصولات تولید شده توسط اعضا می
            کند.
          </p>
          <p className="font-sans">
            برای خرید محصولات لطفا کد محصول را یادداشت کرده و جهت سفارش در ساعات
            --- تا ---- با شماره تلفن --- تماس حاصل فرمایید.
          </p>
        </div>
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[73px]  place-content-center place-items-center">
          {a.map((item) => (
            <div
              className="w-[247px] h-[338px] rounded-xl relative"
              style={{
                boxShadow: "0 2px 20px 4px rgb(0 0 0 / 0.25)",
              }}
            >
              <img
                src={mainPic}
                className="w-[247px] h-[238px] object-cover rounded-t-xl"
                alt=""
              />
              <div className="backdrop-blur-md py-2 px-4 rounded-[50px] bg-[rgba(255,255,255,0.5)] text-white font-sansBold text-[14px] absolute bottom-28 right-2">
                30 هزار تومان
              </div>
              <div className="px-[14px] pt-[14px] space-y-[6px]">
                <p className="text-[#080913] text-[16px] font-sansBold">
                  بسته 1 کیلویی سبزی خوردن
                </p>
                <p className="text-[#969696] text-[14px]">
                  سبزی خوردن پاک شسته و شسته شده در بسته بندی 1 کیلویی
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid sm:hidden grid-cols-1 gap-[73px]  place-content-center place-items-center">
          {a.map((item) => (
            <div
              className="w-[247px] h-[338px] rounded-xl relative "
              style={{
                boxShadow: "0 2px 20px 4px rgb(0 0 0 / 0.25)",
              }}
            >
              <img
                src={mainPic}
                className="w-[350px] h-[238px] object-cover rounded-t-xl"
                alt=""
              />
              <div className="backdrop-blur-md py-2 px-4 rounded-[50px] bg-[rgba(255,255,255,0.5)] text-white font-sansBold text-[14px] absolute bottom-28 right-2">
                30 هزار تومان
              </div>
              <div className="px-[14px] pt-[14px] space-y-[6px]">
                <p className="text-[#080913] text-[16px] font-sansBold">
                  بسته 1 کیلویی سبزی خوردن
                </p>
                <p className="text-[#969696] text-[14px]">
                  سبزی خوردن پاک شسته و شسته شده در بسته بندی 1 کیلویی
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
