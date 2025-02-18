import {FunctionComponent, ReactNode} from "react";
import {ManualData} from "../../man-data";
import {Image} from "primereact/image";
import _ from "lodash";
import EntryTitle from "../entry-title/EntryTitle";

export interface ManEntryDetailsProps {
	entry: ManualData;
}

const ManEntryDetails: FunctionComponent<ManEntryDetailsProps> = (props) => {
	const {entry} = props;

	function images(): ReactNode[] {
		const images = _.map(entry.images, (image) => {
			return (
				<Image
					key={image}
					src={`/andor-man-search${image}`}
					alt={entry.title}
					width="100%"
					preview
					style={{
						width: "100%",
					}}
				/>
			);
		});

		return images;
	}

	return (
		<>
			<EntryTitle entry={entry} />
			<div className="w-full mt-4">{images()}</div>
		</>
	);
};

export default ManEntryDetails;
