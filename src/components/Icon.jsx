import { useState } from "react";
import * as FiIcons from "react-icons/fi";

function Icon() {
  const icons = Object.values(FiIcons);

  const [currentIndex, setCurrentIndex] = useState(0);

  const CurrentIcon = icons[currentIndex];

  const handleChangeIcon = () => {
    setCurrentIndex((prev) => (prev + 1) % icons.length);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <CurrentIcon size={40} />

      <button
        onClick={handleChangeIcon}
        className="p bg-black text-white rounded"
      >
        Change Icon
      </button>
    </div>
  );
}

export default Icon;
