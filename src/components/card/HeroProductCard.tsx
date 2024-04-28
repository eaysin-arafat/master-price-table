import useWindow from "../../hooks/useWindow";

const HeroProductCard = ({
  title,
  image,
}: {
  title: string; // Title of the product
  image: string; // Image URL of the product
}) => {
  // Using the useWindow hook to track window width breakpoints
  const w1024 = useWindow(1024); // Boolean indicating if the window width is 1024px or more
  const w768 = useWindow(768);

  return (
    <div className="bg-gradient-to-b from-[#BDEFDE] to-[#70CEB1] px-2 pt-2 rounded-xl flex flex-col items-center justify-between">
      {/* Product image */}
      <img
        style={{ height: w768 ? "10px" : "50px" }}
        width={w768 ? "25" : w1024 ? "50" : "60"}
        src={image}
        className="flex items-center justify-end"
        alt=""
      />

      {/* Product title */}
      <p className="text-[8px] md:text-[10px] lg:text-[12px] font-medium pt-1.5 pb-1">
        {title}
      </p>
    </div>
  );
};

export default HeroProductCard;