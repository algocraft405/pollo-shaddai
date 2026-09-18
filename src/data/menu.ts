export type MenuItem = {
  name: string;
  nameEs: string;
  description: string;
  descriptionEs: string;
  price: string;
  popular?: boolean;
};

export type MenuCategory = {
  id: string;
  name: string;
  nameEs: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "shaddai",
    name: "Pollo Shaddai",
    nameEs: "Pollo Shaddai",
    items: [
      {
        name: "Pollo Shaddai",
        nameEs: "Pollo Shaddai",
        description:
          "Two pieces of crispy Guatemalan fried chicken with two sides — rice, beans, Russian salad, or fries.",
        descriptionEs:
          "Dos piezas de pollo frito chapín con dos combinaciones: arroz, frijoles, ensalada rusa o papas fritas.",
        price: "13.24",
        popular: true,
      },
      {
        name: "Shaddai Loco",
        nameEs: "Shaddai Loco",
        description:
          "Crispy fried chicken over seasoned fries, drizzled with creamy sauces and fresh toppings.",
        descriptionEs:
          "Pollo frito crujiente sobre papas sazonadas, con salsas cremosas y toppings frescos.",
        price: "15.74",
        popular: true,
      },
      {
        name: "Super Shaddai",
        nameEs: "Súper Shaddai",
        description:
          "A loaded plate with rice, beans, Russian salad, mashed potatoes, fries, charro beans, cabbage salad, and plantains.",
        descriptionEs:
          "Plato cargado con arroz, frijoles, ensalada rusa, puré, papas, frijoles charros, ensalada de repollo y plátanos.",
        price: "19.74",
      },
      {
        name: "Combo Shaddai",
        nameEs: "Combo Shaddai",
        description:
          "Eight pieces of fried chicken with three sides of your choice.",
        descriptionEs:
          "Ocho piezas de pollo frito con tres combinaciones a su elección.",
        price: "29.74",
        popular: true,
      },
      {
        name: "Family Shaddai",
        nameEs: "Family Shaddai",
        description: "Family-size chicken feast with tortillas, salsa, and lime.",
        descriptionEs:
          "Pollo familiar con tortillas, salsa y limón. Perfecto para compartir.",
        price: "47.75",
      },
      {
        name: "Fiesta Shaddai",
        nameEs: "Fiesta Shaddai",
        description: "The big celebration platter — enough chicken for the whole table.",
        descriptionEs: "El platón de fiesta — pollo suficiente para toda la mesa.",
        price: "87.75",
      },
    ],
  },
  {
    id: "asados",
    name: "Asados",
    nameEs: "Asados",
    items: [
      {
        name: "Pollo Shaddai Asado",
        nameEs: "Pollo Shaddai Asado",
        description:
          "Grilled chicken with your choice of sides: rice, beans, Russian salad, mashed potatoes, fries, or plantains.",
        descriptionEs:
          "Pollo asado con acompañamientos: arroz, frijoles, ensalada rusa, puré, papas o plátanos.",
        price: "14.25",
      },
      {
        name: "Super Asado",
        nameEs: "Súper Asado",
        description:
          "Grilled chicken combination with rice, beans, Russian salad, and more house sides.",
        descriptionEs:
          "Combinación de pollo asado con arroz, frijoles, ensalada rusa y más acompañamientos.",
        price: "20.74",
      },
      {
        name: "Shaddai Fajita",
        nameEs: "Shaddai Fajita",
        description:
          "Grilled meats and vegetables with peppers and onions, served with tortillas, guacamole, and crema.",
        descriptionEs:
          "Carnes y vegetales a la parrilla con pimientos y cebolla, tortillas, guacamole y crema.",
        price: "27.74",
      },
    ],
  },
  {
    id: "carnes",
    name: "Steaks & Meats",
    nameEs: "Carnes",
    items: [
      {
        name: "Steak Shaddai",
        nameEs: "Steak Shaddai",
        description:
          "Carne asada with two pieces of fried chicken, rice, beans, fried plantain, chile, cebollín, and tortillas.",
        descriptionEs:
          "Carne asada con dos piezas de pollo frito, arroz, frijoles, plátano frito, chile, cebollín y tortillas.",
        price: "25.74",
        popular: true,
      },
      {
        name: "Carne Asada",
        nameEs: "Carne Asada",
        description:
          "Grilled steak with rice, beans, lettuce, pico de gallo, sour cream, and tortillas.",
        descriptionEs:
          "Carne asada con arroz, frijoles, lechuga, pico de gallo, crema y tortillas.",
        price: "21.74",
      },
      {
        name: "Steak Maya",
        nameEs: "Steak Maya",
        description:
          "Carne asada with caramelized onions and salsa ranchera, charro beans, and all the fixings.",
        descriptionEs:
          "Carne asada con cebolla caramelizada y salsa ranchera, frijoles charros y todos los acompañamientos.",
        price: "21.74",
      },
      {
        name: "Steak & Camarones",
        nameEs: "Steak y Camarones",
        description: "Carne asada with prepared shrimp, rice, beans, and tortillas.",
        descriptionEs:
          "Carne asada con camarones preparados, arroz, frijoles y tortillas.",
        price: "26.74",
      },
      {
        name: "Camarones a la Plancha",
        nameEs: "Camarones a la Plancha",
        description:
          "Grilled shrimp with rice, guacamole, salsa, lettuce, and sour cream.",
        descriptionEs:
          "Camarones a la plancha con arroz, guacamole, salsa, lechuga y crema.",
        price: "23.75",
      },
    ],
  },
  {
    id: "platos",
    name: "Chapín Plates",
    nameEs: "Platos Chapines",
    items: [
      {
        name: "Pepían",
        nameEs: "Pepían",
        description:
          "Tender chicken in a rich, roasted-spice Guatemalan sauce, served with rice.",
        descriptionEs:
          "Pollo tierno en una salsa chapina de especias tostadas, servido con arroz.",
        price: "15.74",
        popular: true,
      },
      {
        name: "Jocón",
        nameEs: "Jocón",
        description:
          "Chicken in a bright green tomatillo and cilantro sauce with seasoned rice.",
        descriptionEs:
          "Pollo en salsa verde de tomate y cilantro, con arroz sazonado.",
        price: "15.74",
      },
      {
        name: "Guisado de Res",
        nameEs: "Guisado de Res",
        description: "Beef stew with carrots and potatoes in a rich sauce, served with rice.",
        descriptionEs:
          "Guisado de res con zanahoria y papa en salsa rica, servido con arroz.",
        price: "16.25",
      },
      {
        name: "Empanadas Guatemaltecas",
        nameEs: "Empanadas Guatemaltecas",
        description:
          "Chicken, cheese, and mushroom turnovers topped with crema, lettuce, and fresh cheese.",
        descriptionEs:
          "Empanadas de pollo, queso y champiñones con crema, lechuga y queso fresco.",
        price: "13.75",
        popular: true,
      },
      {
        name: "Taquitos Dorados",
        nameEs: "Taquitos Dorados",
        description:
          "Crispy rolled chicken tacos with lettuce, sour cream, pico, and fresh cheese.",
        descriptionEs:
          "Taquitos de pollo dorados con lechuga, crema, pico y queso fresco.",
        price: "13.75",
      },
      {
        name: "Garnachas",
        nameEs: "Garnachas",
        description:
          "Mini corn tortillas topped with seasoned meat, cabbage, cheese, and red salsa.",
        descriptionEs:
          "Tortillitas con carne sazonada, repollo, queso y salsa roja.",
        price: "11.75",
      },
    ],
  },
  {
    id: "caldos",
    name: "Caldos",
    nameEs: "Caldos",
    items: [
      {
        name: "Caldo de Res",
        nameEs: "Caldo de Res",
        description:
          "Beef, corn, and carrots in a rich broth. Served with rice, onion, jalapeño, and lime.",
        descriptionEs:
          "Res, elote y zanahoria en caldo rico. Con arroz, cebolla, jalapeño y limón.",
        price: "17.75",
      },
      {
        name: "Caldo de Gallina Criolla",
        nameEs: "Caldo de Gallina Criolla",
        description:
          "Hen soup with pasta, potatoes, and carrots. Served with lime, jalapeño, cilantro, and rice.",
        descriptionEs:
          "Caldo de gallina con pasta, papa y zanahoria. Con limón, jalapeño, cilantro y arroz.",
        price: "17.75",
      },
      {
        name: "Caldo de Marisco",
        nameEs: "Caldo de Marisco",
        description: "A generous seafood broth with shrimp and shellfish, cilantro, and lime.",
        descriptionEs:
          "Caldo abundante de mariscos con camarón, cilantro y limón.",
        price: "26.74",
        popular: true,
      },
    ],
  },
  {
    id: "tacos",
    name: "Tacos, Burritos & Quesadillas",
    nameEs: "Tacos, Burritos y Quesadillas",
    items: [
      {
        name: "Street Taco",
        nameEs: "Taco de la Calle",
        description: "Asada, pastor, or pollo on a corn tortilla with onion and cilantro.",
        descriptionEs:
          "Asada, pastor o pollo en tortilla de maíz con cebolla y cilantro.",
        price: "5.75",
      },
      {
        name: "American Taco",
        nameEs: "Taco Americano",
        description: "Flour tortilla with meat, lettuce, tomato, cheese, and crema.",
        descriptionEs:
          "Tortilla de harina con carne, lechuga, tomate, queso y crema.",
        price: "6.25",
      },
      {
        name: "Burrito",
        nameEs: "Burrito",
        description:
          "Rice, beans, crema, lettuce, cheese, and pico — asada, pollo, pastor, or shrimp.",
        descriptionEs:
          "Arroz, frijoles, crema, lechuga, queso y pico — asada, pollo, pastor o camarón.",
        price: "13.75",
      },
      {
        name: "Quesadilla",
        nameEs: "Quesadilla",
        description: "Melted cheese with asada, pollo, pastor, or shrimp. Pico, guacamole, and crema.",
        descriptionEs:
          "Queso derretido con asada, pollo, pastor o camarón. Pico, guacamole y crema.",
        price: "13.75",
      },
    ],
  },
  {
    id: "wings",
    name: "Tenders & Wings",
    nameEs: "Tenders y Alitas",
    items: [
      {
        name: "Chicken Tenders",
        nameEs: "Tenders de Pollo",
        description: "Crispy tenders — 4, 6, 8, 12, 16, or 20 pieces.",
        descriptionEs: "Tenders crujientes — 4, 6, 8, 12, 16 o 20 piezas.",
        price: "8.75+",
      },
      {
        name: "Chicken Wings",
        nameEs: "Alitas",
        description: "BBQ, Buffalo, Chipotle, or Mango Habanero. 6 to 20 pieces.",
        descriptionEs: "BBQ, Buffalo, Chipotle o Mango Habanero. De 6 a 20 piezas.",
        price: "10.74+",
      },
      {
        name: "Tender Loca",
        nameEs: "Tender Loca",
        description: "Tenders piled with steak, chicken, shrimp, chorizo, peppers, and cheese.",
        descriptionEs:
          "Tenders con bistec, pollo, camarón, chorizo, pimientos y queso.",
        price: "15.25",
      },
    ],
  },
  {
    id: "antojitos",
    name: "Antojitos",
    nameEs: "Antojitos",
    items: [
      {
        name: "Papa Preparada",
        nameEs: "Papa Preparada",
        description: "Crispy fries with green and red sauces and a creamy drizzle.",
        descriptionEs:
          "Papas fritas con salsas verde y roja y un toque cremoso.",
        price: "5.50+",
        popular: true,
      },
      {
        name: "Elote Loco",
        nameEs: "Elote Loco",
        description: "Grilled corn with mayo, chili, cheese, and cilantro sauce.",
        descriptionEs: "Elote asado con mayonesa, chile, queso y salsa de cilantro.",
        price: "7.25",
      },
      {
        name: "Plátanos Fritos",
        nameEs: "Plátanos Fritos",
        description: "Fried plantains with sour cream and queso fresco.",
        descriptionEs: "Plátanos fritos con crema y queso fresco.",
        price: "7.74",
      },
      {
        name: "Rellenitos",
        nameEs: "Rellenitos",
        description: "Sweet plantain balls filled with black bean paste — a chapín classic.",
        descriptionEs:
          "Bolitas de plátano rellenas de frijol negro — un clásico chapín.",
        price: "6.00",
      },
      {
        name: "Pupusas",
        nameEs: "Pupusas",
        description: "Corn tortillas stuffed with cheese, beans, and/or pork.",
        descriptionEs: "Tortillas de maíz rellenas de queso, frijol y/o chicharrón.",
        price: "5.75",
      },
      {
        name: "Shuco Guatemalteco",
        nameEs: "Shuco Guatemalteco",
        description: "Guatemalan-style sausage sandwich with cabbage slaw and lime.",
        descriptionEs: "Pan con salchicha chapina, ensalada de repollo y limón.",
        price: "16.75",
      },
    ],
  },
  {
    id: "sides",
    name: "Sides",
    nameEs: "Acompañamientos",
    items: [
      {
        name: "Ensalada Rusa",
        nameEs: "Ensalada Rusa",
        description: "Potato salad with carrots, peas, and mayo — a Guatemalan staple.",
        descriptionEs:
          "Ensalada de papa con zanahoria, arvejas y mayonesa — un básico chapín.",
        price: "4.50+",
      },
      {
        name: "Rice or Beans",
        nameEs: "Arroz o Frijoles",
        description: "House rice or slow-cooked beans, small or large.",
        descriptionEs: "Arroz de la casa o frijoles de olla, chico o grande.",
        price: "4.50+",
      },
      {
        name: "Charro Beans",
        nameEs: "Frijoles Charros",
        description: "Pinto beans simmered with bacon, onion, tomato, and cilantro.",
        descriptionEs:
          "Frijoles de olla con tocino, cebolla, tomate y cilantro.",
        price: "5.50+",
      },
      {
        name: "Homestyle Mashed Potatoes",
        nameEs: "Puré Casero",
        description: "Creamy mashed potatoes finished with butter and cheese.",
        descriptionEs: "Puré cremoso con mantequilla y queso.",
        price: "4.50+",
      },
      {
        name: "Pieza de Pollo Frito",
        nameEs: "Pieza de Pollo Frito",
        description: "A single piece of crispy Guatemalan fried chicken.",
        descriptionEs: "Una pieza de pollo frito chapín crujiente.",
        price: "4.75",
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks & Dessert",
    nameEs: "Bebidas y Postres",
    items: [
      {
        name: "Aguas Frescas",
        nameEs: "Aguas Frescas",
        description: "Horchata, lemonade, and tropical fruit waters.",
        descriptionEs: "Horchata, limonada y aguas de frutas tropicales.",
        price: "Market",
        popular: true,
      },
      {
        name: "Atoles Guatemaltecos",
        nameEs: "Atoles Guatemaltecos",
        description: "Warm atoles — rice milk, corn, banana, chocolate, and more.",
        descriptionEs: "Atoles calientes — arroz, maíz, plátano, chocolate y más.",
        price: "5.75",
      },
      {
        name: "Café Guatemalteco",
        nameEs: "Café Guatemalteco",
        description: "Rich, aromatic coffee from Guatemalan beans.",
        descriptionEs: "Café aromático de grano guatemalteco.",
        price: "5.25",
      },
      {
        name: "Smoothies",
        nameEs: "Licuados",
        description: "Mango, pineapple, strawberry, banana, or mangonada.",
        descriptionEs: "Mango, piña, fresa, banano o mangonada.",
        price: "7.75",
      },
      {
        name: "Chocobanano",
        nameEs: "Chocobanano",
        description: "Frozen banana dipped in chocolate — the classic street treat.",
        descriptionEs: "Banano congelado cubierto de chocolate — el antojo clásico.",
        price: "5.74",
      },
    ],
  },
];
