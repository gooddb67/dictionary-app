import { Fragment } from "react";
import Audio from "./Audio";
import PartOfSpeech from "./PartOfSpeech";

import "../styles/wordDisplay.scss";

function WordDisplay({ apiResult }) {
  const renderedWord = apiResult
    .slice(0, 1)
    .map((data, index) => {
      const phonetics = data.phonetics.find((phoneticData) => {
        return phoneticData.audio && phoneticData.text;
      });

      return (
        <Fragment key={index}>
          <div
            className="flex dark:text-white justify-between mt-3"
            key={data.word}
          >
            <div>
              <h1 className="display__word">{data.word}</h1>
              <p className="display__phonetic mb-8 text-lg">
                {phonetics.text}
              </p>
            </div>
            <Audio src={phonetics.audio} />
          </div>

          <PartOfSpeech meanings={data.meanings} />
        </Fragment>
      );
    });

  return <div>{renderedWord}</div>;
}

export default WordDisplay;
