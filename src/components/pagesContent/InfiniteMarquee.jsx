import ImageCard from "./ImageCard";
import skillContent from "../skillContent.js";
export default function InfiniteMarquee() {
  return (
    <div class="marquee">
      <div class="marquee-track">
        {skillContent.map((skill) => {
          return (
            <div>
              <ImageCard {...skill} />
            </div>
          );
        })}
      </div>
      <div class="marquee-track" aria-hidden="true">
        {skillContent.map((skill) => {
          return (
            <div>
              <ImageCard {...skill} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
