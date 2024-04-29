import React from "react";

const DetailsTable = (props) => {
  return (
    <>
      <div className="w-full bg-firstColor px-10 pb-10 rounded-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 xs:w-4/5 md:w-3/4 lg:w-1/2">
        <div
          className="flex justify-center items-center absolute top-0 left-full -translate-x-full cursor-pointer font-medium text-2xl w-12 h-12 text-offWhite rounded-tr-md"
          onClick={() => props.changeShowDetail(false)}
        >
          X
        </div>
        <div className="w-full mt-12 overflow-scroll">
          <table className="table-auto border w-full text-firstColor border-slate-400 bg-offWhite">
            <thead>
              <tr>
                <th className="p-2 border border-slate-400">Name</th>
                <th className="p-2 border border-slate-400">Quantity</th>
                <th className="p-2 border border-slate-400">Price Each</th>
                <th className="p-2 border border-slate-400">Total Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border border-slate-400">Apel</td>
                <td className="p-4 border border-slate-400">5</td>
                <td className="p-4 border border-slate-400">Rp10.000</td>
                <td className="p-4 border border-slate-400">Rp50.000</td>
              </tr>
              <tr>
                <td className="p-4 border border-slate-400">Orange</td>
                <td className="p-4 border border-slate-400">4</td>
                <td className="p-4 border border-slate-400">Rp12.500</td>
                <td className="p-4 border border-slate-400">Rp50.000</td>
              </tr>
              <tr>
                <td className="p-4 border border-slate-400">Pajak</td>
                <td className="p-4 border border-slate-400">1</td>
                <td className="p-4 border border-slate-400">Rp10.000</td>
                <td className="p-4 border border-slate-400">Rp10.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-screen h-screen bg-firstColor fixed top-0 left-0 opacity-50 z-10"></div>
    </>
  );
};

export default DetailsTable;
