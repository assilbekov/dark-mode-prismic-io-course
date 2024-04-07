import Image from "next/image";
import { Bounded } from "./Bounded";
import StarGrid from "./StarGrid";
import HeroImage from "../../public/images/hero-image.png";

export const Hero = () => {
  return (
    <Bounded>
      <StarGrid />
      <Image
        src={HeroImage}
        style={{ width: "100vw", height: "auto" }}
        alt="hero"
      />
    </Bounded>
  );
};
