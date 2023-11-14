import React, { useEffect, useState } from "react";
import Star from "./Star";
import ReactPaginate from "react-paginate";
import { PulseLoader } from "react-spinners";
import SearchBar from "./SearchBar";
import { useContext } from "react";
import { Link } from "react-router-dom";
import  CartContext  from "../Context/CartContext";


function Shop() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const { addToCart } = useContext(CartContext);

  const usdToPhpExchangeRate = 60.0;

  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, [currentPage, searchTerm]);


  const fetchData = () => {
    setLoading(true);
    fetch("http://localhost:3001/product", {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => setData(json));

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const pageCount = Math.ceil(data.length / itemsPerPage);
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(0);
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = data.slice(startIndex, endIndex);

  const convertToPhp = (usdPrice) => {
    const phpPrice = usdPrice * usdToPhpExchangeRate;
    return `₱${phpPrice.toFixed(3)}`;
  };

  return (
    <>
      <div className="flex w-full">
        <div className="p-10 w-full">
          <div className="Shop font-semibold text-[50px] font-[Agency] p-10 flex justify-between">
            Shop
            <SearchBar onSearch={handleSearch} />
          </div>

          <div className="shop-body flex flex-wrap justify-center">
            {loading ? (
              <PulseLoader
                color="#c9aa5b"
                cssOverride={{
                  display: "flex",
                  justifyContent: "center",
                }}
              />
            ) : (
              displayedData.map((item) => (
                <div
                  key={item.id}
                  className="w-[290px] h-[400px] rounded-lg shadow-md flex flex-col justify-between p-3 m-2 bg-white cursor-pointer"
                >
                  <Link to={`Shop/${item.position}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="p-5 w-[230px] h-[250px]"
                    />
                  </Link>
                  <div className="text-start text-lg font-semibold">
                    {item.name}
                  </div>
                  <div className="price">
                    {item.prices.map((price, i) => (
                      <div key={i}>
                        <p>{convertToPhp(price.value)}</p>
                        <div className="flex justify-between items-center">
                          <Star stars={item.rating} />
                          <button onClick={() =>
                          addToCart(
                            {
                              name: item.name,
                              title: item.title,
                              image: item.image,
                              price: convertToPhp(price.value),
                              quantity: 1,

                            }
                          )
                        }
                            className="cursor-pointer space-x-2 text-center font-semibold ease-out duration-200 rounded-md outline-none transition-all outline-0 bg-none bg-t-hover text-white border border-white shadow-sm text-md px-4 py-1 hidden lg:block m-1 hover:bg-light hover:text-black hover:border-black"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="pagination flex justify-center items-center">
        <ReactPaginate
          className="flex text-md m-2 mb-10"
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
}

export default Shop;
