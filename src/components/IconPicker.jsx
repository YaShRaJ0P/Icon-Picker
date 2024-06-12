import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaAngular,
  FaVuejs,
  FaAmazonPay,
  FaAddressBook,
  FaAndroid,
} from "react-icons/fa";

const icons = [
  FaReact,
  FaNodeJs,
  FaAngular,
  FaVuejs,
  FaAmazonPay,
  FaAddressBook,
  FaAndroid,
  FaAmazonPay,
  FaAddressBook,
  FaAndroid,
  FaAmazonPay,
  FaAddressBook,
  FaAndroid,
  FaAmazonPay,
  FaAddressBook,
  FaAndroid,
  FaAmazonPay,
  FaAddressBook,
  FaAndroid,
];

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

  const iconsPerPage = rowsInOnePage * columnsInOnePage;
  const paginatedIcons = icons.slice(
    currentPage * iconsPerPage,
    (currentPage + 1) * iconsPerPage
  );

  const handleIconClick = (Icon) => {
    onSelect(Icon);
  };

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-50 flex items-center justify-center"
      onClick={(e) => e.stopPropagation()}
    >
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
          {paginatedIcons.map((Icon, index) => (
            <div
              key={index}
              className="flex items-center justify-center cursor-pointer border p-1"
              onClick={() => handleIconClick(Icon)}
              style={{ width: iconWidth, height: iconHeight }}
            >
              <Icon size={iconWidth * 0.8} />
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
                (prev + 1) * iconsPerPage < icons.length ? prev + 1 : prev
              )
            }
            disabled={(currentPage + 1) * iconsPerPage >= icons.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default IconPicker;
