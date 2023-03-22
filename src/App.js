import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Ashenafi Gebreyesus",
    location: "Lorton,VA",
    tagline: "I'm a Software Developer",
    email: "ashenafi.gebreyesus2@gmail.com",
    availability: "Open for work",
    brand:
      "As a Full-Stack Java developer, I have a strong background in developing and maintaining complex web applications using Java and related technologies. With a deep understanding of the Java ecosystem, I am skilled in both front-end and back-end development and have experience working with popular frameworks such as Spring, Hibernate, and ReactJs.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
