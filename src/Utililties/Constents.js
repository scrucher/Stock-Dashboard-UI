import {
  ActivityIcon,
  BellIcon,
  MountainIcon,
  OrdersIcon,
  SettingsIcon,
  StockIcon,
  UsersIcon,
} from "../Assets/Svg";

const SideBar = [
  {
    name: "Dashboard",
    href: "/",
    icon: MountainIcon,
  },
  {
    name: "Waste Tracking",
    href: "?Waste",
    icon: ActivityIcon,
  },
  {
    name: "Inventory",
    icon: BellIcon,
    children: [
      {
        name: "Inventory Forecasting",
        href: "/Forecasting",
      },
      {
        name: "Inventory History",
        href: "/Inventory History",
      },
    ],
  },
  {
    name: "Administration",
    href: "#",
    icon: UsersIcon,
    children: [
      {
        name: "Users Management",
        href: "/Usr-Management",
      },
      {
        name: "Category Management",
        href: "/Category",
      },
      {
        name: "Supplier Management",
        href: "/Supplier",
      },
      {
        name: "Product Management",
        href: "/Product",
      },
      {
        name: "Unit Management",
        href: "/Unit",
      },
      {
        name: "Client Management",
        href: "/Client",
      },
      {
        name: "Service Management",
        href: "/Service",
      },
    ],
  },
  {
    name: "Stock",
    icon: StockIcon,
    children: [
      {
        name: "Stock Analytics",
        href: "/Analytics",
      },
      {
        name: "Stock Reports",
        href: "/Stock Reports",
      },
      {
        name: "Stock Movement",
        href: "/Stock Movement",
      },
      {
        name: "Stock Alerts",
        href: "/Stock Alerts",
      },
    ],
  },
  {
    name: "Settings",
    href: "#",
    icon: SettingsIcon,
    children: [
      {
        name: "Profile Settings",
        href: "/Profile",
      },
      {
        name: "Change Password",
        href: "/Change Password",
      },
    ],
  },
];

const Categories = [
  {
    id: 1,
    name: "Medical Equipment",
  },
  {
    id: 2,
    name: "Pharmaceuticals",
  },
  {
    id: 3,
    name: "Surgical Supplies",
  },
  {
    id: 4,
    name: "Laboratory Reagents",
  },
  {
    id: 5,
    name: "Personal Protective Equipment",
  },
  {
    id: 6,
    name: "Sterilization Products",
  },
  {
    id: 7,
    name: "Diagnostic Tools",
  },
  {
    id: 8,
    name: "Consumables",
  },
  {
    id: 9,
    name: "Cleaning Supplies",
  },
  {
    id: 10,
    name: "Office Supplies",
  },
];

const Units = [
  {
    id: 1,
    name: "Piece",
  },
  {
    id: 2,
    name: "Box",
  },
  {
    id: 3,
    name: "Pack",
  },
  {
    id: 4,
    name: "Bottle",
  },
];

const Suppliers = [
  [
    {
      id: 1,
      name: "MediCorp Supplies",
      email: "contact@medicorpsupplies.com",
      phone: "+1234567890",
      location: "New York, USA",
    },
    {
      id: 2,
      name: "PharmaWholesale Ltd.",
      email: "info@pharmawholesale.com",
      phone: "+1987654321",
      location: "London, UK",
    },
    {
      id: 3,
      name: "Surgical Innovations",
      email: "sales@surgicalinnovations.com",
      phone: "+1122334455",
      location: "Berlin, Germany",
    },
    {
      id: 4,
      name: "Healthcare Global",
      email: "support@healthcareglobal.com",
      phone: "+1223344556",
      location: "Toronto, Canada",
    },
    {
      id: 5,
      name: "LabTech Solutions",
      email: "orders@labtechsolutions.com",
      phone: "+1445566778",
      location: "Sydney, Australia",
    },
  ],
];

