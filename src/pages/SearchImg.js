import React from 'react'
import { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";

import '../style/searchImg.css'

const SearchImg = () => {
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);
    const unsplash = new Unsplash({
        accessKey: "EKX2mpjUaf88Nlm3wZmHKhyxiFYJ1wKG23od8KcX6qY",
    });

    const searchPhotos = async (e) => {
        e.preventDefault();
        unsplash.search
            .photos(query, 1, 20)
            .then(toJson)
            .then((json) => {
                setPics(json.results);
            });
    };
    return (
        <div className="container-fluid">
            <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                <span className="bg-secondary pr-3">TÌM KIẾM HÌNH ẢNH</span>

            </h2>
            <form action="" onSubmit={searchPhotos}>
                <div class="search__image">
                    <input
                        type="text"
                        name="query"
                        className="search__image-input"
                        placeholder={`Tìm kiếm hình ảnh`}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type="submit" className="button">
                        Tìm kiếm
                    </button>
                </div>

                <div className="card-list">
                    {pics.map((pic) => (
                        <div className="card" key={pic.id}>
                            <img
                                className="card--image"
                                alt={pic.alt_description}
                                src={pic.urls.full}
                            ></img>
                        </div>
                    ))}
                </div>
            </form>
        </div>
    )
}

export default SearchImg