import React from "react";

import { ImageType } from "../../helpers/image-type";

interface ImagesListProps {
  images: ImageType[];
}

const ImagesList: React.FC<ImagesListProps> = ({ images }) => {
  const getMargin = (index: number) => {
    if (index < 6) {
      return "mb-4";
    }
  };

  return (
    <div className="ImagesList">
      <div className="row">
        {images.map((image, index) => {
          return (
            <div className={"col-4 " + getMargin(index)} key={index}>
              <a
                href={image.src.original}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={image.src.landscape}
                  className="img-fluid"
                  alt={image.photographer}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImagesList;
