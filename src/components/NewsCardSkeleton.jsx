const NewsCardSkeleton = () => {
  return (
    <div
      className="
        card w-full shadow-md animate-pulse
        bg-white dark:bg-[#28292c]
      "
    >
      {/* Image skeleton */}
      <div className="h-48 w-full rounded-t-lg
        bg-gray-200 dark:bg-gray-700" />

      <div className="card-body space-y-3">
        {/* Title */}
        <div className="h-4 w-3/4 rounded
          bg-gray-200 dark:bg-gray-700" />

        {/* Description */}
        <div className="h-3 w-full rounded
          bg-gray-200 dark:bg-gray-700" />
        <div className="h-3 w-5/6 rounded
          bg-gray-200 dark:bg-gray-700" />

        {/* Footer */}
        <div className="flex justify-between items-center pt-3">
          <div className="h-3 w-24 rounded
            bg-gray-200 dark:bg-gray-700" />

          <div className="h-8 w-20 rounded-md
            bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default NewsCardSkeleton;
