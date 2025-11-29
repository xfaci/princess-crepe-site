export type MenuItem = {
    name: string;
    price: number; // en euros
    highlight?: boolean;
};

export type MenuCategory = {
    id: string;
    title: string;
    subtitle?: string;
    items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
    {
        id: "chantilly",
        title: "Crème Chantilly",
        subtitle: "La douceur aérienne pour les gourmands",
        items: [
            { name: "Chocolat chantilly", price: 3.5 },
            { name: "Fraise chantilly", price: 4.2, highlight: true },
            { name: "Framboise chantilly", price: 4.2 },
            { name: "Banane chocolat chantilly", price: 4.2 },
            { name: "Nutella chantilly", price: 4.2 },
            { name: "Nutella fraise chantilly", price: 3.5 },
            { name: "Fraise chocolat chantilly", price: 4.4 },
            { name: "Caramel banane chantilly", price: 4.4 },
            { name: "Mix fruits chantilly", price: 5.2 },
        ],
    },
    {
        id: "patissiere",
        title: "Crème Pâtissière",
        subtitle: "L'onctuosité traditionnelle maison",
        items: [
            { name: "Crème pâtissière", price: 3.8 },
            { name: "Crème pâtissière chocolat", price: 4.0 },
            { name: "Crème pâtissière Nutella", price: 4.0 },
            { name: "Crème pâtissière chantilly", price: 4.0 },
            { name: "Crème pâtissière chocolat chantilly", price: 4.2 },
            { name: "Crème pâtissière chocolat banane", price: 4.5 },
            { name: "Crème pâtissière banane chantilly", price: 4.5 },
            { name: "Crème pâtissière chocolat amande", price: 4.8 },
            { name: "Crème pâtissière banane chocolat chantilly", price: 4.8, highlight: true },
        ],
    },
    {
        id: "glace-vanille",
        title: "Glace à la vanille",
        subtitle: "Fraîcheur vanillée et toppings croquants",
        items: [
            { name: "Glace vanille chocolat chantilly", price: 4.5 },
            { name: "Glace vanille Nutella chantilly", price: 4.5 },
            { name: "Glace vanille banane chocolat chantilly", price: 5.3 },
            { name: "Glace vanille caramel noix chantilly", price: 5.3 },
            { name: "Glace vanille chocolat noix chantilly", price: 5.3 },
            { name: "Glace vanille caramel cheesecake chantilly", price: 6.0, highlight: true },
            { name: "Glace vanille crème pâtissière banane chocolat chantilly", price: 6.0 },
        ],
    },
    {
        id: "glace-chocolat",
        title: "Glace au chocolat",
        subtitle: "Pour les inconditionnels du cacao",
        items: [
            { name: "Glace au chocolat chocolat chantilly", price: 4.5 },
            { name: "Glace au chocolat Nutella chantilly", price: 4.5 },
            { name: "Glace au chocolat chocolat banane chantilly", price: 5.3 },
            { name: "Glace au chocolat chocolat fraise chantilly", price: 5.3 },
            { name: "Glace au chocolat chocolat Nutella chantilly", price: 5.3 },
            { name: "Glace au chocolat chocolat banane Nutella", price: 5.3 },
            { name: "Glace au chocolat chocolat crème pâtissière chantilly", price: 6.0 },
            { name: "Glace au chocolat chocolat gâteau au chocolat chantilly", price: 6.0, highlight: true },
        ],
    },
    {
        id: "chocolat",
        title: "Chocolat",
        subtitle: "Simplicité et intensité",
        items: [
            { name: "Chocolat", price: 3.0 },
            { name: "Chocolat banane", price: 3.5 },
            { name: "Chocolat amande", price: 3.5 },
            { name: "Chocolat amande glace (vanille ou chocolat)", price: 4.5 },
            { name: "Cannelle chocolat", price: 3.5 },
            { name: "Cannelle chocolat amande", price: 3.8 },
        ],
    },
    {
        id: "cake",
        title: "Cake & Cheesecake",
        subtitle: "Des morceaux de gâteaux dans votre crêpe !",
        items: [
            { name: "Chocolat gâteau au chocolat chantilly", price: 5.0 },
            { name: "Chocolat cheesecake chantilly", price: 5.0 },
            { name: "Caramel cheesecake chantilly", price: 5.3 },
            { name: "Framboise cheesecake chantilly", price: 5.3 },
            { name: "Fraise cheesecake chantilly", price: 5.3, highlight: true },
        ],
    },
    {
        id: "toppings",
        title: "Garniture supplémentaire",
        subtitle: "Personnalisez votre crêpe à l'infini",
        items: [
            { name: "Cannelle, noix, amandes, chocolat, Nutella, nappage caramel, nappage fraise", price: 0.8 },
            { name: "Kit Kat, M&M’s, Oreo", price: 1.0 },
            { name: "Crème chantilly", price: 1.0 },
            { name: "Crème pâtissière", price: 1.3 },
            { name: "Glace à la vanille", price: 1.3 },
            { name: "Glace au chocolat", price: 1.3 },
            { name: "Fraise, framboise, banane", price: 1.6 },
            { name: "Gâteau au chocolat", price: 1.6 },
            { name: "Cheesecake", price: 1.6 },
            { name: "Caramel beurre salé", price: 1.6 },
        ],
    },
    {
        id: "salees",
        title: "Crêpes Salées",
        subtitle: "Une pause déjeuner sur le pouce",
        items: [
            { name: "Jambon fromage salade", price: 5.5 },
            { name: "Thon maïs tomate salade", price: 6.0 },
            { name: "Poulet crudités", price: 6.5 },
            // TODO: compléter avec les recettes exactes du client
        ],
    },
];
