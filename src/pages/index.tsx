import Grid from "../components/Grid";
import { normalizeGridData } from "../utils/normalizeGridData";
import arrayOfArrays from "../../data/arrayofarray.json";
import arrayOfDelimited from "../../data/arrayofdelimited.json";
import arrayOfObjects from "../../data/arrayofobjects.json";

export default function Home() {
  const data1 = normalizeGridData(arrayOfArrays);
  const data2 = normalizeGridData(arrayOfDelimited);
  const data3 = normalizeGridData(arrayOfObjects);
  return (
    <main className="space-y-12 p-6">
      <h1 className="text-2xl font-bold">Grid Data Coding Challenge</h1>

      <section>
        <h2 className="mb-2 font-semibold">Array of Arrays</h2>
        <Grid {...data1} />
      </section>

      <section>
        <h2 className="mb-2 font-semibold">Array of Delimited Strings</h2>
        <Grid {...data2} />
      </section>

      <section>
        <h2 className="mb-2 font-semibold">Array of Objects</h2>
        <Grid {...data3} />
      </section>
    </main>
  );
}
