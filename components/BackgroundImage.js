import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const Box = styled.div`
  position: fixed;
  z-index: 0;
  top: 0;
`;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function BGImage() {
  const [width, setWidth] = useState(0);
  const [height, setheight] = useState(0);

  useEffect(() => {
    const { width, height } = getWindowDimensions();

    setWidth(width);

    setheight(height);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();

      setWidth(width);

      setheight(height);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width && height) {
    return (
      <Box className=" z-0 top-70 w-full h-36 md:hidden">
        <Image
          src={"/Hero2.png"}
          alt="Picture of the author"
          width={300}
          height={600}
        />
      </Box>
    );
    

  }

  return null;
}

export default BGImage;