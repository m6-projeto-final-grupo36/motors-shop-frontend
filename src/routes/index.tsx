import { Navigate, Route, Routes } from "react-router-dom";
import { RetrieveAnnouncement } from "../components/RetrieveAnnouncement";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ProfileViewUser } from "../pages/ProfileViewUser";
import { useContext } from "react";
import { AnnouncementContext } from "../Providers/AnnouncementProvider";
import { RecoverPassword } from "../pages/RecoverPassword";
import { UserContext } from "../Providers/UserProvider";

export const ContainerRoutes = () => {
  const { announcementFound } = useContext(AnnouncementContext);

  const { data } = useContext(UserContext);

  let user = "";

  if (Object.keys(data).length) {
    user = data.user.type_account;
  }

  const userId = localStorage.getItem("@userFound");

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/advertiser_announcement" element={<ProfileViewUser />} />
      {user === "advertiser" && (
        <Route
          path="/my_announcements"
          element={<ProfileViewUser page="my_announcements" />}
        />
      )}
      {Object.keys(announcementFound).length && (
        <Route path="/detail" element={<RetrieveAnnouncement />} />
      )}
      {userId && (
        <Route path="/recover_password" element={<RecoverPassword />} />
      )}
      <Route path="*" element={<Navigate replace to={"/"} />} />
    </Routes>
  );
};
