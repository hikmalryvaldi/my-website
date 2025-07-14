import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Technologies from './Technologies';

function RightSide() {
  return (
    <div>
      <About />
      <Technologies />
      <Projects />
      <Contact />
      {/* <div className="h-[500px]"></div> */}
    </div>
  );
}

export default RightSide;
