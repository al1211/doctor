import {
  FaShoppingCart,
  FaFileMedical,
  FaNewspaper,
  FaBriefcaseMedical,
} from "react-icons/fa";
import { MdChat } from "react-icons/md";
import { BiTestTube } from "react-icons/bi";

const card = [
  {
    icon: <MdChat size={30} />,
    title: "Consult with a doctor",
    a: true,
  },
  {
    icon: <FaShoppingCart size={30} />,
    title: "Order Medicines",
    a: true,
  },
  {
    icon: <FaFileMedical size={30} />,
    title: "View medical records",
    a: true,
  },
  {
    icon: <BiTestTube size={30} />,
    title: "Book test",
    a: true,
  },
  {
    icon: <FaNewspaper size={30} />,
    title: "Read articles",
    a: true,
  },
  {
    icon: <FaBriefcaseMedical size={30} />,
    title: "For healthcare providers",
    a: false,
  },
];

export default function Card() {
  return (
    <section className="bg-[#1e1e50] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
        {card.map((service, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center gap-2 px-2 py-4   ${
              service.a ? "border-r border-white/20" : ""
            }`}
          >
            <div className="text-white">{service.icon}</div>
            <h3 className="text-sm font-semibold">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
