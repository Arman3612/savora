import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-wrapper">
      {/* Banner Skeleton */}
      <div className="shimmer-banner"></div>

      {/* Filter Row Skeleton */}
      <div className="shimmer-filters-row">
        <div className="shimmer-filter-pill"></div>
        <div className="shimmer-filter-pill"></div>
        <div className="shimmer-filter-pill"></div>
        <div className="shimmer-filter-pill"></div>
        <div className="shimmer-filter-pill"></div>
      </div>

      {/* Cards Grid Skeleton */}
      <div className="shimmer-cards-grid">
        {Array(8)
          .fill("")
          .map((_, index) => (
            <div key={index} className="shimmer-card">
              <div className="shimmer-image"></div>
              <div className="shimmer-content">
                <div className="shimmer-line shimmer-title"></div>
                <div className="shimmer-line shimmer-rating"></div>
                <div className="shimmer-line shimmer-cuisines"></div>
                <div className="shimmer-line shimmer-locality"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;