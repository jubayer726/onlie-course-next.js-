import Hero from "@/components/Hero";
import AllPrograms from "./programs/page";
import SuccessStats from "./success/page";
import PreparationSection from "./preparation/page";
import SubjectSpecialist from "./subjects/page";
import Urgency from "./urgency/page";
import Branches from "./branches/page";



const Home = () => {
  return (
    <>
      <Hero/>
      <AllPrograms/>
      <SuccessStats/>
      <SubjectSpecialist/>
      <PreparationSection/>
      <Branches/>
      <Urgency/>
    </>
  );
}
export default Home;