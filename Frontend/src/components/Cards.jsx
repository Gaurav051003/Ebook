import React from "react";

function Cards({ item }) {
  const BASE_URL = "https://book-backend.vercel.app"; // ✅ Replace with your actual backend URL

   const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${BASE_URL}${item.pdf}`; // ✅ Full path
    link.download = `${item.name}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Shoes" className="w-full h-60 object-cover"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                <a href={item.pdf} download >Download PDF</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default Cards;
