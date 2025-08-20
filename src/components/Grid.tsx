import { NormalizedGrid } from "@/utils/normalizeGridData";
import React from "react";


interface GridProps {
    data: NormalizedGrid;
}

const Grid: React.FC<GridProps> = ({ data }) => {
    // if data is invalid
    if (!data) {
        return (
            <div className="rounded-xl border border-red-300 bg-red-50 p-4 text-red-700">
                ⚠️ Error: failed to fetch data. Please try again later.
            </div>
        );
    }
    const { headers, rows } = data;

    return (
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="min-w-full border-collapse">
                <thead className="bg-gradient-to-r from-slate-100 to-slate-200">
                    <tr>
                        {headers.map((h, i) => (
                            <th
                                key={i}
                                className="px-4 py-3 text-left font-semibold text-slate-700"
                            >
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rIdx) => (
                        <tr
                            key={rIdx}
                            className={rIdx % 2 === 1 ? "bg-slate-50" : "bg-white"}
                        >
                            {row.map((cell, cIdx) => (
                                <td key={cIdx} className="px-4 py-2 text-slate-600 border-t border-slate-200">
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Grid;

