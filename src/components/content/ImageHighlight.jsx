"use client";
import Image from "next/image";
import Food1 from "@/assets/images/food1.jpg";
import Food2 from "@/assets/images/food2.jpg";
import Food3 from "@/assets/images/food1.jpg";
import Food4 from "@/assets/images/food2.jpg";
import { useContext } from "react";
import { SelectedImageContext } from "@/utils/contexts";

const imageUrlMap = {
  1: Food1,
  2: Food2,
  3: Food3,
  4: Food4,
};

const ImageHighlight = () => {
  const imageContext = useContext(SelectedImageContext);
  return (
    <div className="main-image">
      <Image
        src={imageUrlMap[imageContext?.selectedImage] || imageUrlMap[1]}
        alt={""}
        width={200}
        height={200}
      />
    </div>
  );
};

export default ImageHighlight;
