import { useParams } from "next/navigation";
import React from "react";

const SingleSide = () => {
  const paramRouter = useParams();
  const { primary, secondary, accent, bgColor, text } = paramRouter;

  return (
    <section className="single-side">
      <div
        className="secondary"
        style={{ background: `#${text}`, background: `#${secondary}` }}
      >
        secondary
      </div>
      <div
        className="accent"
        style={{ background: `#${text}`, background: `#${accent}` }}
      >
        accent
      </div>
      <div
        className="background"
        style={{ background: `#${bgColor}`, color: `#${text}` }}
      >
        background
      </div>
      <div
        className="text"
        style={{ background: `#${text}`, color: `#${bgColor}` }}
      >
        text
      </div>
      <div
        className="primary"
        style={{ background: `#${text}`, background: `#${primary}` }}
      >
        primary
      </div>
    </section>
  );
};

export default SingleSide;
