
import React from "react";

const SkillComponent = ({ title, skills }) => {
  return (
    <div className="mb-8 scale-90">
      <h1 className="p-3 text-2xl font-semibold text-violet-700">
        {title} :
      </h1>

      <div className="flex flex-wrap gap-3 px-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="cursor-pointer text-lg font-semibold text-white  hover:scale-125 hover:bg-white hover:text-black hover:shadow-xl hover:shadow-white/30 hover:px-4 p-4 rounded-xl duration-150 delay-75"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillComponent;
