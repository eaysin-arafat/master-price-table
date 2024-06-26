import useWindow from "../../hooks/useWindow";
import SectionLayout from "../../layout/SectionLayout";
import ProductBg from "../shared/ProductBg";

const ProductAds = () => {
  // Using the useWindow hook to track window width breakpoints
  const w1024 = useWindow(1024); // Boolean indicating if the window width is 1024px or more
  const w768 = useWindow(768);

  return (
    <SectionLayout>
      <div className="flex items-center gap-4 lg:gap-5 py-4">
        {/* Product main image */}
        <div className="flex gap-4 lg:gap-5">
          <div className="">
            <ProductBg className="!bg-[#CFE9E1]">
              <div className="">
                <img src="/show/image.png" width="450" alt="" />
              </div>
            </ProductBg>
          </div>

          {/* Product lists */}
          <div className="flex flex-col gap-2 lg:[w-80%]">
            <ProductBg className="!bg-[#CFE9E1] !py-2.5">
              <img
                src="/show/image01.png"
                width={w1024 ? "140" : "180"}
                alt=""
              />
            </ProductBg>

            <ProductBg className="!bg-[#CFE9E1]">
              <img src="/show/image02.png" width={"140"} alt="" />
            </ProductBg>

            <ProductBg className="!bg-[#CFE9E1]">
              <img src="/show/image03.png" width="140" alt="" />
            </ProductBg>
          </div>
        </div>

        {/* Product description */}
        <div className="">
          {/* Heading */}
          <h2 className="heading-primary font-semibold">
            <p>Designed to Fit</p>
            <p>Your Home</p>
          </h2>

          {/* Description */}
          <p className="text">
            Furniture Concepts is a contract furniture wholesaler serving the
            needs of group living environments including Community Housing,
            Treatment & Recovery Centers, Assisted Living, Camps, Conference
            Centers, Student Housing, Military Dorms & Quarters, and more!
            Behavioral Healthcare Facility Furniture.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-2 mt-2">
            <button className="primary-btn">Shop Now</button>
            <button className="text flex items-center gap-[2px] pt-1 font-medium">
              <img
                src="/icons/video-play.png"
                width={w768 ? "5" : w1024 ? "15" : "20"}
                className="pb-[2.5px]"
                alt=""
              />
              <span className="mb-[2px] md:mb-[1px]">Watch Video</span>
            </button>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ProductAds;
