import { Navigate, Route, Routes } from "react-router-dom";
import { RetrieveAnnouncement } from "../components/RetrieveAnnouncement";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ProfileViewUser } from "../pages/ProfileViewUser";
import { useContext } from "react";
import { AnnouncementContext } from "../Providers/AnnouncementProvider";

export const ContainerRoutes = () => {

  const {announcementFound} = useContext(AnnouncementContext)

  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/advertiser_announcement" element={<ProfileViewUser />} />
      <Route path="/my_announcements" element={<ProfileViewUser page='my_announcements' />} />
      {
        Object.keys(announcementFound).length &&
        <Route path="/detail" element={<RetrieveAnnouncement />} />
      }
      <Route path="*" element={<Navigate replace to={"/"} />} />
    </Routes>
  )
}



