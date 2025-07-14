import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

function App() {
  return (
    <div className="min-h-screen bg-[#0A192F] text-slate-300">
      <div className="container max-w-screen-xl mx-auto lg:px-8">
        <div className="flex flex-col lg:flex-row">
          <header className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between py-12 lg:py-24 lg:pr-12">
            <LeftSide />
          </header>
          <main className="lg:w-1/2 lg:py-24">
            <RightSide />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
