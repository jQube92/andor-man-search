export type ManualData = {
	id: string;
	title: string;
	images?: string[];
	source: string[];
	links?: string[];
};

const BASE_GAME_ACCOMPANYING_BOOKLET: string = "Begleitheft Orginalspiel";
// const BASE_GAME_FAST_GUIDE: string = "Losspiel-Anleitung";

const data: ManualData[] = [
	{
		id: "hero-actions",
		title: "Die Aktionen der Helden",
		images: ["hero-actions.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 2`],
	},
	{
		id: "course-of-a-fight",
		title: "Ablauf eines Kampfes",
		images: ["course-of-fight-0.png", "course-of-fight-1.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 2`],
	},
	{
		id: "farmers",
		title: "Die Bauern",
		images: ["farmers-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 3`],
	},
	{
		id: "creature-movement",
		title: "Die Bewegung der Kreaturen",
		images: ["creature-movement-0.png", "creature-movement-1.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 2/3`],
	},
];

export default data;
