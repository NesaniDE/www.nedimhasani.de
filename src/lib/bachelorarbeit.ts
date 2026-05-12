export type WorkPackageStatus = "done" | "active" | "todo";

export type WorkPackage = {
  id: number;
  title: string;
  description: string;
  progress: number;
  weight: number;
  status: WorkPackageStatus;
  note?: string;
};

export type Source = {
  ref: number;
  citeKey: string;
  authors: string;
  year: number;
  title: string;
  venue: string;
  doi?: string;
  url?: string;
  available: boolean;
};

export type SourceBlock = {
  id: string;
  title: string;
  sources: Source[];
};

export const thesisMeta = {
  titleDe:
    "Halbautomatische semantische Beschriftung virtueller Szenen zur Unterstützung immersiver Analysen",
  titleEn:
    "Semi-Automatic Semantic Labeling of Virtual Scenes to Support Immersive Analytics",
  examiner: "Prof. Dr. Dieter Schmalstieg",
  supervisor: "Dr. Wolfgang Büschel",
  examinee: "Nedim Hasani",
  startISO: "2026-02-06",
  submissionISO: "2026-08-06",
  snapshotISO: "2026-05-12",
};

export const workPackages: WorkPackage[] = [
  {
    id: 1,
    title: "Literature Review",
    description:
      "Systematische Sichtung der Arbeiten zu XR-Visualisierungen und Semantic Scene Graphs im Kontext immersiver Datenanalyse.",
    progress: 55,
    weight: 1,
    status: "active",
    note:
      "Quellenpaket strukturiert (Blöcke A–F). 12 von 28 Quellen lokal als PDF/JSON archiviert; weitere Beschaffung läuft parallel zur Konzeptphase.",
  },
  {
    id: 2,
    title: "Concept Development",
    description:
      "Entwurf eines Konzepts zur dynamischen Annotation von Unity-Szenengraphen. Klärung, welche Daten automatisch erfasst werden (Properties, Object Classes …) und wo Nutzer-Annotationen nötig sind.",
    progress: 85,
    weight: 1.2,
    status: "active",
    note:
      "Architektur steht: Unity-Komponenten ↔ Server-State ↔ LLM. Datenmodell und Update-Semantik für dynamische Szenen sind festgezogen; Feinjustierung erfolgt parallel zur Implementierung.",
  },
  {
    id: 3,
    title: "Prototype Implementation",
    description:
      "Implementierung als MIRIA-Integration: Unity-Komponenten für dynamische Annotation, serverseitige Verwaltung des Semantic Scene Graph und Anbindung an einen LLM zur Reasoning-Unterstützung.",
    progress: 85,
    weight: 1.6,
    status: "active",
    note:
      "Lokaler Prototyp läuft. Ausstehend: Anpassung an das Ziel-Headset und Tests im VISUS-Labor — danach Übergabe an WP4 (Evaluation).",
  },
  {
    id: 4,
    title: "Qualitative Evaluation",
    description:
      "Vorläufige Evaluation des Prototyps in Form einer qualitativen Nutzerstudie.",
    progress: 0,
    weight: 0.8,
    status: "todo",
  },
  {
    id: 5,
    title: "Thesis Writing",
    description:
      "Ausarbeitung der Bachelorarbeit und Präsentation im VIS-Kolloquium.",
    progress: 0,
    weight: 1.2,
    status: "todo",
  },
  {
    id: 6,
    title: "Demo Video",
    description:
      "Zwei-minütiges Demo-Video zur Vorstellung der Ergebnisse der Thesis.",
    progress: 0,
    weight: 0.4,
    status: "todo",
  },
];

const haveSet = new Set<number>([
  1, 3, 7, 8, 9, 10, 11, 12, 14, 15, 26, 27,
]);

