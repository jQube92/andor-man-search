import {Button} from "primereact/button";
import {FunctionComponent, useEffect, useState} from "react";
import data, {ManualData} from "../../man-data";
import _ from "lodash";
import {FloatLabel} from "primereact/floatlabel";
import {InputText} from "primereact/inputtext";
import {DataView} from "primereact/dataview";
import {useNavigate} from "react-router";
import EntryTitle from "../entry-title/EntryTitle";

const ManEntryList: FunctionComponent<object> = () => {
	const [searchText, setSearchText] = useState<string>("");
	const [entries, setEntries] = useState<ManualData[]>(data);
	const navigate = useNavigate();

	useEffect(() => {
		if (searchText === "") {
			setEntries(data);
		} else {
			const result = _.filter(data, (entry: ManualData) => {
				const titleParsed = _.toLower(_.trim(entry.title));
				const result = titleParsed.includes(searchText);
				return result;
			});

			setEntries(result);
		}
	}, [searchText]);

	const itemTemplate = (entry: ManualData, index: number) => {
		return (
			<div className="grid py-2" key={index}>
				<div className="col">
					<EntryTitle entry={entry} />
				</div>
				<div className="col-fixed flex flex-row-reverse align-items-center" style={{width: "4rem"}}>
					<Button icon="pi pi-chevron-right" rounded outlined onClick={() => navigate(`/manual-entries/${entry.id}`)} />
				</div>
			</div>
		);
	};

	const listTemplate = (items: ManualData[]) => {
		if (!items || items.length === 0) {
			return null;
		}

		const list = items.map((product, index) => {
			return itemTemplate(product, index);
		});

		return <div className="w-full">{list}</div>;
	};

	return (
		<>
			<div id="heading" className="w-full py-3">
				<FloatLabel>
					<InputText
						id="search"
						className="w-full"
						value={searchText}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
					/>
					<label htmlFor="search">Suchtext</label>
				</FloatLabel>
			</div>

			<div className="w-full">
				<DataView value={entries} listTemplate={() => listTemplate(entries)} />
			</div>
		</>
	);
};

export default ManEntryList;
