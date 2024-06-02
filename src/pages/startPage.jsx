import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const StartPage = (props) => {
  // change progress
  useEffect(() => {
    props.changeProgressBar(0);
  }, []);

  console.log("test");

  return (
    <>
      <div className="w-full xs:w-2/3 md:w-2/5 lg:w-1/3 xl:w-1/4">
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="b" gradientTransform="rotate(90 .5 .5)">
              <stop offset="0%" stopColor="#0096c7" />
              <stop offset="100%" stopColor="#48cae4" />
            </linearGradient>
          </defs>
          <g clipPath="url(#a)">
            <path fill="url(#b)">
              <animate
                attributeName="d"
                dur={"5000ms"}
                repeatCount="indefinite"
                values="M855 612q-47 112-135.5 202t-227 113q-138.5 23-260-60.5t-131-225Q92 500 105 361t140.5-195Q373 110 491 137.5T739.5 198Q870 231 886 365.5T855 612Z;
                
                M869 636q5 136-119 194.5t-256.5 78q-132.5 19.5-214-85t-172-214Q17 500 68 361.5t185-173q134-34.5 252.5-53t202.5 67Q792 288 828 394t41 242Z;
                
                M867.5 624q-26.5 124-137 185t-236 77.5Q369 903 286.5 809T139 607.5Q74 500 94.5 360t151-191q130.5-51 258-61.5t262.5 45Q901 208 897.5 354t-30 270Z;

                M896.5 629.5Q856 759 737 811t-250 92q-131 40-213-70T133 611.5Q74 500 130 386t136-237.5Q346 25 491 53t255 108.5Q856 242 896.5 371t0 258.5Z;

                M864.5 635.5q8.5 135.5-108 216t-254.5 74q-138-6.5-231.5-99T156 617q-21-117 18.5-221t116-205.5Q367 89 489 124.5t217.5 96Q802 281 829 390.5t35.5 245Z;

                M855 612q-47 112-135.5 202t-227 113q-138.5 23-260-60.5t-131-225Q92 500 105 361t140.5-195Q373 110 491 137.5T739.5 198Q870 231 886 365.5T855 612Z;
                "
              ></animate>
            </path>
          </g>
        </svg>
        <div></div>
      </div>
      <h1 className="text-3xl font-light text-firstColor md:text-4xl">
        Welcome to <span className=" font-semibold">Talangin</span>
      </h1>
      <h2 className="font-light text-firstColor mt-2 md:text-xl">
        A website that allow you to{" "}
        <span className="font-semibold"> split your bills easily.</span>
      </h2>

      <Link
        to="/groupname"
        className="bg-firstColor text-offWhite font-medium p-3 px-6 mt-3 rounded-2xl w-max text-center hover:bg-thirdColor transition-colors"
        onClick={() => props.changePageStatus("groupName", true)}
      >
        Start Now
      </Link>
    </>
  );
};

export default StartPage;
