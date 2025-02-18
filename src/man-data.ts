import baseGameBookletData from "./base-game-booklet-data";
import northManualData from "./north-manual-data";

export type ManualData = {
	id: string;
	title: string;
	images?: string[];
	source: string[];
	links?: string[];
};

let manualData: ManualData[] = [];
manualData = manualData.concat(northManualData).concat(baseGameBookletData);

export default manualData;
