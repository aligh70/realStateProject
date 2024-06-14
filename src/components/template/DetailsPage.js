import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiHome3Line } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";
import { BiCalendarCheck } from "react-icons/bi";
import styles from "@/template/DetailsPage.module.css";
import ItemList from "@/module/ItemList";
import Title from "@/module/Title";
import { e2p, sp } from "@/utils/replaceNumber";
import ShareButton from "@/module/ShareButton";

function DetailsPage({
  data: {
    title,
    location,
    description,
    amenities,
    rules,
    realState,
    phone,
    price,
    category,
    constractionDate,
  },
}) {
  const categories = {
    apartment: "آپارتمان",
    villa: "ویلا",
    store: "مغازه",
    office: "دفتر",
  };
  const icons = {
    villa: <RiHome3Line />,
    apartment: <MdApartment />,
    store: <BiStore />,
    office: <GiOfficeChair />,
  };
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{title}</h1>
        <span>
          <HiOutlineLocationMarker />
          {location}
        </span>

        <Title>توضیحات</Title>
        <p>{description}</p>

        <Title>امکانات</Title>
        <ItemList data={amenities} />

        <Title>قوانین</Title>
        <ItemList data={rules} />
      </div>
      <div className={styles.sidebar}>
        <div className={styles.realState}>
          <SiHomebridge />
          <p>{realState}</p>
          <span>
            <AiOutlinePhone />
            {e2p(phone)}
          </span>
        </div>
        <ShareButton />
        <div className={styles.price}>
          <p>
            {icons[category]}
            {categories[category]}
          </p>
          <p>{sp(price)} تومان</p>
          <p>
            <BiCalendarCheck />
            {new Date(constractionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
