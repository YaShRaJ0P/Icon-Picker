import React, { useState } from "react";
import IconPicker from "./components/IconPicker";
const App = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [SelectedIcon, setSelectedIcon] = useState(null);

  const handleIconSelect = (Icon) => {
    setSelectedIcon(() => Icon);
    setShowPicker(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="w-24 h-24 border flex items-center justify-center cursor-pointer"
        onClick={() => setShowPicker(true)}
      >
        {SelectedIcon ? <SelectedIcon size={64} /> : "Pick an icon"}
      </div>

      {showPicker && (
        <IconPicker
          rowsInOnePage={3}
          columnsInOnePage={4}
          iconHeight={100}
          iconWidth={100}
          onSelect={handleIconSelect}
          pickerHeight={500}
          pickerWidth={500}
        />
      )}
    </div>
  );
};

export default App;