const Products = [
  {
    id: 1,
    name: "Surgical Mask",
    category: "Personal Protective Equipment",
    unit: "Box",
    unit_price: 50.0,
    supplier: "MediCorp Supplies",
  },
  {
    id: 2,
    name: "Latex Gloves",
    category: "Personal Protective Equipment",
    unit: "Pack",
    unit_price: 20.0,
    supplier: "PharmaWholesale Ltd.",
  },
  {
    id: 3,
    name: "Digital Thermometer",
    category: "Diagnostic Tools",
    unit: "Piece",
    unit_price: 15.0,
    supplier: "Healthcare Global",
  },
  {
    id: 4,
    name: "IV Drip Set",
    category: "Medical Equipment",
    unit: "Piece",
    unit_price: 5.0,
    supplier: "Surgical Innovations",
  },
  {
    id: 5,
    name: "Sterile Bandages",
    category: "Consumables",
    unit: "Pack",
    unit_price: 10.0,
    supplier: "LabTech Solutions",
  },
  {
    id: 6,
    name: "Syringe 10ml",
    category: "Medical Equipment",
    unit: "Piece",
    unit_price: 1.0,
    supplier: "MediCorp Supplies",
  },
  {
    id: 7,
    name: "Hand Sanitizer",
    category: "Cleaning Supplies",
    unit: "Bottle",
    unit_price: 8.0,
    supplier: "PharmaWholesale Ltd.",
  },
  {
    id: 8,
    name: "Blood Pressure Monitor",
    category: "Diagnostic Tools",
    unit: "Piece",
    unit_price: 45.0,
    supplier: "Healthcare Global",
  },
  {
    id: 9,
    name: "Surgical Scalpel",
    category: "Surgical Supplies",
    unit: "Piece",
    unit_price: 12.0,
    supplier: "Surgical Innovations",
  },
  {
    id: 10,
    name: "Cotton Swabs",
    category: "Consumables",
    unit: "Pack",
    unit_price: 3.0,
    supplier: "LabTech Solutions",
  },
];
const CurrentStock = [
  {
    id: 1,
    product_name: "Surgical Mask",
    category: "Personal Protective Equipment",
    unit: "Box",
    unit_price: 50.0,
    quantity: 200,
  },
  {
    id: 2,
    product_name: "Latex Gloves",
    category: "Personal Protective Equipment",
    unit: "Pack",
    unit_price: 20.0,
    quantity: 500,
  },
  {
    id: 3,
    product_name: "Digital Thermometer",
    category: "Diagnostic Tools",
    unit: "Piece",
    unit_price: 15.0,
    quantity: 150,
  },
  {
    id: 4,
    product_name: "IV Drip Set",
    category: "Medical Equipment",
    unit: "Piece",
    unit_price: 5.0,
    quantity: 300,
  },
  {
    id: 5,
    product_name: "Sterile Bandages",
    category: "Consumables",
    unit: "Pack",
    unit_price: 10.0,
    quantity: 400,
  },
  {
    id: 6,
    product_name: "Syringe 10ml",
    category: "Medical Equipment",
    unit: "Piece",
    unit_price: 1.0,
    quantity: 1000,
  },
  {
    id: 7,
    product_name: "Hand Sanitizer",
    category: "Cleaning Supplies",
    unit: "Bottle",
    unit_price: 8.0,
    quantity: 250,
  },
  {
    id: 8,
    product_name: "Blood Pressure Monitor",
    category: "Diagnostic Tools",
    unit: "Piece",
    unit_price: 45.0,
    quantity: 50,
  },
  {
    id: 9,
    product_name: "Surgical Scalpel",
    category: "Surgical Supplies",
    unit: "Piece",
    unit_price: 12.0,
    quantity: 300,
  },
  {
    id: 10,
    product_name: "Cotton Swabs",
    category: "Consumables",
    unit: "Pack",
    unit_price: 3.0,
    quantity: 600,
  },
];

export { SideBar, Categories, Units, Products, Suppliers, CurrentStock };
