import React from "react";

const DecadesFilter = () => {
    const [isChecked, setIsChecked] = React.useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const Decades = [

        { label: "1910s", value: "1910s" },
        { label: "1920s", value: "1920s" },
        { label: "1930s", value: "1930s" },
        { label: "1940s", value: "1940s" },
        { label: "1950s", value: "1950s" },
        { label: "1960s", value: "1960s" },
        { label: "1970s", value: "1970s" },
        { label: "1980s", value: "1980s" },
        { label: "1990s", value: "1990s" },
        { label: "2000s", value: "2000s" },
    ];
    return (
        <div className="flex flex-col gap-2 bg-bermuda rounded-lg p-4 mt-4">
            <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold">Decades</h3>
                {Decades.map((decade) => (
                    <label key={decade.value} className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            className="form-checkbox"
                        />
                        <span>{decade.label}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};
export default DecadesFilter;