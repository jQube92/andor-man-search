import {FunctionComponent, ReactNode} from "react";
import {ManualData} from "../../man-data";
import _ from "lodash";

interface EntryTitleProps {
	entry: ManualData;
}

const EntryTitle: FunctionComponent<EntryTitleProps> = (props) => {
	const {entry} = props;
	const sources = combineSources(entry.source);

	function combineSources(sources: string[]): ReactNode {
		const result: ReactNode[] = [];
		_.forEach(sources, (source) => {
			result.push(<p className="my-0 text-500">{source}</p>);
		});

		return result;
	}

	return (
		<>
			<h1 className="my-0">{entry.title}</h1>
			{sources}
		</>
	);
};

export default EntryTitle;
