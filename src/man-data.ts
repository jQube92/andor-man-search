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
		id: "gors",
		title: "Gor",
		images: ["creatures-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "skrals",
		title: "Skral",
		images: ["creatures-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "troll",
		title: "Troll",
		images: ["creatures-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "wardraks",
		title: "Wardraks",
		images: ["creatures-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "dark-mage",
		title: "Dunkler Magier",
		images: ["base-game-other-figures-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "story-teller",
		title: "Erzähler",
		images: ["base-game-other-figures-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "tower",
		title: "Turm",
		images: ["base-game-other-figures-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "dragon",
		title: "Drache",
		images: ["base-game-other-figures-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "silver-start-event-card",
		title: "Silberne Start-Ereigniskarte",
		images: ["base-game-cards-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "silver-event-card",
		title: "Silberne Ereigniskarte",
		images: ["base-game-cards-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "gold-event-card",
		title: "Goldene Ereigniskarte",
		images: ["base-game-cards-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "event-card-secret-lake",
		title: "Ereigniskarte 'Geheimer See'",
		images: ["base-game-cards-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "fate-card",
		title: "Schicksalskarte",
		images: ["base-game-cards-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "heroes",
		title: "Helden",
		images: ["heroes-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "gold",
		title: "Goldplättchen",
		images: ["gold-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "poison",
		title: "Gift",
		images: ["poison-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "star",
		title: "Sternchen",
		images: ["star-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "well",
		title: "Brunnenplättchen",
		images: ["well-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "rubble",
		title: "Geröllplättchen",
		images: ["rubble-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "parchment",
		title: "Pergamente",
		images: ["parchment-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "gems",
		title: "Edelsteine",
		images: ["gems-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "gems",
		title: "Edelsteine",
		images: ["gems-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "red-x",
		title: "Rotes X",
		images: ["red-x-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "gear",
		title: "Ausrüstungsgegenstände",
		images: ["gear-chips-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "creature-platelets",
		title: "Kreaturenplättchen",
		images: ["creature-platelets-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "n-platelets",
		title: "'N'-Plättchen",
		images: ["n-platelets-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "hero-actions",
		title: "Aktionen der Helden",
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
		title: "Bauern",
		images: ["farmers-0.png", "farmers-chips-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 3`],
	},
	{
		id: "creature-movement",
		title: "Bewegung der Kreaturen",
		images: ["creature-movement-0.png", "creature-movement-1.png", "creatures-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 2/3`],
	},
	{
		id: "healing-herbs",
		title: "Heilkräuter",
		images: ["healing-herbs-0.png", "healing-herbs-chips-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 3`],
	},
	{
		id: "fog-platelets",
		title: "Nebelplättchen",
		images: ["fog-platelets-0.png", "fog-platelets-chips-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 3`],
	},
	{
		id: "witch",
		title: "Hexe",
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
		title: "Schildzwerge",
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
		title: "Helm",
		images: ["helmet-0.png", "gear-chips-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1/3`],
	},
	{
		id: "shield",
		title: "Schild",
		images: ["gear-chips-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "bow",
		title: "Bogen",
		images: ["gear-chips-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "falcon",
		title: "Falke",
		images: ["gear-chips-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "drinking-hose",
		title: "Trinkschlauch",
		images: ["gear-chips-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "telescope",
		title: "Fernrohr",
		images: ["gear-chips-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "which-drank",
		title: "Trank der Hexe",
		images: ["gear-chips-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 1`],
	},
	{
		id: "checklist",
		title: "Checkliste",
		images: ["checklist-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 3`],
	},
	{
		id: "rank-numbers",
		title: "Rangzahlen",
		images: ["rank-number-0.png"],
		source: [`${BASE_GAME_ACCOMPANYING_BOOKLET}, S. 3`],
	},
];

export default data;
