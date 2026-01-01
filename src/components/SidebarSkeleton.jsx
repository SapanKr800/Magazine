const SidebarSkeleton = () => {
    return (
        <div className="flex gap-3 animate-pulse">
            {/* Image skeleton */}
            <div className="w-16 h-16 rounded-md bg-gray-300 dark:bg-gray-700" />

            {/* Text skeleton */}
            <div className="flex-1 space-y-2">
                <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded" />
                <div className="h-3 w-2/3 bg-gray-300 dark:bg-gray-700 rounded" />
            </div>
        </div>
    );
};

export default SidebarSkeleton;