const rawSources: Omit<Source, "available">[] = [
  {
    ref: 1,
    citeKey: "Buschel2021Miria",
    authors: "Büschel, W., Lehmann, A., & Dachselt, R.",
    year: 2021,
    title:
      "MIRIA: A Mixed Reality Toolkit for the In-Situ Visualization and Analysis of Spatio-Temporal Interaction Data",
    venue: "Proc. CHI '21",
    doi: "10.1145/3411764.3445651",
  },
  {
    ref: 2,
    citeKey: "Dogan2024XRObjects",
    authors:
      "Dogan, M. D., Gonzalez, E. J., Ahuja, K., Du, R., Colaço, A., Lee, J., Gonzalez-Franco, M., & Kim, D.",
    year: 2024,
    title: "Augmented Object Intelligence with XR-Objects",
    venue: "Proc. UIST '24",
    doi: "10.1145/3654777.3676379",
  },
  {
    ref: 3,
    citeKey: "Gu2024ConceptGraphs",
    authors:
      "Gu, Q., Kuwajerwala, A., Morin, S., Jatavallabhula, K. M., et al.",
    year: 2024,
    title:
      "ConceptGraphs: Open-Vocabulary 3D Scene Graphs for Perception and Planning",
    venue: "IEEE ICRA 2024",
    doi: "10.1109/ICRA57147.2024.10610243",
  },
  {
    ref: 4,
    citeKey: "Luo2023Pearl",
    authors:
      "Luo, W., Yu, Z., Rzayev, R., Satkowski, M., Gumhold, S., McGinity, M., & Dachselt, R.",
    year: 2023,
    title:
      "Pearl: Physical Environment based Augmented Reality Lenses for In-Situ Human Movement Analysis",
    venue: "Proc. CHI '23",
    doi: "10.1145/3544548.3580715",
  },
  {
    ref: 5,
    citeKey: "Tian2025ChartGPT",
    authors:
      "Tian, Y., Cui, W., Deng, D., Yi, X., Yang, Y., Zhang, H., & Wu, Y.",
    year: 2025,
    title:
      "ChartGPT: Leveraging LLMs to Generate Charts From Abstract Natural Language",
    venue: "IEEE TVCG 31(3)",
    doi: "10.1109/TVCG.2024.3368621",
  },
  {
    ref: 6,
    citeKey: "Wald2020Learning3DSSG",
    authors: "Wald, J., Dhamo, H., Navab, N., & Tombari, F.",
    year: 2020,
    title: "Learning 3D Semantic Scene Graphs From 3D Indoor Reconstructions",
    venue: "IEEE/CVF CVPR 2020",
    doi: "10.1109/CVPR42600.2020.00402",
  },
  {
    ref: 7,
    citeKey: "Qian2022ScalAR",
    authors: "Qian, X., He, F., Hu, X., Wang, T., Ipsita, A., & Ramani, K.",
    year: 2022,
    title:
      "ScalAR: Authoring Semantically Adaptive Augmented Reality Experiences in Virtual Reality",
    venue: "Proc. CHI '22",
    doi: "10.1145/3491102.3517665",
  },
  {
    ref: 8,
    citeKey: "Wu2021IncrementalSSG",
    authors: "Wu, S.-C., Tateno, K., Navab, N., & Tombari, F.",
    year: 2021,
    title: "Incremental 3D Semantic Scene Graph Prediction from RGB Sequences",
    venue: "IEEE/CVF CVPR 2021",
  },
  {
    ref: 9,
    citeKey: "Han2020LiveSemantic3D",
    authors: "Han, L., Zheng, T., Zhu, Y., Xu, L., & Fang, L.",
    year: 2020,
    title: "Live Semantic 3D Perception for Immersive Augmented Reality",
    venue: "IEEE TVCG",
    doi: "10.1109/TVCG.2020.2973477",
  },
  {
    ref: 10,
    citeKey: "Tahara2020RetargetableAR",
    authors: "Tahara, T., Seno, T., Narita, G., & Ishikawa, T.",
    year: 2020,
    title:
      "Retargetable AR: Context-aware Augmented Reality in Indoor Scenes based on 3D Scene Graph",
    venue: "Sony R&D Center",
  },
  {
    ref: 11,
    citeKey: "Hasler2025SpatialReasoner",
    authors: "Häsler, S., & Ackermann, P.",
    year: 2025,
    title: "Spatial Reasoner: A 3D Inference Pipeline for XR Applications",
    venue: "arXiv:2504.18380",
    url: "https://arxiv.org/abs/2504.18380",
  },
  {
    ref: 12,
    citeKey: "Bartoli2025Social3DSG",
    authors:
      "Bartoli, E., Rotondi, D., He, B., Jensfelt, P., Arras, K. O., & Leite, I.",
    year: 2025,
    title:
      "Social 3D Scene Graphs: Modeling Human Actions and Relations for Interactive Service Robots",
    venue: "arXiv:2509.24966",
    url: "https://arxiv.org/abs/2509.24966",
  },
  {
    ref: 13,
    citeKey: "Armeni20193DSG",
    authors:
      "Armeni, I., He, Z.-Y., Gwak, J., Zamir, A. R., Fischer, M., Malik, J., & Savarese, S.",
    year: 2019,
    title:
      "3D Scene Graph: A Structure for Unified Semantics, 3D Space, and Camera",
    venue: "IEEE/CVF ICCV 2019",
    doi: "10.1109/ICCV.2019.00576",
  },
  {
    ref: 14,
    citeKey: "Rosinol2020Dynamic3DSG",
    authors: "Rosinol, A., Gupta, A., Abate, M., Shi, J., & Carlone, L.",
    year: 2020,
    title:
      "3D Dynamic Scene Graphs: Actionable Spatial Perception with Places, Objects, and Humans",
    venue: "RSS 2020 · arXiv:2002.06289",
    url: "https://arxiv.org/abs/2002.06289",
  },
  {
    ref: 15,
    citeKey: "Hughes2022Hydra",
    authors: "Hughes, N., Chang, Y., & Carlone, L.",
    year: 2022,
    title:
      "Hydra: A Real-time Spatial Perception System for 3D Scene Graph Construction and Optimization",
    venue: "RSS 2022 · arXiv:2201.13360",
    url: "https://arxiv.org/abs/2201.13360",
  },
  {
    ref: 16,
    citeKey: "Zhu2023SGGSurvey",
    authors:
      "Zhu, G., Zhang, L., Jiang, Y., Dang, Y., Hou, H., Shen, P., Zhao, X., Shah, S. A. A., & Bennamoun, M.",
    year: 2023,
    title: "Scene Graph Generation: A Comprehensive Survey",
    venue: "Neurocomputing 566",
    doi: "10.1016/j.neucom.2023.127052",
  },
  {
    ref: 17,
    citeKey: "Jatavallabhula2023ConceptFusion",
    authors:
      "Jatavallabhula, K. M., Kuwajerwala, A., Gu, Q., Omama, M., Chen, T., Li, S., et al.",
    year: 2023,
    title: "ConceptFusion: Open-Set Multimodal 3D Mapping",
    venue: "RSS 2023 · arXiv:2302.07241",
    url: "https://arxiv.org/abs/2302.07241",
  },
  {
    ref: 18,
    citeKey: "Ens2021GrandChallenges",
    authors:
      "Ens, B., Bach, B., Cordeil, M., Engelke, U., Serrano, M., Willett, W., et al.",
    year: 2021,
    title: "Grand Challenges in Immersive Analytics",
    venue: "Proc. CHI '21",
    doi: "10.1145/3411764.3446866",
  },
  {
    ref: 19,
    citeKey: "Kraus2022IAAbstractSurvey",
    authors:
      "Kraus, M., Fuchs, J., Sommer, B., Klein, K., Engelke, U., Keim, D., & Schreiber, F.",
    year: 2022,
    title: "Immersive Analytics with Abstract 3D Visualizations: A Survey",
    venue: "Computer Graphics Forum 41(1)",
    doi: "10.1111/cgf.14430",
  },
  {
    ref: 20,
    citeKey: "Fonnet2021SurveyIA",
    authors: "Fonnet, A., & Prié, Y.",
    year: 2021,
    title: "Survey of Immersive Analytics",
    venue: "IEEE TVCG 27(3)",
    doi: "10.1109/TVCG.2019.2929033",
  },
  {
    ref: 21,
    citeKey: "Bressa2022Situated",
    authors:
      "Bressa, N., Kauer, H., Willett, W., Huron, S., & Vermeulen, J.",
    year: 2022,
    title:
      "What's the Situation with Situated Visualization? A Survey and Perspectives on Situatedness",
    venue: "Proc. CHI '22",
    doi: "10.1145/3491102.3517537",
  },
  {
    ref: 22,
    citeKey: "DeLaTorre2024LLMR",
    authors:
      "De La Torre, F., Fang, C. M., Huang, H., Banburski-Fahey, A., Amores Fernandez, J., & Lanier, J.",
    year: 2024,
    title:
      "LLMR: Real-time Prompting of Interactive Worlds using Large Language Models",
    venue: "Proc. CHI '24",
    doi: "10.1145/3613904.3642579",
  },
  {
    ref: 23,
    citeKey: "Kim2025ExplainableXR",
    authors:
      "Kim, Y., Amir, Z., Singh, M. K., Boorboor, S., Mueller, K., & Kaufman, A. E.",
    year: 2025,
    title:
      "Explainable XR: Understanding User Behaviors of XR Environments using LLM-Assisted Analytics Framework",
    venue: "IEEE TVCG",
    doi: "10.1109/TVCG.2025.3549537",
  },
  {
    ref: 24,
    citeKey: "Alves2025LLMinXR",
    authors: "Alves, M., et al.",
    year: 2025,
    title:
      "LLM Integration in Extended Reality: A Comprehensive Review of Current Trends, Challenges, and Future Perspectives",
    venue: "Proc. CHI '25",
    doi: "10.1145/3706598.3714224",
  },
  {
    ref: 25,
    citeKey: "Huang2024LLMSceneGraph",
    authors: "Huang, Z., et al.",
    year: 2024,
    title: "LLM-enhanced Scene Graph Learning for Household Rearrangement",
    venue: "SIGGRAPH Asia 2024",
    doi: "10.1145/3680528.3687607",
  },
  {
    ref: 26,
    citeKey: "Madhavaram2025VIZOR",
    authors: "Madhavaram, V., Sengar, V., De, A., & Sharma, C.",
    year: 2025,
    title:
      "VIZOR: Viewpoint-Invariant Zero-Shot Scene Graph Generation for 3D Scene Reasoning",
    venue: "arXiv:2602.00637",
    url: "https://arxiv.org/abs/2602.00637",
  },
  {
    ref: 27,
    citeKey: "Gunther2026OpenSetMapping",
    authors:
      "Günther, M., Igelbrink, F., Lima, O., Niecksch, L., Renz, M., & Atzmueller, M.",
    year: 2026,
    title: "A Scene Graph Backed Approach to Open Set Semantic Mapping",
    venue: "arXiv:2602.03781",
    url: "https://arxiv.org/abs/2602.03781",
  },
  {
    ref: 28,
    citeKey: "Hubenschmid2022ReLive",
    authors:
      "Hubenschmid, S., Wieland, J., Fink, D. I., Batch, A., Zagermann, J., Elmqvist, N., & Reiterer, H.",
    year: 2022,
    title:
      "ReLive: Bridging In-Situ and Ex-Situ Visual Analytics for Analyzing Mixed Reality User Studies",
    venue: "Proc. CHI '22",
    doi: "10.1145/3491102.3517550",
  },
];

