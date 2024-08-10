import img from "../../assets/images/image.png";

type Projects = {
  id: number;
  demoImg?: string;
  label: string;
  path: string;
  icon: string;
};

const projectList: Projects[] = [
  {
    id: 1,
    demoImg: img,
    label: "Ordenação e Filtro",
    path: "/pages/filter",
    icon: "📊",
  },
  {
    id: 2,
    label: "Galeria",
    path: "/pages/gallery",
    icon: "🖼️",
  },
];

export default projectList;
