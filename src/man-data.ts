export type ManualData = {
  id: string;
  title: string;
  content?: string;
  images?: string[];
  source: string;
  sourceDetails?: string;
  links?: string[];
};

const LEGEND_1_ACCOMPANING_BOOKLET: string = "Begleitheft Orginalspiel";
const PAGE_1: string = "S. 1";

const data: ManualData[] = [
  {
    id: "farmers",
    title: "Die Bauern",
    content: `Bauern können in die Burg gebracht werden. Für jedes Bauernplättchen, das in die Burg gebracht wird, kann eine Kreatur mehr in die Burg eindringen. Das Bauernplättchen wird dazu auf seine Rückseite gedreht und neben die abgebildeten goldenen Schilde gelegt. Ein Held kann auf das Feld zu einem Bauernplättchen laufen und es mit seiner Figur mitbewegen. Er kann mehrere Bauernplättchen auf einmal mitbewegen. Ein Held kann einen Bauern jederzeit auf einem Feld zurücklassen. Läuft ein Held mit einem Bauern in das Feld einer Kreatur oder betritt eine Kreatur ein Feld mit einem Bauern, ist dieser Bauer sofort geschlagen und kommt aus dem Spiel.`,
    images: ["bauern.png"],
    source: "Losspiel-Anleitung",
    sourceDetails: "S. 3",
  },
  {
    id: "hero-actions",
    title: "Die Aktionen der Helden",
    images: ["hero-actions.png"],
    source: LEGEND_1_ACCOMPANING_BOOKLET,
    sourceDetails: PAGE_1,
  },
];

export default data;
