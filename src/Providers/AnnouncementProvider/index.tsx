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
announcementFound: IAnnouncementRetrieve
  listAnnouncement: (id: string) => Promise<void>;
  announcements: IAnnouncement[];
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

interface IImages{
    id: string;
    img: string
}

interface IAnnouncementRetrieve{
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
    images: IImages[]
}

export const AnnouncementContext = createContext<IAnnouncementContext>(
  {} as IAnnouncementContext
);

export const AnnouncementProvider = ({ children }: IAnnouncementProps) => {

    const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);

  const [announcementFound, setAnnnouncementFound] = useState<IAnnouncementRetrieve>({} as IAnnouncementRetrieve);

  useEffect(() => {
    const listAllAnnouncements = async () => {
      await api
        .get("/announcements")
        .then((res) => setAnnouncements(res.data))
        .catch((err) => console.log(err));
    };
    listAllAnnouncements();
  }, []);

  const listAnnouncement = async(id: string): Promise<void> => {
    await api
        .get(`/announcements/${id}`)
        .then(res => setAnnnouncementFound(res.data))
        .catch(err => console.log(err))
  }

  return (
    <AnnouncementContext.Provider
      value={{ listAnnouncement, announcements, announcementFound }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};
