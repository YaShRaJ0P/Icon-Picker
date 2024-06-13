import React, { useState } from "react";
import IconPicker from "./components/IconPicker";

const App = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
    setShowPicker(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="w-24 h-24 border flex items-center justify-center cursor-pointer"
        onClick={() => setShowPicker(true)}
      >
        {selectedIcon ? (
          <div
            dangerouslySetInnerHTML={{ __html: selectedIcon.svg }}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          "Pick an icon"
        )}
      </div>

      {showPicker && (
        <IconPicker
          rowsInOnePage={3}
          columnsInOnePage={3}
          iconHeight={100}
          iconWidth={100}
          onSelect={handleIconSelect}
        />
      )}
    </div>
  );
};

export default App;
