import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.png";
import userTwoImg from "../public/img/user2.png";
import userThreeImg from "../public/img/user3.png";

export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 px-3">
      <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-7 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              "Great job, <Mark>good communication</Mark> throughout the process. My website looks very professional."
            </p>

            <Avatar
              image={userTwoImg}
              name="Dennis M."
              title="Mortgage Broker - Centum"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-7 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              "Very pleased with the project and the <Mark>quick response</Mark> time back and forth."
            </p>

            <Avatar
              image={userOneImg}
              name="Kent L."
              title="Owner - Tractor Fab"
            />
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-7 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              "Oh s*** that's looking <Mark>really good</Mark>, that's extremely impressive!"
              </p>

            <Avatar
              image={userThreeImg}
              name="Darren B."
              title="Owner - DB Landscaping"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <img
          src={props.image.src}
          width="80"
          height="80"
          alt="Reviewer avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-red-800 bg-red-100 rounded-md ring-red-100 ring-4 dark:ring-red-900 dark:bg-red-900 dark:text-red-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
