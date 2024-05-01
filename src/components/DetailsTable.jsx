import React from "react";

const DetailsTable = (props) => {
  return (
    <div
      className={`z-20 transition-all duration-300 ${
        props.showDetail ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        className={`w-full bg-firstColor px-10 pb-10 rounded-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 shadow-lg xs:w-4/5 md:w-3/4 lg:w-1/2`}
      >
        <h1 className="text-3xl font-light text-center text-offWhite mt-6 md:text-4xl">
          <span className=" font-semibold">Detail</span>
        </h1>
        <div
          className="flex justify-center items-center absolute top-0 left-full -translate-x-full cursor-pointer font-medium text-2xl w-12 h-12 text-offWhite rounded-tr-md"
          onClick={() => props.changeShowDetail(false)}
        >
          X
        </div>
        <div className="w-full max-h-96 mt-6 overflow-scroll">
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
              {props.items.map((item) => {
                return (
                  <tr key={item.id}>
                    <td className="p-4 border border-slate-400">{item.name}</td>
                    <td className="p-4 border border-slate-400">
                      {item.quantity}
                    </td>
                    <td className="p-4 border border-slate-400">
                      Rp{item.priceEach}
                    </td>
                    <td className="p-4 border border-slate-400">
                      Rp{item.price}
                    </td>
                  </tr>
                );
              })}

              {props.extras.map((extra) => {
                return (
                  <tr key={extra.id}>
                    <td className="p-4 border border-slate-400">
                      {extra.name}
                    </td>
                    <td className="p-4 border border-slate-400">
                      {extra.type == "extra-percent"
                        ? extra.percentage + "%"
                        : "-"}
                    </td>
                    <td className="p-4 border border-slate-400">-</td>
                    <td className="p-4 border border-slate-400">
                      Rp{extra.price}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td className="p-4 border border-slate-400">Total</td>
                <td className="p-4 border border-slate-400"></td>
                <td className="p-4 border border-slate-400"></td>
                <td className="p-4 border border-slate-400">
                  Rp
                  {props.items.reduce((total, current) => {
                    return total + current.price;
                  }, 0) +
                    props.extras.reduce((total, current) => {
                      return total + current.price;
                    }, 0)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-screen h-screen bg-fourthColor fixed top-0 left-0 opacity-50 z-10"></div>
    </div>
  );
};

export default DetailsTable;
