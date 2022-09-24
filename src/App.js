import "./App.css";

import { testimonialData } from "./dummyData";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return <Testimonial testimonials={testimonialData} />;
}

export default App;
