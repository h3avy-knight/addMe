import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const [data, setData] = useState([]);

  const getDataRequest = async () => {
    const url = "https://picsum.photos/v2/list";
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log("RJ", responseJson);
    setData(responseJson);
  };

  useEffect(() => {
    getDataRequest();
  }, []);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {data.map((el) => (
          <div className="embla__slide h-[300px] w-[100px]" key={el.id}>
            <img
              src={el?.download_url}
              alt=""
              className="h-[100vh] w-[100vw]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
