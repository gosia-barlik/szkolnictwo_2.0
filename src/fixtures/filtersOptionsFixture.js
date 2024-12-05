const filtersOptionsFixture = {
  results: {
    voivodeships: [
      { name: "Dolnośląskie", id: 1 },
      { name: "Kujawsko-Pomorskie", id: 2 },
      { name: "Lubuskie", id: 3 },
      { name: "Łódzkie", id: 4 },
      { name: "Lubelskie", id: 5 },
    ],
    PRKLevels: [
      { name: "I", id: 1 },
      { name: "II", id: 2 },
      { name: "III", id: 3 },
      { name: "IV", id: 4 },
    ],
    demands: [
      { name: "istotne", id: 1 },
      { name: "umiarkowane", id: 2 },
      { name: "nieujete w prognozie", id: 3 },
    ],
    salaries: [
      { name: "poniżej przeciętnej", id: 1 },
      { name: "przeciętne", id: 2 },
      { name: "powyżej przeciętnej", id: 3 },
    ],
    areas: [
      {
        id: 1,
        name: "Poligrafia, foto, audio i film",
        industries: [
          {
            id: 1,
            name: "Audiowizualna",
            fields: [
              { id: 1, name: "Budowa i strojenie fortepianów i pianin" },
              { id: 2, name: "Fotografia" },
            ],
          },
          {
            id: 2,
            name: "Poligraficzno - księgarska",
            fields: [
              { id: 3, name: "Field1" },
              { id: 4, name: "Field2" },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Budownictwo i wnętrzarstwo",
        industries: [
          {
            id: 3,
            name: "Budowlana",
            fields: [
              { id: 5, name: "Field5" },
              { id: 6, name: "Field6" },
            ],
          },
          {
            id: 4,
            name: "Drzewno - meblarska",
            fields: [
              { id: 7, name: "Field7" },
              { id: 8, name: "Field8" },
            ],
          },
          {
            id: 5,
            name: "Ceramiczno - szklarska",
            fields: [
              { id: 9, name: "Field9" },
              { id: 10, name: "Field10" },
            ],
          },
        ],
      },
      {
        id: 3,
        name: "Chemia i ochrona środowiska",
        industries: [
          {
            id: 6,
            name: "Chemiczna i ochrony środowiska",
            fields: [
              { id: 11, name: "Field11" },
              { id: 12, name: "Field12" },
            ],
          },
        ],
      },
      {
        id: 4,
        name: "Transport, spedycja, logistyka",
        industries: [
          {
            id: 7,
            name: "Spedycyjno - logistyczna",
            fields: [
              { id: 13, name: "Field13" },
              { id: 14, name: "Field14" },
            ],
          },
          {
            id: 8,
            name: "Transportu drogowego",
            fields: [
              { id: 15, name: "Field15" },
              { id: 16, name: "Field16" },
            ],
          },
          {
            id: 9,
            name: "Transportu kolejowego",
            fields: [
              { id: 17, name: "Field17" },
              { id: 18, name: "Field18" },
            ],
          },
          {
            id: 10,
            name: "Transportu lotniczego",
            fields: [
              { id: 19, name: "Field19" },
              { id: 20, name: "Field20" },
            ],
          },
        ],
      },
      {
        id: 5,
        name: "Handel, ekonomia, administracja",
        industries: [
          {
            id: 11,
            name: "Handlowa",
            fields: [
              { id: 21, name: "Field21" },
              { id: 22, name: "Field22" },
            ],
          },
          {
            id: 12,
            name: "Ekonomiczno - administracyjna",
            fields: [
              { id: 23, name: "Field23" },
              { id: 24, name: "Field24" },
            ],
          },
        ],
      },
      {
        id: 6,
        name: "Elektryka, elektronika, informatyka",
        industries: [
          {
            id: 13,
            name: "Elektroenergetyczna",
            fields: [
              { id: 25, name: "Field25" },
              { id: 26, name: "Field26" },
            ],
          },
          {
            id: 14,
            name: "Elektroniczno - mechatroniczna",
            fields: [
              { id: 27, name: "Field27" },
              { id: 28, name: "Field28" },
            ],
          },
          {
            id: 15,
            name: "Teleinformatyczna",
            fields: [
              { id: 29, name: "Field29" },
              { id: 30, name: "Field30" },
            ],
          },
        ],
      },
      {
        id: 7,
        name: "Moda i uroda",
        industries: [
          {
            id: 16,
            name: "Fryzjersko - kosmetyczna",
            fields: [
              { id: 31, name: "Field31" },
              { id: 32, name: "Field32" },
            ],
          },
          {
            id: 17,
            name: "Przemysłu mody",
            fields: [
              { id: 33, name: "Field33" },
              { id: 34, name: "Field34" },
            ],
          },
        ],
      },
      {
        id: 8,
        name: "Górnictwo i metalurgia",
        industries: [
          {
            id: 18,
            name: "Górniczo - wiertnicza",
            fields: [
              { id: 35, name: "Field35" },
              { id: 36, name: "Field36" },
            ],
          },
          {
            id: 19,
            name: "Metalurgiczna",
            fields: [
              { id: 37, name: "Field37" },
              { id: 38, name: "Field38" },
            ],
          },
        ],
      },
      {
        id: 9,
        name: "Turystyka i gastronomia",
        industries: [
          {
            id: 20,
            name: "Hotelarsko - gastronomiczno - turystyczna",
            fields: [
              { id: 39, name: "Field39" },
              { id: 40, name: "Field40" },
            ],
          },
          {
            id: 21,
            name: "Spożywcza",
            fields: [
              { id: 41, name: "Field41" },
              { id: 42, name: "Field42" },
            ],
          },
        ],
      },
      {
        id: 10,
        name: "Mechanika i motoryzacja",
        industries: [
          {
            id: 22,
            name: "Motoryzacyjna",
            fields: [
              { id: 43, name: "Field43" },
              { id: 44, name: "Field44" },
            ],
          },
          {
            id: 23,
            name: "Mechaniczna",
            fields: [
              { id: 45, name: "Field45" },
              { id: 46, name: "Field46" },
            ],
          },
          {
            id: 24,
            name: "Mechaniki precyzyjnej",
            fields: [
              { id: 47, name: "Field47" },
              { id: 48, name: "Field48" },
            ],
          },
        ],
      },
      {
        id: 11,
        name: "Zdrowie i bezpieczeństwo",
        industries: [
          {
            id: 25,
            name: "Opieki zdrowotnej",
            fields: [
              { id: 49, name: "Field49" },
              { id: 50, name: "Field50" },
            ],
          },
          {
            id: 26,
            name: "Pomocy społecznej",
            fields: [
              { id: 51, name: "Field51" },
              { id: 52, name: "Field52" },
            ],
          },
          {
            id: 27,
            name: "Ochrony bezpieczeństwa osób i mienia",
            fields: [
              { id: 53, name: "Field53" },
              { id: 54, name: "Field54" },
            ],
          },
        ],
      },
      {
        id: 12,
        name: "Hodowla i uprawy",
        industries: [
          {
            id: 28,
            name: "Ogrodnicza",
            fields: [
              { id: 55, name: "Field55" },
              { id: 56, name: "Field56" },
            ],
          },
          {
            id: 29,
            name: "Rolno - hodowlana",
            fields: [
              { id: 56, name: "Field56" },
              { id: 58, name: "Field58" },
            ],
          },
          {
            id: 30,
            name: "Rybacka",
            fields: [
              { id: 59, name: "Field59" },
              { id: 60, name: "Field60" },
            ],
          },
          {
            id: 31,
            name: "Leśna",
            fields: [
              { id: 61, name: "Field61" },
              { id: 62, name: "Field62" },
            ],
          },
        ],
      },
    ],
  },
};
export { filtersOptionsFixture };
