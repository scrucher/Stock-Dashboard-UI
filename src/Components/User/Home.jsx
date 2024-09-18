import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "../../Assets/Svg";
import { BarcodeScanner } from "../SubComponents";

const UserHome = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };
  const [isRetreiveModalOpen, setIsRetreiveModalOpen] = useState(false);
  const openModal = () => {
    setIsRetreiveModalOpen(true);
  };

  const closeModal = () => {
    setIsRetreiveModalOpen(false);
  };
  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 bg-blue-800 h-full">
      <div className="flex items-center justify-center bg-white rounded-lg p-4">
        <button type="button">
          <PlusIcon size={44} onClick={openAddModal} />
        </button>
      </div>
      <div className="flex items-center justify-center bg-white rounded-lg p-4">
        <button type="button" onClick={openModal}>
          <MinusIcon className=" h-44" />
        </button>
      </div>
      {isAddModalOpen && (
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex min-w-[750px] items-center justify-center overflow-y-auto overflow-x-hidden h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4  max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-800 w-[750px]">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t  dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Create Product
                </h3>
                <button
                  type="button"
                  onClick={closeAddModal}
                  className="text-gray-400 bg-transparent hover:bg-red-500 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-red-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 min-h[650px] min-w[700px] form-control">
                <form
                  className="grid grid-cols-1 gap-6 rounded-2xl shadow-2xl p-8 bg-white"
                  id="ProductForm"
                >
                  <h3 className="text-black font-bold text-3xl mb-6">
                    Add To Stock
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <BarcodeScanner />
                    <div className="grid">
                      <label
                        htmlFor="barcode"
                        className="text-lg font-medium mb-2"
                      >
                        Barcode
                      </label>
                      <input
                        type="text"
                        placeholder="Barcode"
                        name="barcode"
                        className="border border-gray-300 text-lg text-gray-800 h-12 w-full px-4 rounded-lg bg-gray-50"
                      />
                    </div>
                    <div className="grid">
                      <label
                        htmlFor="quantity"
                        className="text-lg font-medium mb-2"
                      >
                        Quantity
                      </label>
                      <input
                        type="number"
                        placeholder="Barcode"
                        name="barcode"
                        className="border border-gray-300 text-lg text-gray-800 h-12 w-full px-4 rounded-lg bg-gray-50"
                      />
                    </div>
                    <div className="grid">
                      <label
                        htmlFor="expiration_date"
                        className="text-lg font-medium mb-2"
                      >
                        Expiration Date
                      </label>
                      <input
                        type="date"
                        name="expiration_date"
                        className="border border-gray-300 text-lg text-gray-800 h-12 w-full px-4 rounded-lg bg-gray-50"
                      />
                    </div>
                    <div className="grid"></div>
                  </div>
                  <div className="flex items-center justify-center mt-8">
                    <button
                      className="py-3 px-6 font-bold text-lg bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300"
                      type="submit"
                    >
                      Retrieve Products
                    </button>
                  </div>
                </form>

                <div className="response-message hidden mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isRetreiveModalOpen && (
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex min-w-[750px] items-center justify-center overflow-y-auto overflow-x-hidden h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4  max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-800 w-[750px]">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t  dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Create Product
                </h3>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-400 bg-transparent hover:bg-red-500 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-red-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 min-h[650px] min-w[700px] form-control">
                <form
                  className="grid grid-cols-1 gap-6 rounded-2xl shadow-2xl p-8 bg-white"
                  id="ProductForm"
                >
                  <h3 className="text-black font-bold text-3xl mb-6">
                    Add To Stock
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <BarcodeScanner />
                    <div className="grid">
                      <label
                        htmlFor="barcode"
                        className="text-lg font-medium mb-2"
                      >
                        Barcode
                      </label>
                      <input
                        type="text"
                        placeholder="Barcode"
                        name="barcode"
                        className="border border-gray-300 text-lg text-gray-800 h-12 w-full px-4 rounded-lg bg-gray-50"
                      />
                    </div>
                    <div className="grid">
                      <label
                        htmlFor="quantity"
                        className="text-lg font-medium mb-2"
                      >
                        Quantity
                      </label>
                      <input
                        type="number"
                        placeholder="Barcode"
                        name="barcode"
                        className="border border-gray-300 text-lg text-gray-800 h-12 w-full px-4 rounded-lg bg-gray-50"
                      />
                    </div>
                    <div className="grid">
                      <label
                        htmlFor="expiration_date"
                        className="text-lg font-medium mb-2"
                      >
                        Expiration Date
                      </label>
                      <input
                        type="date"
                        name="expiration_date"
                        className="border border-gray-300 text-lg text-gray-800 h-12 w-full px-4 rounded-lg bg-gray-50"
                      />
                    </div>
                    <div className="grid"></div>
                  </div>
                  <div className="flex items-center justify-center mt-8">
                    <button
                      className="py-3 px-6 font-bold text-lg bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300"
                      type="submit"
                    >
                      Retrieve Products
                    </button>
                  </div>
                </form>

                <div className="response-message hidden mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { UserHome };
