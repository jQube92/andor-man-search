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
		images: ["farmers-0.png", "farmers-chips-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 3`],
	},
	{
		id: "creature-movement",
		title: "Die Bewegung der Kreaturen",
		images: ["creature-movement-0.png", "creature-movement-1.png", "creatures-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 2/3`],
	},
	{
		id: "healing-herbs",
		title: "Die Heilkräuter",
		images: ["healing-herbs-0.png", "healing-herbs-chips-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 3`],
	},
	{
		id: "fog-platelets",
		title: "Die Nebelplättchen",
		images: ["fog-platelets-0.png", "fog-platelets-chips-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 3`],
	},
	{
		id: "witch",
		title: "Die Hexe",
		images: ["witch-0.png", "witch-chips-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 3`],
	},
	{
		id: "thorald",
		title: "Prinz Thorald",
		images: ["thorald-0.png", "thorald-chips-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 3`],
	},
	{
		id: "shield-dwarfs",
		title: "Die Schildzwerge",
		images: ["shield-dwarfs-0.png", "shield-dwarfs-chips-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 3`],
	},
	{
		id: "golden-shields",
		title: "Die goldenen Schilde",
		images: ["golden-shields-0.png", "golden-shields-chips-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 3`],
	},
	{
		id: "helmet",
		title: "Der Helm",
		images: ["helmet-0.png", "gear-chips-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 3`],
	},
	{
		id: "checklist",
		title: "Die Checkliste",
		images: ["checklist-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 3`],
	},
	{
		id: "rank-numbers",
		title: "Die Rangzahlen",
		images: ["rank-number-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 3`],
	},
];

export default data;
