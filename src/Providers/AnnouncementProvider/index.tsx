import { useDisclosure } from "@chakra-ui/react";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { api } from "../../services/api";

interface IAnnouncementContext {
  announcementFound: IAnnouncementRetrieve;
  listAnnouncement: (id: string) => Promise<void>;
  announcements: IAnnouncement[];
  setAnnouncements: Dispatch<SetStateAction<IAnnouncement[]>>;
  isOpenModalCreateAnnouncement: boolean;
  onOpenModalCreateAnnouncement: () => void;
  onCloseModalCreateAnnouncement: () => void;
  isOpenModalUpdateAnnouncement: boolean;
  onOpenModalUpdateAnnouncement: () => void;
  onCloseModalUpdateAnnouncement: () => void;
  announcementSelected_type: string;
  setAnnouncementSelected_type: (value: string) => void;
  announcementSelected_type_vehicle: string;
  setAnnouncementSelected_type_vehicle: (value: string) => void;
  imgsCreate: string[];
  imgsUpdate: string[];
  setImgsUpdate: Dispatch<SetStateAction<string[]>>;
  setImgsCreate: Dispatch<SetStateAction<string[]>>;
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
  images: string[];
}

export const AnnouncementContext = createContext({} as IAnnouncementContext);

export const AnnouncementProvider = ({ children }: IAnnouncementProps) => {
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);
  const [announcementFound, setAnnnouncementFound] = useState(
    {} as IAnnouncementRetrieve
  );

  const [announcementSelected_type, setAnnouncementSelected_type] =
    useState("sales");
  const [
    announcementSelected_type_vehicle,
    setAnnouncementSelected_type_vehicle,
  ] = useState("car");
  const [imgsCreate, setImgsCreate] = useState([""] as string[]);
  const [imgsUpdate, setImgsUpdate] = useState([""] as string[]);

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
      .get<IAnnouncementRetrieve>(`/announcements/${id}`)
      .then((res) => {
        setAnnnouncementFound(res.data);
        setImgsUpdate(res.data.images);
      })
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
        setAnnouncements,
        announcementFound,
        isOpenModalCreateAnnouncement,
        onCloseModalCreateAnnouncement,
        onOpenModalCreateAnnouncement,
        isOpenModalUpdateAnnouncement,
        onCloseModalUpdateAnnouncement,
        onOpenModalUpdateAnnouncement,
        announcementSelected_type,
        announcementSelected_type_vehicle,
        setAnnouncementSelected_type,
        setAnnouncementSelected_type_vehicle,
        imgsCreate,
        setImgsCreate,
        imgsUpdate,
        setImgsUpdate,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};
