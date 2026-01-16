import Hero from "@/components/Hero";
import AllPrograms from "./programs/page";
import SuccessStats from "./success/page";
import PreparationSection from "./preparation/page";
import SubjectSpecialist from "./subjects/page";



const Home = () => {
  return (
    <>
      <Hero/>
      <AllPrograms/>
      <SuccessStats/>
      <SubjectSpecialist/>
      <PreparationSection/>
    </>
  );
}
export default Home;