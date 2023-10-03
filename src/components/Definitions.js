import React from "react";

function Definitions({ list }) {
  if (!list.length) {
    return;
  }

  const definitions = list.map((def, index) => {
    return (
      <li key={index} className="mb-2 last:mb-10">
        <span className="block dark:text-white mb-2">
          {def.definition}
        </span>
        <span className="text-gray-dark">
          {def.example && `"${def.example}"`}
        </span>
      </li>
    );
  });

  return (
    <ul className="marker:text-purple text-lg list-disc ml-8">
      {definitions}
    </ul>
  );
}

export default Definitions;
