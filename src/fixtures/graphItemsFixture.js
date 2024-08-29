const graphItemsFixture = {
  results: [
    {
      id: "AREA_01",
      name: "Poligrafia, foto, audio i film",
      color: "#1090c3",
      children_count: 2,
      parent_id: "0",
    },
    {
      id: "AREA_02",
      name: "Budownictwo i wnętrzarstwo",
      color: "#5cbcca",
      children_count: 3,
      parent_id: "0",
    },
    {
      id: "AREA_03",
      name: "Handel, ekonomia, administracja",
      color: "#db003e",
      children_count: 2,
      parent_id: "0",
    },
    {
      id: "AREA_04",
      name: "Elektryka, elektronika, informatyka",
      color: "#ff195b",
      children_count: 3,
      parent_id: "0",
    },
    {
      id: "AREA_05",
      name: "Moda i uroda",
      color: "#f79136",
      children_count: 2,
      parent_id: "0",
    },
    {
      id: "AREA_06",
      name: "Górnictwo i metalurgia",
      color: "#ffa352",
      children_count: 2,
      parent_id: "0",
    },
    {
      id: "AREA_07",
      name: "Turystyka i gastronomia",
      color: "#80b44f",
      children_count: 2,
      parent_id: "0",
    },
    {
      id: "AREA_08",
      name: "Chemia i ochrona środowiska",
      color: "#60cc50",
      children_count: 1,
      parent_id: "0",
    },
    {
      id: "AREA_09",
      name: "Mechanika i motoryzacja",
      color: "#fec639",
      children_count: 3,
      parent_id: "0",
    },
    {
      id: "AREA_10",
      name: "Zdrowie i bezpieczeństwo",
      color: "#ffce52",
      children_count: 3,
      parent_id: "0",
    },
    {
      id: "AREA_11",
      name: "Hodowla i uprawy",
      color: "#812d7f",
      children_count: 4,
      parent_id: "0",
    },
    {
      id: "AREA_12",
      name: "Transport, spedycja, logistyka",
      color: "#a54f93",
      children_count: 5,
      parent_id: "0",
    },
  ],
};

const graphItemsChildrenFixture = {
  results: [
    {
      id: "SECTOR_08",
      name: "Elektroenergetyczna",
      color: "#1090c3",
      children_count: 7,
      parent_id: "AREA_04",
    },
    {
      id: "SECTOR_09",
      name: "Elektroniczno - mechatroniczna",
      color: "#5cbcca",
      children_count: 7,
      parent_id: "AREA_04",
    },
    {
      id: "SECTOR_10",
      name: "Teleinformatyczna",
      color: "#db003e",
      children_count: 7,
      parent_id: "AREA_04",
    },
  ],
};
export { graphItemsFixture, graphItemsChildrenFixture };
