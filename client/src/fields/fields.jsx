export const navbarItemsLeft = [
  { id: 1, value: "Start", href: "/" },
  { id: 2, value: "Career", href: "/career" },
  { id: 3, value: "About", href: "/about" },
];

export const navbarItemsRight = [
  { id: 4, value: "Products", href: "/product" },
  { id: 5, value: "Contact us", href: "/contact" },
];

export const newPositionDetails = [
  {
    id: 1,
    title: "Position name",
    name: "title",
    type: "text",
    placeholder: "Example: Baker",
  },
  {
    id: 2,
    title: "Salary ($ Monthly)",
    name: "salary",
    type: "text",
    placeholder: "Example: 4700",
    format: "number",
  },
  {
    id: 3,
    title: "Employment type",
    name: "employmentType",
    type: "select",
    placeholder: "",
  },
  {
    id: 4,
    title: "Location",
    name: "location",
    type: "text",
    placeholder: "Example: Vienna",
  },
];

export const newProductDetails = [
  {
    id: 1,
    title: "Title",
    name: "title",
    type: "text",
    placeholder: "Cookie",
  },
  {
    id: 2,
    title: "Price ($)",
    name: "price",
    type: "text",
    placeholder: "Example: 2.5",
    format: "number",
  },
  {
    id: 3,
    title: "Image",
    name: "image",
    type: "file",
    placeholder: "",
  }
]

export const employmentTypeOption = [
  { title: "Full Time", value: "FULL_TIME" },
  { title: "Part Time", value: "PART_TIME" },
  { title: "Internship", value: "INTERNSHIP" },
  { title: "Full or Part Time", value: "FULL_OR_PART_TIME" },
];

export const contactFields = [
  {
    id: 1,
    name: "name",
    title: "Full name",
    type: "singleline",
    format: "text",
  },
  { 
    id: 2, 
    name: "email", 
    title: "Email", 
    type: "singleline", 
    format: "text" },
  {
    id: 3,
    name: "phone",
    title: "Phone",
    type: "singleline",
    format: "number",
  },
  {
    id: 4,
    name: "message",
    title: "Message",
    type: "multiline",
    format: "text",
  },
];
