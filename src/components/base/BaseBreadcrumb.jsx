import React from "react";
import { Link } from "react-router";

export default function BaseBreadcrumb({
  items,
  separator = "/",
  homeIcon = "🏠",
}) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {/* Home Link */}
        <li className="flex items-center">
          <a
            href="/"
            className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
          >
            {homeIcon}
            <span className="sr-only">Home</span>
          </a>
        </li>

        {items.map((item, index) => (
          <React.Fragment key={index}>
            {/* Separator */}
            <li className="flex items-center">
              <span className="text-gray-400 mx-2">{separator}</span>
            </li>

            {/* Breadcrumb Item */}
            <li className="flex items-center">
              {index === items.length - 1 ? (
                <span className="text-gray-600 font-medium">{item.label}</span>
              ) : (
                <Link
                  to={item.href}
                  className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
}
