export type NormalizedGrid = {
    headers: string[];
    rows: string[][];
} | null;

// 1. Detect data type & normalize
export function normalizeGridData(data: any): NormalizedGrid {
    //Error: Unsupported data format
    if (!Array.isArray(data)) return null;

    // Case 1: Array of Arrays
    if (Array.isArray(data[0])) {
        const [headers, ...rows] = data;
        return { headers, rows };
    }

    // Case 2: Array of Pipe-Delimited Strings
    if (typeof data[0] === "string") {
        const parsed = data.map((row: string) => row.split("|"));
        const [headers, ...rows] = parsed;
        return { headers, rows };
    }

    // Case 3: Array of Objects: (Cell-Based)
    if (typeof data[0] === "object" && "col" in data[0]) {
        const maxRow = Math.max(...data.map((c) => c.row));
        const maxCol = Math.max(...data.map((c) => c.col));

        const grid: string[][] = Array.from({ length: maxRow + 1 }, () =>
            Array(maxCol + 1).fill("")
        );

        data.forEach((cell: { col: number; row: number; value: string }) => {
            grid[cell.row][cell.col] = cell.value;
        });

        const [headers, ...rows] = grid;
        return { headers, rows };
    }

    //Error: Unsupported data format
    return null;
}

