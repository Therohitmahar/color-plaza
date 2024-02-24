"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { randomizeFn, reset } from "../redux/slice/mainSlice";
import { useParams, useRouter } from "next/navigation";
import StyleTwoToneIcon from "@mui/icons-material/StyleTwoTone";
const Main = () => {
  const dispatch = useDispatch();
  const paramRouter = useParams();
  const router = useRouter();
  const colors = useSelector((state) => state?.randomizeReduce);
  const { bgColor, text } = colors;
  const { primary, secondary, accent } = paramRouter;
  function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function getRandomHexColor(min, max) {
    // Generate random R, G, and B values
    const arr = ["r", "g", "b"];
    const rgbCode = arr.map((el) => getRandomNumberInRange(min, max));
    // Convert the decimal values to hexadecimal
    const finalArr = rgbCode
      ?.map((el) => el.toString(16).padStart(2, "0"))
      ?.join("");
    // Concatenate the hexadecimal values to form the color code
    const hexColor = `#${finalArr}`;

    return hexColor;
  }
  const getRandomColor = () => {
    // Example usage:
    const randomPrimary = getRandomHexColor(0, 255);
    const randomSecondary = getRandomHexColor(0, 255);
    const randomAccent = getRandomHexColor(0, 255);
    const randomBgColor = getRandomHexColor(0, 100);
    const randomTextColor = getRandomHexColor(220, 255);

    dispatch(
      randomizeFn({
        randomAccent,
        randomPrimary,
        randomSecondary,
        randomTextColor,
        randomBgColor,
      })
    );
    router.push(
      `/${randomPrimary?.slice(1, 7)}/${randomSecondary?.slice(
        1,
        7
      )}/${randomAccent?.slice(1, 7)}`
    );
  };
  const resetColor = () => {
    dispatch(reset());
  };
  // console.log(primary, secondary, accent, paramRouter, "logs");
  return (
    <>
      <main>
        <div
          style={{
            padding: "50px",
            backgroundColor: `#${primary}`,
            color: text,
          }}
        >
          primary
        </div>
        <div
          style={{
            padding: "50px",
            backgroundColor: `#${secondary}`,
            color: text,
          }}
        >
          secondary
        </div>
        <div
          style={{
            padding: "50px",
            backgroundColor: `#${accent}`,
            color: text,
          }}
        >
          {" "}
          accent
        </div>
        <div style={{ padding: "50px", backgroundColor: bgColor, color: text }}>
          Background
        </div>
        <button onClick={resetColor} style={{ padding: "10px" }}>
          Reset
        </button>
        <button
          onClick={getRandomColor}
          style={{ padding: "10px", backgroundColor: `#${secondary}` }}
        >
          <StyleTwoToneIcon style={{ color: primary }} />
        </button>
      </main>
    </>
  );
};

export default Main;
