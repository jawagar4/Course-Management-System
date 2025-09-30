import React from 'react';

const Pages = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center mt-6 gap-2">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`px-4 py-2 border rounded ${
            currentPage === index + 1
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-700'
          } hover:bg-blue-100`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pages;
