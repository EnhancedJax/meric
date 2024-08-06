import { Languages } from "lucide-react";

export default function LangButton() {
  return (
    <button className="p-2.5 rounded-tl-[35px] rounded-tr-[35px] rounded-br-[35px] border-2 border-text text-text flex items-center">
      <Languages />
    </button>
  );
}
