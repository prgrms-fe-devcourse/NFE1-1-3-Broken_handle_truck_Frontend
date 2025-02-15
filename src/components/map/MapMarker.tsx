import { MapMarker as KakaoMapMarker } from "react-kakao-maps-sdk";
import { categoryImages } from "../../assets/images/category";

interface MapMarkerProps {
  title: string;
  category: string;
  coordinates: [number, number];
  onClick: () => void;
}

export default function MapMarker({
  coordinates,
  category,
  title,
  onClick,
}: MapMarkerProps) {
  return (
    <KakaoMapMarker
      position={{ lat: coordinates[1], lng: coordinates[0] }}
      title={title}
      onClick={onClick}
      image={{
        src: categoryImages[category].marker,
        size: { width: 30, height: 30 },
        options: {
          shape: "circle",
        },
      }}
    />
  );
}
