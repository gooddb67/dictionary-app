import React from "react";

function Synonyms({ list }) {
  if (!list.length) {
    return;
  }

  const synonyms = list.map((syn, index) => {
    return (
      <span key={index} className="text-purple font-bold">
        {(index ? ", " : "") + syn}
      </span>
    );
  });

  return (
    <p className="text-gray-dark text-xl">
      Synonyms &nbsp; {synonyms}
    </p>
  );
}

export default Synonyms;
