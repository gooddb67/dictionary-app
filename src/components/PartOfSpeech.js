import { Fragment } from "react";
import Synonyms from "./Synonyms";
import Definitions from "./Definitions";

function PartOfSpeech({ meanings }) {
  const partOfSpeech = meanings.map((part, index) => {
    return (
      <Fragment key={index}>
        <div className="flex dark:text-white items-center gap-5 mt-8">
          <p className="part-of-speech font-bold italic text-2xl">
            {part.partOfSpeech}
          </p>
          <div className="grow separator"></div>
        </div>

        <p className="text-gray-dark my-8 mb-4 text-xl">
          Meaning
        </p>

        <Definitions list={part.definitions} />
        <Synonyms list={part.synonyms} />
      </Fragment>
    );
  });

  return partOfSpeech;
}

export default PartOfSpeech;
