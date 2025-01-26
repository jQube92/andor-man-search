import { FunctionComponent } from "react";
import ManEntryDetails, { ManEntryDetailsProps } from "./ManEntryDetails";
import { useParams } from "react-router";
import data, { ManualData } from "../../man-data";
import _ from "lodash";

type ManEntryDetailsWrapperProps = Omit<ManEntryDetailsProps, "entry">;

const ManEntryDetailsWrapper: FunctionComponent<
  ManEntryDetailsWrapperProps
> = () => {
  const { entryId } = useParams();
  const entry: ManualData = _.find(data, ["id", entryId]) as ManualData;

  return <ManEntryDetails entry={entry} />;
};

export default ManEntryDetailsWrapper;
