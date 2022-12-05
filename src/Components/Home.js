import React, { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import FilterSection from "./FilterSection";
import { logo } from "./image";
import Pagination from "./Pagination";

const UNSPLASH_ACCESS_KEY = "R08XI5B0GcNctCnCGyE9bEtRyvaPwKwpt2RaA8-Uupw";
const unsplash = createApi({
  accessKey: UNSPLASH_ACCESS_KEY,
  fetch: fetch,
});

export default function Header() {
  const [photos, setPhotos] = useState([]);
  const [searchItems, setSearchItems] = useState("");
  const [searchedText, setSearchedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    totalPage: 1,
  });

  const searchPhotos = async (val) => {
    setIsLoading(true);
    const res = await unsplash.search.getPhotos({ query: val });
    const photos = res.response.results;
    setPhotos(photos);
    setSearchedText(val);
    setSearchItems("");
    setIsLoading(false);
  };
  const getPhotos = async () => {
    setIsLoading(true);
    const res = await unsplash.collections.list({
      page: pagination.page,
      perPage: 15,
    });
    const photos = res.response.results;
    setPhotos(photos);
    setPagination({
      ...pagination,
      totalPage: Math.ceil(res.response.total / 15),
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getPhotos();
  }, [pagination.page]);

  return (
    <div className="text-center my-0 mx-auto max-w-5xl">
      <div className="flex justify-around items-center h-16 w-64 mx-auto">
        <img className="h-10" src={logo} alt={"logo"} />
        <h1 className="font-bold text-white text-4xl text-[rgba(0,0,0,0.65)]">
          PicShow
        </h1>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchPhotos(searchItems);
        }}
        className="input-group flex flex-wrap my-5"
      >
        <input
          type="text"
          className="flex-auto bg-clip-padding rounded min-w-0 p-2 border shadow-md border-gray-200 text-slate-700 bg-white outline-none leading-5"
          placeholder="search here"
          value={searchItems}
          onChange={(e) => setSearchItems(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[rgba(0,0,0,0.70)] ml-1 rounded shadow-md text-white transition-colors uppercase hover:bg-[rgba(0,0,0,0.85)] px-6"
        >
          search
        </button>
      </form>

      <FilterSection filter={searchPhotos} />

      <div className="m-5 text-lg">
        Results for :<span className="mx-1 capitalize">{searchedText}</span>
      </div>

      {isLoading && <div className="text-2xls text-center">Loading...</div>}

      <div className="columns-3">
        {photos.length > 0 &&
          photos.map((photo) => {
            return (
              <div className="flex mb-4" key={photo.id}>
                <img
                  className="flex-1 rounded-md"
                  src={
                    photo?.cover_photo?.urls?.regular || photo?.urls?.regular
                  }
                />
              </div>
            );
          })}
      </div>
      <Pagination pagination={pagination} setPagination={setPagination} />
    </div>
  );
}
