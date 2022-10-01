import * as React from "react";
import { StudentModel } from "../../models";

export interface StudentProps {
  student: StudentModel;
  onClick?: (student: StudentModel) => void;
}

export default function Student({ student, onClick }: StudentProps) {
  let { name, age, isHero } = student;

  function handleClick() {
    onClick?.(student);
  }
  return (
    <div onClick={handleClick}>
      Student {name} {age} {isHero ? "hero" : "no hero"}
    </div>
  );
}
