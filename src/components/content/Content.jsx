"use client";
import ImageList from "./ImageList";
import ImageHighlight from "./ImageHighlight";

import { useState } from "react";
import { SelectedImageContext } from "@/utils/contexts";

const Content = () => {
  const [selectedImage, setSelectedImage] = useState(1);
  return (
    <section className="hero">
      <SelectedImageContext.Provider
        value={{
          selectedImage,
          setSelectedImage,
        }}
      >
        <div className="content">
          <h1>BREAKFAST</h1>
          <p>
            Breakfast, often referred to as the ‘most important meal of the
            day’, provides essential nutrients...
          </p>

          <ImageList />
          {/* <input type="text" placeholder="Search...." className="search-bar" /> */}
        </div>

        <ImageHighlight />
      </SelectedImageContext.Provider>
    </section>
  );
};

export default Content;
