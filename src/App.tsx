import AddThing from "./components/AddThing";
import Header from "./components/Header";
import ShowThings from "./components/ShowThings";
import Footer from "./components/Footer";

function App() {
  return (
   <div className="bg-zinc-300">
    <div className="bg-zinc-300 w-full lg:w-2/3 lg:ml-auto lg:mr-auto min-h-screen">
      <Header />
      <div className="mt-4 w-full flex flex-col items-center">
        <AddThing />
      </div>
      <div className="mt-4 w-full flex flex-col items-center">
        <ShowThings />
      </div>
      <Footer />
    </div>
   </div>
  );
}

export default App;
