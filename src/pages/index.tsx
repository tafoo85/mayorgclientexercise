import Grid from "../components/Grid";
import { normalizeGridData } from "../utils/normalizeGridData";
import arrayOfArrays from "../../data/arrayofarray.json";
import arrayOfDelimited from "../../data/arrayofdelimited.json";
import arrayOfObjects from "../../data/arrayofobjects.json";

export default function Home() {
  const data1 = normalizeGridData(arrayOfArrays);
  const data2 = normalizeGridData(arrayOfDelimited);
  const data3 = normalizeGridData(arrayOfObjects);
  const data4 = normalizeGridData({})

  return (
    <main className="space-y-12 p-6">
      <h1 className="text-2xl font-bold">Grid Data Coding Challenge</h1>

      <section>
        <h2 className="mb-2 font-semibold">Array of Arrays</h2>
        <Grid data={data1} />
      </section>

      <section>
        <h2 className="mb-2 font-semibold">Array of Delimited Strings</h2>
        <Grid data={data2} />
      </section>

      <section>
        <h2 className="mb-2 font-semibold">Array of Objects</h2>
        <Grid data={data3} />
      </section>

      <section>
        <h2 className="mb-2 font-semibold">Empty Array (error handling)</h2>
        <Grid data={data4} />
      </section>
    </main>
  );
}
