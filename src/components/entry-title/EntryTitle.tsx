import { FunctionComponent } from "react";
import { ManualData } from "../../man-data";

interface EntryTitleProps {
  entry: ManualData;
}

const EntryTitle: FunctionComponent<EntryTitleProps> = (props) => {
  const { entry } = props;

  return (
    <>
      <h1 className="my-0">{entry.title}</h1>
      <p className="my-0 text-500">
        {entry.source}, {entry.sourceDetails}
      </p>
    </>
  );
};

export default EntryTitle;
