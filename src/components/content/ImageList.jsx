"use client";
import imageList from "../../constants/ImageList.json";
import Image from "next/image";
import Food1 from "@/assets/images/food1.jpg";
import Food2 from "@/assets/images/food2.jpg";
import Food3 from "@/assets/images/food3.jpg";
import Food4 from "@/assets/images/food4.jpg";
import { SelectedImageContext } from "@/utils/contexts";
import { useContext } from "react";

const imageUrlMap = {
  1: Food1,
  2: Food2,
  3: Food3,
  4: Food4,
};

const ImageList = () => {
  const imageContext = useContext(SelectedImageContext);
  console.log(imageContext);
  return (
    <div className="food-images">
      {imageList.images.map((image) => {
        return (
          <Image
            key={image.id}
            src={imageUrlMap[image.id]}
            alt={image.name}
            width={200}
            height={200}
            onClick={() => imageContext.setSelectedImage(image.id)}
          />
        );
      })}
    </div>
  );
};

export default ImageList;
