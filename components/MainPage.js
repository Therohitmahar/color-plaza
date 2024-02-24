"use client";
import SingleSide from "./SingleSide";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { randomizeFn, reset } from "../redux/slice/mainSlice";
import { useParams, useRouter } from "next/navigation";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
const MainPage = () => {
  const dispatch = useDispatch();
  const paramRouter = useParams();
  const router = useRouter();
  //   const colors = useSelector((state) => state?.randomizeReduce);
  const { primary, secondary, accent, bgColor, text } = paramRouter;
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
      )}/${randomAccent?.slice(1, 7)}/${randomTextColor?.slice(
        1,
        7
      )}/${randomBgColor?.slice(1, 7)}`
    );
  };
  const resetColor = () => {
    router?.push("/");
  };
  return (
    <div className="main-page">
      <div
        className="dark-mode"
        style={{ background: `#${bgColor}`, border: `10px solid #${text}` }}
      >
        <SingleSide />
      </div>
      <div className="buttons-wrapper">
        <button
          onClick={resetColor}
          style={{ backgroundColor: `#${secondary}`, color: `#${text}` }}
        >
          Reset
        </button>

        <button
          onClick={getRandomColor}
          style={{
            backgroundColor: `#${accent}`,
            color: `#${text}`,
            display: "flex",
          }}
        >
          Shuffle <TuneRoundedIcon style={{ fontSize: "15px" }} />
        </button>
      </div>
      <div
        className="light-mode"
        style={{ background: `#${text}`, border: `10px solid #${bgColor}` }}
      >
        <SingleSide />
      </div>
    </div>
  );
};

export default MainPage;
