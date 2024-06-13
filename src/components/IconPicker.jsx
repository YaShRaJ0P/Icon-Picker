import React, { useState } from "react";
import { icons } from "feather-icons";
import FeatherIcon from "feather-icons-react";

const IconPicker = ({
  rowsInOnePage,
  columnsInOnePage,
  iconHeight,
  iconWidth,
  pickerHeight = 500,
  pickerWidth = 500,
  onSelect,
  onCancel,
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
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-50 flex items-center justify-center"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6"
        style={{ height: pickerHeight, width: pickerWidth }}
      >
        <div className="text-lg font-semibold mb-4 flex flex-row justify-between items-center">
          <h2>Select App Icon</h2>
          <FeatherIcon
            icon="x"
            onClick={onCancel}
            className="bg-red-500 rounded-sm text-white cursor-pointer"
          />
        </div>
        <div
          className="grid gap-4"
          style={{
            gridTemplateRows: `repeat(${rowsInOnePage}, ${iconHeight}px)`,
            gridTemplateColumns: `repeat(${columnsInOnePage}, ${iconWidth}px)`,
          }}
        >
          {paginatedIcons.map((icon, index) => (
            <div
              key={index}
              className="flex items-center justify-center cursor-pointer border p-1 rounded hover:bg-gray-100"
              onClick={() => handleIconClick(icon)}
              style={{ width: iconWidth, height: iconHeight }}
            >
              <div
                className="text-white bg-blue-500 rounded-sm p-1 box-content"
                dangerouslySetInnerHTML={{ __html: icon.svg }}
                style={{ width: iconWidth, height: iconHeight }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-4">
          <button
            className="rounded-sm cursor-pointer disabled:opacity-30"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
          >
            <FeatherIcon icon="chevron-left" className="rounded-sm" />
          </button>

          <span className="px-2">
            Page <b>{currentPage + 1}</b> of{" "}
            <b>{Math.ceil(iconComponents.length / iconsPerPage)}</b>
          </span>
          <button
            className="cursor-pointer disabled:opacity-30"
            onClick={() =>
              setCurrentPage((prev) =>
                (prev + 1) * iconsPerPage < iconComponents.length
                  ? prev + 1
                  : prev
              )
            }
            disabled={(currentPage + 1) * iconsPerPage >= iconComponents.length}
          >
            <FeatherIcon icon="chevron-right" className="rounded-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IconPicker;
