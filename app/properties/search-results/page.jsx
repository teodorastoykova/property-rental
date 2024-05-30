"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Spinner from "@/components/Spinner";
import PropertySearchForm from "@/components/PropertySearchForm";

const SearchResultsPage = () => {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const propertyType = searchParams.get("propertyType");

  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const res = await fetch(
          `/api/properties/search?location=${location}&propertyType=${propertyType}`
        );

        if (res.status === 200) {
          const data = await res.json();
          setProperties(data);
          console.log(data);
        } else {
          setProperties([]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSearchResults();
  }, [location, propertyType]);

  return (
    <>
      <section className=" bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8">
          <PropertySearchForm />
        </div>
      </section>
      {isLoading ? (
        <Spinner loading={isLoading} />
      ) : (
        <section className="px-4 py-6">
          <h1 className="text-2xl mb-4 text-center">Search Results</h1>
          <Link
            href="/properties"
            className="flex items-center text-blue-500 hover:underline mb-4"
          >
            <FaArrowAltCircleLeft className="mr-2 mb-1" /> Back to Properties
          </Link>
          <div className="container-xl lg:container m-auto px-4 py-6">
            {properties.length === 0 ? (
              <p>No search results found</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {properties.map((property) => (
                  <PropertyCard key={property._id} property={property} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}
      ;
    </>
  );
};

export default SearchResultsPage;
