import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Posts from "../components/posts/Posts";
import Single from "../components/posts/Single";
import Write from "../components/posts/Write";
import AboutUs from "../views/AboutUs";

import MDC from "../views/MDC";
import OHS from "../views/OHS";
import EnvirementalHealth from "../views/EnvirementalHealth";

import DynamicDietPage from "../components/qualitative-diets/DynamicDietPage";
import Users from "../views/Users";
import QualitativeDiets from "../components/qualitative-diets/QualitativeDiets";
import BookAppointment from "../components/forms/BookAppointment";
import Vitrack from "../components/Vitrack/Vitrack";

import PreventiveHealthPatientServices from "../views/PreventiveHealthPatientServices";
import PublicHealthInterventions from "../views/PublicHealthInterventions";
import PublicHealthAcademy from "../views/PublicHealthAcademy";

import HealthAndSafety from "../views/HealthAndSafety";
import Volunteering from "../components/Volunteering/Volunteering";
import ShareAroundTheWorld from "../components/ShareAroundTheWorld/ShareAroundTheWorld";
import Auth from "../views/Auth";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mdc" element={<MDC />} />
      <Route path="/book-appointment" element={<BookAppointment />} />
      <Route path="/qualitative-diets" element={<QualitativeDiets />} />
      <Route path="/:dietName" element={<DynamicDietPage />} />
      <Route
        path="/preventive-health-patient-services"
        element={<PreventiveHealthPatientServices />}
      />
      <Route path="/vitrack" element={<Vitrack />} />
      <Route
        path="/public-health-interventions"
        element={<PublicHealthInterventions />}
      />
      <Route path="/public-health-academy" element={<PublicHealthAcademy />} />
      <Route path="/health-and-safety" element={<HealthAndSafety />} />
      <Route path="/ohs" element={<OHS />} />
      <Route path="/environmental-health" element={<EnvirementalHealth />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/volunteering" element={<Volunteering />} />
      <Route path="/auth" element={<Auth />} />

      <Route path="/users" element={<Users />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/post/:id" element={<Single />} />
      <Route path="/write" element={<Write />} />
      <Route path="/users" element={<Users />} />
      <Route path="/share" element={<ShareAroundTheWorld />} />
    </Routes>
  );
};

export default AppRoutes;
