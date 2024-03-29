import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore from 'swiper';
import { Navigation } from "swiper/modules";
import 'swiper/css/bundle';
import ListingItem from "../components/ListingItem";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListing();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListing = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();
  }, []);

  return (
    <div className="home-container">
      {/*top*/}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
          Easiest way to find your next <span className="text-slate-500">awesome</span>
          <br />home
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm">
          City Scape is the best place to find a perfect home for your needs!
          <br />Explore a wide range of properties
        </div>
        <Link to={"/search"} className="text-xs sm:text-sm text-blue-800 font-bold hover:underline">
          Let's Get Started
        </Link>
      </div>

      {/*swiper*/}
      <Swiper navigation>
        {offerListings && offerListings.length > 0 && offerListings.map((listing) => (
          <SwiperSlide key={listing._id}>
            <div style={{ background: `url(${listing.imageUrls[0]}) center no-repeat`, backgroundSize: "cover" }} className="h-[500px]"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/*listing results for offer, sale, and rent*/}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="my-3">
            <div className="">
              <h2 ClassName="text-2xl font-semibold text-slate-600">Recent Offers</h2>
              <Link className="text-sm text-blue-800 hover:underline" to={"/search?offer=true"}>
                Show more offers
              </Link>
            </div>

            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {rentListings && rentListings.length > 0 && (
          <div className="my-3">
            <div className="">
              <h2 ClassName="text-2xl font-semibold text-slate-600">Recent Places For Rent</h2>
              <Link className="text-sm text-blue-800 hover:underline" to={"/search?type=rent"}>
                Show more places
              </Link>
            </div>

            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {saleListings && saleListings.length > 0 && (
          <div className="my-3">
            <div className="">
              <h2 ClassName="text-2xl font-semibold text-slate-600">Recent places for sale</h2>
              <Link className="text-sm text-blue-800 hover:underline" to={"/search?type=sale"}>
                Show more places for sale
              </Link>
            </div>

            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
