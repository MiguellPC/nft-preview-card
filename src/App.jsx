import { Attribution } from "./components/Attribution";
import { Creator } from "./components/Creator";
import { Line } from "./components/Line";
import { Picture } from "./components/Picture";
import { Presentation } from "./components/Presentation";

function App() {
  return (
    <>
      <main className="bg-card-bg rounded-xl w-[350px] p-6 flex justify-center items-center flex-col relative mb-10 shadow-2xl">
        <Picture />
        <Presentation />
        <Line />
        <Creator />
      </main>
      <Attribution />
    </>
  );
}

export default App;