const allSources: Source[] = rawSources.map((s) => ({
  ...s,
  available: haveSet.has(s.ref),
}));

const pick = (refs: number[]): Source[] =>
  refs.map((r) => {
    const s = allSources.find((x) => x.ref === r);
    if (!s) throw new Error(`Missing source ref ${r}`);
    return s;
  });

export const sourceBlocks: SourceBlock[] = [
  {
    id: "A",
    title: "Immersive Analytics & Situated Analysis",
    sources: pick([1, 4, 18, 19, 20, 21, 28]),
  },
  {
    id: "B",
    title: "3D Scene Graphs — Foundations & Methoden",
    sources: pick([3, 6, 8, 13, 14, 15, 16, 17, 26, 27]),
  },
  {
    id: "C",
    title: "Semantische Annotation in AR / VR / XR",
    sources: pick([2, 7, 9, 10, 11, 12]),
  },
  {
    id: "D",
    title: "LLM-gestützte Szenenanalyse & Visualisierung",
    sources: pick([5, 22, 23, 24, 25]),
  },
];

export const sourceStatusSummary = {
  total: allSources.length,
  available: allSources.filter((s) => s.available).length,
};

export const formattedLastUpdate = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "long",
  year: "numeric",
}).format(new Date(thesisMeta.snapshotISO));
