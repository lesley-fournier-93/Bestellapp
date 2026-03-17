let myDishes = [
  {
    id: "Beliebt",
    headline: "Beliebt",
    name: "Butter Chicken",
    description:
      "Hähnchenbrust mit Butter-Tomaten-Sahne-Currysauce und Gewürzen",
    price: "14.90",
  },
  {
    name: "Special Non Veg Thali",
    description:
      "2 x Chicken-Curry-Gerichte, 1 x Chicken-Vorspeise, 1 Brot, Reis, Nachtisch",
    price: "20.90",
  },
  {
    name: "Chicken Noodles",
    description: "Hühnernudeln mit Gemüse und Sojasauce",
    price: "11.50",
  },
  {
    id: "Salat",
    headline: "Salat",
    name: "Veggie Salat",
    description: "mit Paneer Tikka",
    price: "6.50",
  },
  {
    name: "Chicken Salat",
    description: "mit Chicken Tikka",
    price: "7.90",
  },
  {
    id: "Suppen",
    headline: "Suppen",
    name: "Chicken Soup",
    description: "Hühnersuppe nach indischer Art",
    price: "3.70",
  },
  {
    name: "Veggie Soup",
    description: "cremige Gemüsesuppe aus frischem Gemüse",
    price: "3.50",
  },
  {
    name: "Prawn Soup",
    description: "Garnelensuppe",
    price: "4.60",
  },
  {
    id: "Vorspeisen",
    headline: "Vorspeisen",
    name: "Fried Chicken",
    description: "Hähnchen paniert",
    price: "11.50",
  },
  {
    name: "Chili-Chicken",
    description: "Hähnchenbrust mit Weizenmehl und mild-scharfer Sauce",
    price: "11.40",
  },
  {
    name: "Chicken Manchurian",
    description: "Hähnchenbrust mit Weizenmehl und Sauce",
    price: "11.20",
  },
  {
    name: "Chili-Fish",
    description: "Fisch mit Weizenmehl und mild-scharfer Sauce",
    price: "11.50",
  },
  {
    name: "Fish-Fry",
    description: "Fisch mit exotischen Gewürzen",
    price: "11.40",
  },
  {
    name: "Fish and Chips",
    description: "Fisch mit exotischen Gewürzen und Pommes Frites",
    price: "11.50",
  },
  {
    name: "Chili-Prawns",
    description: "Garnelen mit Gemüse, Chilisauce und Sojasaue",
    price: "13.90",
  },
  {
    id: "VegetarischeVorspeisen",
    headline: "Vegetarische Vorspeisen",
    name: "Samosa (2 Stück)",
    description: "Teigtaschen mit Kartoffelfüllung",
    price: "4.90",
  },
  {
    name: "Mix vegetarische Pakoda",
    description: "mit Mehl und Gewürzen",
    price: "7.70",
  },
  {
    name: "Chili-Paneer",
    description: "Käse mit Gewürzen und Gemüse",
    price: "11.50",
  },
  {
    name: "Chili Potatoes",
    description: "Kartoffeln mit Gemüse, Chilisauce und Sojasauce",
    price: "9.50",
  },
  {
    id: "Special",
    headline: "Special",
    name: "Special Veg Thali",
    description:
      "2 x Curry-Gerichte, 1 x vegetarische-Vorspeise, 1 Brot, Reis, Nachtisch",
    price: "18.90",
  },
  {
    name: "Special Non Veg Thali",
    description:
      "2 x Chicken-Curry-Gerichte, 1 x Chicken-Vorspeise, 1 Brot, Reis, Nachtisch",
    price: "20.90",
  },
  {
    id: "Tandoori",
    headline: "Tandoori",
    name: "Chicken Tikka (eingelegt)",
    description: "Hühnerfleisch mit Joghurt und Gewürzen",
    price: "15.90",
  },
  {
    name: "Fish Tikka (eingelegt)",
    description: "Fisch mit Joghurt und Gewürzen",
    price: "14.50",
  },
  {
    name: "Tandoori Prawn (eingelegt)",
    description: "Riesengarnelen mit Joghurt und Gewürzen",
    price: "16.90",
  },
  {
    name: "Paneer Tikka",
    description: "mit Joghurt und Gewürzen",
    price: "14.90",
  },
  {
    id: "ReisNudelgerichte",
    headline: "Reis- & Nudelgerichte",
    name: "Chicken Noodles",
    description: "Hühnernudeln mit Gemüse und Sojasauce",
    price: "11.50",
  },
  {
    name: "Egg Noodles",
    description: "Eiernudeln mit Gemüse und Sojasauce",
    price: "11.20",
  },
  {
    name: "Basmati Rice",
    description: "Basmatireis",
    price: "3.90",
  },
  {
    name: "Fried Rice (vegetarisch)",
    description: "Reis mit verschiedenem Gemüse",
    price: "11.20",
  },
  {
    name: "Briyani (vegetarisch)",
    description: "Reismischung mit Gemüse",
    price: "11.80",
  },
  {
    name: "Egg Fried Rice",
    description: "Eierreisgemüse mit Gewürzen",
    price: "11.50",
  },
  {
    name: "Chicken Fried Rice",
    description: "mit Reis, Hühnerfleisch und Gemüsee",
    price: "11.90",
  },
  {
    name: "Chicken Biryani",
    description: "mit Basmatireis, Gewürzen und Hähnchen",
    price: "13.50",
  },
  {
    name: "Lamb Biryani",
    description: "Reis mit Lammfleisch",
    price: "14.90",
  },
  {
    name: "Prawn Biryani",
    description: "Basmatireis mit Garnelen",
    price: "14.90",
  },
  {
    id: "Currygerichte",
    headline: "Currygerichte",
    name: "Butter Chicken",
    description:
      "Hähnchenbrust mit Butter-Tomaten-Sahne-Currysauce und Gewürzen",
    price: "14.90",
  },
  {
    name: "Kadai Chicken",
    description:
      "mit Zwiebeln, Paprika, Ingwer, Tomaten, Kräutern und Gewürzen",
    price: "14.80",
  },
  {
    name: "Chicken Curry (pikant)",
    description: "mit verschiedenen Gewürzen",
    price: "14.50",
  },
  {
    name: "Cream Chicken",
    description: "mit Curry-Sahnesauce, Butter und Cashewnüssen",
    price: "14.80",
  },
  {
    name: "Mango Chicken",
    description: "mit Spezial-Mangosauce",
    price: "14.90",
  },
  {
    name: "Chicken Tikka Masala",
    description: "Hähnchenfleisch eingelegt in Joghurt und Gewürzen",
    price: "14.80",
  },
  {
    name: "Special Chicken",
    description: "mit Zwiebeln, Tomaten und Gewürzen",
    price: "15.90",
  },
  {
    name: "Fish Curry",
    description: "mit Fisch und Gewürzen",
    price: "14.60",
  },
  {
    name: "Prawn Masala",
    description: "mit Garnelen",
    price: "14.90",
  },
  {
    name: "Palak Chicken",
    description: "Hühnerfleisch in sahniger Spinatsauce",
    price: "14.50",
  },
  {
    name: "Chicken Vindaloo (sehr scharf)",
    description: "Hühnercurry mit indischen Gewürzen und Kartoffeln",
    price: "14.80",
  },
  {
    name: "Chicken Korma",
    description: "Hühnerfleisch in Kokossauce, gewürzt mit frischer Sahne",
    price: "14.80",
  },
  {
    id: "LammCurry",
    headline: "Lamm-Curry",
    name: "Lamb Tikka Masala",
    description: "mit Paprika und Zwiebeln",
    price: "15.50",
  },
  {
    name: "Kadai Lamb",
    description: "mit Paprika und Zwiebeln",
    price: "15.70",
  },
  {
    name: "Special Lamb",
    description: "mit Zwiebeln, Tomaten und Creme",
    price: "15.90",
  },
  {
    id: "IndischesBrot",
    headline: "Indisches Brot",
    name: "Butter Naan",
    description: "indische Brot mit Butter",
    price: "2.80",
  },
  {
    name: "Kulcha (gefüllt)",
    description: "Brot mit Kartoffeln",
    price: "3.50",
  },
  {
    name: "Peshawari Naan",
    description: "indische Brot mit Butter",
    price: "3.80",
  },
  {
    id: "Kindergerichte",
    headline: "Kindergerichte",
    name: "Chota Bheem",
    description: "Chicken Tikka mit Pommes und Salat",
    price: "7.90",
  },
  {
    name: "Disneyland",
    description: "Cremiges Hähnchenfleisch mit Pommes und Salat",
    price: "7.90",
  },
  {
    id: "alkoholischeGetränke",
    headline: "alkoholische Getränke",
    name: "Weißwein 0,7l",
    price: "12.00",
  },
  {
    name: "Rosewein 0,7l",
    price: "12.00",
  },
  {
    name: "Rotwein 0,7l",
    price: "12.00",
  },
  {
    name: "Indian Kingfisher Premium Beer 0,33l",
    price: "3.90",
  },
  {
    id: "GetränkeOhneAlkohol",
    headline: "Getränke(ohne Alkohol)",
    name: "Cola 0,5l",
    price: "5.90",
  },
  {
    name: "Cola 0,33l",
    price: "3.90",
  },
  {
    name: "Fanta 0,5l",
    price: "5.90",
  },
  {
    name: "Fanta 0,33l",
    price: "3.90",
  },
  {
    name: "Sprite 0,5l",
    price: "5.90",
  },
  {
    name: "Sprite 0,5l",
    price: "3.90",
  },
  {
    name: "Wasser 0,7l",
    price: "4.90",
  },
  {
    name: "Wasser 0,33l",
    price: "2.90",
  },
];



