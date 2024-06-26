import React from "react";
import Card from "./Card";

const Cards = ({ courses }) => {
  let allCourses = [];
  const getCourses = () => {
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      });
    });
    return allCourses;
  };

  return (
    <div>
      {getCourses().map((course) => {
        <card key = {course.id} course = {course}/>;
      })}
    </div>
  );
};

export default Cards;
