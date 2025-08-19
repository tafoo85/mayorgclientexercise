/*
Thought process (thinking out loud): main tasks are to 1. normalize the data received and 2. display the data in a grid.
Displaying the data should be relatively straightforward once all the data is formatted in the same way. Main effort would
be how to normalize the data, and do it in a way such that it's scalable for potential future data formats too.

In regards to #1: what would be the best way to do this? First thought is take a parameter that corresponds to the
 type of array (ex. "array", "delimited", "objects"), and use a switch. Think this would be cleaner and more readable/understandable,
 but would also require passing in the array type which would either have to be passed in from the data source or there'd have to be another
 function that generates the array type for the switch.

 Other option I'd consider is taking the array as the only parameter and generating the header/data from it and normalizing it. I think this
 is the most efficient implementation as it's doing the bare-bones of normalizing the data.

 Normalizing the data: ideally, would be nice if 1 of the 3 data structures could be the standard. Hopefully it's the most commonly occurring
 of the 3 data structures, that would cut down on time complexity if the most common data structure doesn't have to be restructured much.

 Main steps:
 -Create grid component that takes data as a parameter
 -In grid component, create a normalizeData function that first determines the data structure type, then converts it into the normalized format. Return headers and rows
 -Render a grid component that takes the normalized data, with a headers parameter and a rows parameter

 3 data types: can distinguish by first item. Check if first item is an array/string/object, then format accordingly.
 
 Error handling: what if data is not any of the types?

 Additional features: suspense loading (what to load before data is fetched?)
*/

import { normalizeData } from "./utils";

type Props = {
  data: any;
};

//Grid component: takes a data object, normalizes it to generate header and rows
export const Grid: React.FC<Props> = ({ data }) => {
  const { headers, rows } = normalizeData(data);

  return (
    <div>
      <table className="border">
        <thead>
          <tr className="border">
            {headers.map((header, index) => {
              return <th key={index}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody className="border">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((value, valueIndex) => (
                <td key={valueIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
