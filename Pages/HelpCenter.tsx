import React from "react";

export default function HelpCenter() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Help Center</h1>

      <p className="mb-4">
        Welcome to our Help Center! If you have any questions or need support,
        please read through our frequently asked questions or reach out to us.
      </p>

      <p className="mb-4">
        Our team is available to assist you with any issues regarding our
        services. Feel free to contact us through the emails provided below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <img
          src="https://via.placeholder.com/300"
          alt="Help Image 1"
          className="rounded-lg shadow-lg"
        />
        <img
          src="https://via.placeholder.com/300"
          alt="Help Image 2"
          className="rounded-lg shadow-lg"
        />
        <img
          src="https://via.placeholder.com/300"
          alt="Help Image 3"
          className="rounded-lg shadow-lg"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
      <ul className="list-disc pl-5">
        <li>
          <a
            href="mailto:support@example.com"
            className="text-blue-600 hover:underline"
          >
            support@example.com
          </a>
        </li>
        <li>
          <a
            href="mailto:info@example.com"
            className="text-blue-600 hover:underline"
          >
            info@example.com
          </a>
        </li>
        <li>
          <a
            href="mailto:helpdesk@example.com"
            className="text-blue-600 hover:underline"
          >
            helpdesk@example.com
          </a>
        </li>
        <li>
          <a
            href="mailto:admin@example.com"
            className="text-blue-600 hover:underline"
          >
            admin@example.com
          </a>
        </li>
      </ul>
    </div>
  );
}
