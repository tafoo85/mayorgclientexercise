type NormalizedData = {
  headers: string[];
  rows: string[][];
};

//originally had this as a function in the grid component, but separated it out as it could potentially be a reusable piece in another component
export function normalizeData(data: any): NormalizedData {
  if (Array.isArray(data[0])) {
    // Initially working on this implementation for arrayofarray and was working on arrayofdelimited, then realized I could use a spread operator
    //   const headers = data[0];
    //   data.shift();
    //   const rows = data;
    //   return { headers, rows };

    const [headers, ...rows] = data;
    console.log("arrays");
    console.log(headers);
    console.log(rows);
    return { headers, rows };
  } else if (typeof data[0] === "string") {
    // const headers = data[0].split("|");
    // data.shift()
    // const rows = data.map((item:string)=> item.split("|"))
    const [headers, ...rows] = data.map((item: string) => item.split("|"));
    console.log("delimited");
    console.log(headers);
    console.log(rows);
    return { headers, rows };
  } else if (typeof data[0] === "object") {
    const sortToRows: string[][] = [];
    data.forEach((obj: { col: number; row: number; value: string }) => {
      if (!sortToRows[obj.row]) {
        sortToRows[obj.row] = [];
      }
      sortToRows[obj.row][obj.col] = obj.value;
    });

    const [headers, ...rows] = sortToRows;
    console.log("objects");
    console.log(headers);
    console.log(rows);
    return { headers, rows };
  } else {
    const headers: any = [];
    const rows: any = [];
    return { headers, rows };
  }
}
