import {ManualData} from "./man-data";

const NORTH_MANUAL: string = "Anleitung - Die Reise in den Norden";

export const northManualData: ManualData[] = [
	{
		id: "sailing",
		title: "Segeln",
		images: ["/north-manual/sailing-rt0.png"],
		source: [`${NORTH_MANUAL}, S. 3`],
	},
	{
		id: "change-course",
		title: "Kurs ändern",
		images: ["/north-manual/change-course-rt0.png"],
		source: [`${NORTH_MANUAL}, S. 3`],
	},
	{
		id: "leave-enter-ship",
		title: "Von/An Bord gehen",
		images: ["/north-manual/leave-enter-board-rt0.png"],
		source: [`${NORTH_MANUAL}, S. 3`],
	},
	{
		id: "boats",
		title: "Boote",
		images: ["/north-manual/boats-rt0.png"],
		source: [`${NORTH_MANUAL}, S. 3`],
	},
	{
		id: "special-fields-north",
		title: "Meeresfelder, Landfelder, Klippenfelder, Angrenzende Felder",
		images: ["/north-manual/special-fields-rt0.png"],
		source: [`${NORTH_MANUAL}, S. 3`],
	},
	{
		id: "ship-board",
		title: "Auf der Shiffstafel",
		images: ["/north-manual/ship-board-rt0.png"],
		source: [`${NORTH_MANUAL}, S. 3`],
	},
];

export default northManualData;
