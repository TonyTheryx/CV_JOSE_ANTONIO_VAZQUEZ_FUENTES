
const CategoriesFilter = () => {
    const Categories = [

        { label: "Proyects", value: "Proyects" },
        { label: "3D Models", value: "3D Models" },
        { label: "Images", value: "Images" },
        { label: "Electronics", value: "Electronics" },
        { label: "Other", value: "Other" },
        
    ];
    return (
        <div className="flex bg-bermuda rounded-lg p-4 mt-4">
            <div className="grid grid-cols-4 gap-1">
                <h3 className="text-lg font-semibold">Categories</h3>
                {Categories.map((category) => (
                    <label key={category.value} className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            className="form-checkbox"
                        />
                        <span>{category.label}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};
export default CategoriesFilter;