import React, { useState } from "react";
import { icons } from "feather-icons";

const IconPicker = ({
  rowsInOnePage,
  columnsInOnePage,
  iconHeight,
  iconWidth,
  pickerHeight = 500,
  pickerWidth = 500,
  onSelect,
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const iconComponents = Object.keys(icons).map((key) => ({
    name: key,
    svg: icons[key].toSvg({ width: iconWidth, height: iconHeight }),
  }));

  const iconsPerPage = rowsInOnePage * columnsInOnePage;
  const paginatedIcons = iconComponents.slice(
    currentPage * iconsPerPage,
    (currentPage + 1) * iconsPerPage
  );

  const handleIconClick = (icon) => {
    onSelect(icon);
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div
        className="bg-white p-4"
        style={{ height: pickerHeight, width: pickerWidth }}
      >
        <div
          className="grid"
          style={{
            gridTemplateRows: `repeat(${rowsInOnePage}, ${iconHeight}px)`,
            gridTemplateColumns: `repeat(${columnsInOnePage}, ${iconWidth}px)`,
          }}
        >
          {paginatedIcons.map((icon, index) => (
            <div
              key={index}
              className="flex items-center justify-center cursor-pointer border p-1"
              onClick={() => handleIconClick(icon)}
              style={{ width: iconWidth, height: iconHeight }}
            >
              <div
                dangerouslySetInnerHTML={{ __html: icon.svg }}
                style={{ width: iconWidth, height: iconHeight }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button
            className="px-4 py-2 bg-gray-200 rounded"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
          >
            Prev
          </button>
          <button
            className="px-4 py-2 bg-gray-200 rounded"
            onClick={() =>
              setCurrentPage((prev) =>
                (prev + 1) * iconsPerPage < iconComponents.length
                  ? prev + 1
                  : prev
              )
            }
            disabled={(currentPage + 1) * iconsPerPage >= iconComponents.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default IconPicker;
