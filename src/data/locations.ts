export type LocationHours = {
  days: string;
  daysEs: string;
  time: string;
  timeEs?: string;
};

export type Location = {
  id: string;
  city: string;
  neighborhood: string;
  address: string;
  cityState: string;
  phone?: string;
  phoneHref?: string;
  hours: LocationHours[];
  mapQuery: string;
  orderUrl?: string;
  orderLabel?: string;
  badge?: string;
  badgeEs?: string;
  note?: string;
  noteEs?: string;
};

export const locations: Location[] = [
  {
    id: "cincinnati",
    city: "Cincinnati",
    neighborhood: "Wyoming",
    address: "710 W Wyoming Ave",
    cityState: "Cincinnati, OH 45215",
    phone: "(513) 834-6503",
    phoneHref: "tel:+15138346503",
    hours: [
      { days: "Sun – Thu", daysEs: "Dom – Jue", time: "7:00 AM – 9:00 PM" },
      { days: "Fri – Sat", daysEs: "Vie – Sáb", time: "7:00 AM – 10:00 PM" },
    ],
    mapQuery: "710 W Wyoming Ave, Cincinnati, OH 45215",
    orderUrl: "https://www.ubereats.com/store/pollo-shaddai/GD-0poi8RPmoG8S0UQooEQ",
    orderLabel: "Uber Eats",
  },
  {
    id: "fairfield",
    city: "Fairfield",
    neighborhood: "Dixie Hwy",
    address: "6130 Dixie Hwy",
    cityState: "Fairfield, OH 45014",
    phone: "(513) 682-2231",
    phoneHref: "tel:+15136822231",
    hours: [{ days: "Daily", daysEs: "Todos los días", time: "10:00 AM – 10:00 PM" }],
    mapQuery: "6130 Dixie Hwy, Fairfield, OH 45014",
    orderUrl:
      "https://custom.order.online/store/pollo-shaddai-of-fairfield-dixie-hwy-29487569",
    orderLabel: "Order Online",
  },
  {
    id: "indianapolis",
    city: "Indianapolis",
    neighborhood: "Geist Station",
    address: "8150 Oaklandon Rd",
    cityState: "Lawrence, IN 46236",
    phone: "(463) 263-4553",
    phoneHref: "tel:+14632634553",
    hours: [{ days: "Daily", daysEs: "Todos los días", time: "10:00 AM – 9:00 PM" }],
    mapQuery: "8150 Oaklandon Rd, Lawrence, IN 46236",
    orderUrl: "https://polloshaddaiindianapolis.com/",
    orderLabel: "Order Online",
  },
  {
    id: "oklahomacity",
    city: "Oklahoma City",
    neighborhood: "May & 36th",
    address: "3604 N May Ave",
    cityState: "Oklahoma City, OK 73112",
    hours: [
      {
        days: "Hours",
        daysEs: "Horario",
        time: "Coming soon",
        timeEs: "Pronto",
      },
    ],
    mapQuery: "3604 N May Ave, Oklahoma City, OK 73112",
    badge: "New in OKC",
    badgeEs: "Nuevo en OKC",
    note: "Taking over the former Charcoal Oven. Same Shaddai family as Antojitos Shaddai on Pennsylvania Ave — crispy Guatemalan fried chicken, plantains, and sides.",
    noteEs:
      "En el antiguo Charcoal Oven. La misma familia Shaddai que Antojitos Shaddai en Pennsylvania Ave — pollo frito chapín, plátanos y acompañamientos.",
  },
  {
    id: "antojitos",
    city: "Antojitos Shaddai",
    neighborhood: "Pennsylvania Ave",
    address: "3914 N Pennsylvania Ave",
    cityState: "Oklahoma City, OK 73112",
    phone: "(405) 835-0521",
    phoneHref: "tel:+14058350521",
    hours: [
      { days: "Mon – Sat", daysEs: "Lun – Sáb", time: "11:00 AM – 9:00 PM" },
      { days: "Sunday", daysEs: "Domingo", time: "Closed", timeEs: "Cerrado" },
    ],
    mapQuery: "3914 N Pennsylvania Ave, Oklahoma City, OK 73112",
    orderUrl: "http://orderantojitosshaddai.mobile-webview2.com/",
    orderLabel: "Order Online",
    note: "Sister kitchen in Oklahoma City. Pupusas, tacos, tortas, and antojitos — a local favorite while Pollo Shaddai opens on May Ave.",
    noteEs:
      "Cocina hermana en Oklahoma City. Pupusas, tacos, tortas y antojitos — el favorito del barrio mientras Pollo Shaddai abre en May Ave.",
  },
];
