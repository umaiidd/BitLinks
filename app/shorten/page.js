"use client";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [generated, setGenerated] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state
  const [successMessage, setSuccessMessage] = useState(""); // Success message state

  // URL validation function
  const isValidUrl = (url) => {
    try {
      new URL(url); 
      return true;
    } catch (e) {
      return false; 
    }
  };

  const generate = async () => {
    if (!isValidUrl(url)) {
      setError("Please enter a valid URL.");
      return;
    }

    setError(""); // Reset error state
    setLoading(true); // Start loading
    setSuccessMessage(""); // Reset success message

    try {
      const response = await axios.post(
        "/api/v1/shortenurl/",
        { original_url: url },
        {
          headers: {
            "Content-Type": "application/json", // Ensure Content-Type is set to JSON
          },
        }
      );

      const shortendUrl = response.data.data.shortendUrl; // Access the shortendUrl from response
      console.log("Generated short URL:", shortendUrl); // Check the URL here
      setGenerated(shortendUrl);
      setSuccessMessage("Short URL generated successfully!"); // Set success message
    } catch (error) {
      console.error("Error generating short URL:", error);
      const errorMessage =
        error.response?.data?.message || error.message || "An error occurred.";
      setError(errorMessage); // Set error message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-2xl text-center text-purple-700">Generate Your Short URLs</h1>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          value={url}
          className="px-4 py-2 focus:outline-purple-600 rounded-md border-2 border-purple-300"
          placeholder="Enter your URL"
          onChange={(e) => setUrl(e.target.value)}
        />

        <button
          onClick={generate}
          className={`bg-purple-500 rounded-lg shadow-lg p-3 py-1 my-3 font-bold text-white ${
            loading ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={loading} // Disable button while loading
        >
          {loading ? (
            <span>Generating...</span>
          ) : (
            <span>Generate</span>
          )}
        </button>
      </div>

      {/* Display success message */}
      {successMessage && (
        <div className="bg-green-200 text-green-800 p-3 rounded-lg">
          {successMessage}
        </div>
      )}

      {/* Display error message */}
      {error && (
        <div className="bg-red-200 text-red-800 p-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Display the generated short URL */}
      {generated && (
        <>
          <span className="font-bold text-lg">Your Short Link: </span>
          <code className="text-blue-600">
            <Link target="_blank" href={generated}>
              {generated}
            </Link>
          </code>
        </>
      )}
    </div>
  );
};

export default Shorten;
