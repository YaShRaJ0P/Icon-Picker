import React, { useState } from "react";
import IconPicker from "./components/IconPicker";

const App = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
    setShowPicker(false);
  };

  const handleCancel = () => {
    setShowPicker(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="w-24 h-24 border flex items-center justify-center cursor-pointer bg-blue-500 text-white"
        onClick={() => setShowPicker(true)}
      >
        {selectedIcon ? (
          <div
            className="flex justify-center items-center"
            dangerouslySetInnerHTML={{ __html: selectedIcon.svg }}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          "Pick an icon"
        )}
      </div>

      {showPicker && (
        <IconPicker
          rowsInOnePage={5}
          columnsInOnePage={5}
          iconHeight={50}
          iconWidth={50}
          onSelect={handleIconSelect}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default App;
