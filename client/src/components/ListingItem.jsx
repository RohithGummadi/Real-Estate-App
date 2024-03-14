import React from 'react';
import { Link } from 'react-router-dom';
import {MdLocationOn} from 'react-icons/md';

export default function ListingItem({listing}) {
  return (
    <div class="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
        <Link to={`/listing/${listing._id}`}>
            <img src={listing.imageUrls[0]|| "https://www.google.com/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod%2Fimages%2Fsold-for-sale-real-estate-sign-in-front-of-new-royalty-free-image-1685982441.jpg&tbnid=qAxnbd5Gv56vuM&vet=12ahUKEwi0yLu1ufKEAxUYJGIAHW_0DnsQMyhIegUIARCkAg..i&imgrefurl=https%3A%2F%2Fwww.housebeautiful.com%2Fdesign-inspiration%2Fhome-makeovers%2Fg44094720%2Ffive-features-that-make-a-home-sell-over-asking%2F&docid=ypBSIahQpciUKM&w=5545&h=3762&q=real%20estate%20pics&ved=2ahUKEwi0yLu1ufKEAxUYJGIAHW_0DnsQMyhIegUIARCkAg"} alt="Listing Cover" className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duaration-300'/>
            <div className="p-3 flex flex-col gap-2 w-full">
                <p className='truncate text-lg font-semibold text-slate-700'>{listing.name}</p>
                <p className="flex items-center gap-1">
                    <MdLocationOn className="h-4 w-4 text-green-700"/>
                    <p className="text-sm text-gray-600 truncate w-full">{listing.address}</p>
                </p>

            </div>
            <p className="text-sm text-gray-600 line-clamp-2 p-2">{listing.description}</p>
            <p className="text-slate-500 mt-2 font-semibold p-2">
                ${listing.offer ? listing.discountPrice.toLocaleString('en-US') : listing.regularPrice.toLocaleString('en-US')}
                {listing.type === "rent" && ' / month'}
            </p>
            <div className='flex gap-2 font-bold text-xs p-2'>
                <p>{listing.bedrooms} Beds</p>
                <p>{listing.bathrooms} Baths</p>
            </div>
        </Link>

    </div>
  )
}


