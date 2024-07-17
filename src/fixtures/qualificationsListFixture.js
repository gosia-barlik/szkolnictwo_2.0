const qualificationsListFixture = {
  results_count: 16,
  results: [
    {
      id: "12345",
      name: "Administracja",
      type: "kierunek",
      category: null,
      children: [
        {
          name: "Uniwersytet Mikołaja Kopernika w Toruniu",
          id: "123456",
          form: "stacjonarne",
          PRKlevel: "VII",
        },
        {
          name: "Uniwersytet Mikołaja Kopernika w Toruniu",
          id: "1234567",
          form: "niestacjonarne",
          PRKlevel: "VII",
        },
        {
          name: "Uniwersytet Warmińsko-Mazurski w Olsztynie",
          id: "12345678",
          form: "stacjonarne",
          PRKlevel: "VII",
        },
      ],
      skills: ["analizowanie", "dobra pamięć"]
    },
    {
      id: "2346",
      name: "Administracja europejska",
      type: "kwalifikacja",
      category: "studia wyższe",
      children:[],
      skills: ["analizowanie", "dobra pamięć", "dobra organizacja pracy"]
    },
    {
      id: "2346",
      name: "Administracja i cyfryzacja",
      type: "kwalifikacja",
      category: "studia wyższe",
      children:[],
      skills: ["analizowanie", "dobra pamięć", "komunikowanie się"]
    },
    {
      id: "12345",
      name: "Administracja i polityka publiczna",
      type: "kierunek",
      category: null,
      children: [
        {
          name: "Uniwersytet Mikołaja Kopernika w Toruniu",
          id: "123456",
          form: "stacjonarne",
          PRKlevel: "VII",
        },
        {
          name: "Uniwersytet Mikołaja Kopernika w Toruniu",
          id: "1234567",
          form: "niestacjonarne",
          PRKlevel: "VII",
        },
        {
          name: "Uniwersytet Warmińsko-Mazurski w Olsztynie",
          id: "12345678",
          form: "stacjonarne",
          PRKlevel: "VII",
        },
        {
          name: "Uniwersytet Warmińsko-Mazurski w Olsztynie",
          id: "12345678",
          form: "stacjonarne",
          PRKlevel: "VII",
        },
      ],
      skills: ["analizowanie", "dobra pamięć"]
    },

  ],
};
export { qualificationsListFixture };
