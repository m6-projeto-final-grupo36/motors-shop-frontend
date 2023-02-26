import { useDisclosure } from "@chakra-ui/react";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../../services/api";

interface IAnnouncementContext {
  announcementFound: IAnnouncementRetrieve;
  listAnnouncement: (id: string) => Promise<void>;
  announcements: IAnnouncement[];
  isOpenModalCreateAnnouncement: boolean;
  onOpenModalCreateAnnouncement: () => void;
  onCloseModalCreateAnnouncement: () => void;
  isOpenModalUpdateAnnouncement: boolean;
  onOpenModalUpdateAnnouncement: () => void;
  onCloseModalUpdateAnnouncement: () => void;
  announcementCreate_type: string;
  setAnnouncementCreate_type: (value: string) => void;
  announcementCreate_type_vehicle: string;
  setAnnouncementCreate_type_vehicle: (value: string) => void;
}

interface IAnnouncementProps {
  children: ReactNode;
}

export interface IAnnouncement {
  created_at: Date;
  description: string;
  id: string;
  img_cape: string;
  is_active: boolean;
  mileage: string;
  price: number;
  title: string;
  type: string;
  type_vehicle: string;
  updated_at: Date;
  year: string;
}

interface IImages {
  id: string;
  img: string;
}

interface IAnnouncementRetrieve {
  created_at: Date;
  description: string;
  id: string;
  img_cape: string;
  is_active: boolean;
  mileage: string;
  price: number;
  title: string;
  type: string;
  type_vehicle: string;
  updated_at: Date;
  year: string;
  images: IImages[];
}

export const AnnouncementContext = createContext({} as IAnnouncementContext);

export const AnnouncementProvider = ({ children }: IAnnouncementProps) => {
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);
  const [announcementFound, setAnnnouncementFound] = useState(
    {} as IAnnouncementRetrieve
  );

  const [announcementCreate_type, setAnnouncementCreate_type] =
    useState("sales");
  const [announcementCreate_type_vehicle, setAnnouncementCreate_type_vehicle] =
    useState("car");

  useEffect(() => {
    const listAllAnnouncements = async () => {
      await api
        .get("/announcements")
        .then((res) => setAnnouncements(res.data))
        .catch((err) => console.log(err));
    };
    listAllAnnouncements();
  }, []);

  const listAnnouncement = async (id: string): Promise<void> => {
    await api
      .get(`/announcements/${id}`)
      .then((res) => setAnnnouncementFound(res.data))
      .catch((err) => console.log(err));
  };

  const {
    isOpen: isOpenModalCreateAnnouncement,
    onOpen: onOpenModalCreateAnnouncement,
    onClose: onCloseModalCreateAnnouncement,
  } = useDisclosure();

  const {
    isOpen: isOpenModalUpdateAnnouncement,
    onOpen: onOpenModalUpdateAnnouncement,
    onClose: onCloseModalUpdateAnnouncement,
  } = useDisclosure();

  return (
    <AnnouncementContext.Provider
      value={{
        listAnnouncement,
        announcements,
        announcementFound,
        isOpenModalCreateAnnouncement,
        onCloseModalCreateAnnouncement,
        onOpenModalCreateAnnouncement,
        isOpenModalUpdateAnnouncement,
        onCloseModalUpdateAnnouncement,
        onOpenModalUpdateAnnouncement,
        announcementCreate_type,
        setAnnouncementCreate_type,
        announcementCreate_type_vehicle,
        setAnnouncementCreate_type_vehicle,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};
