import { useTimeGeoContext } from "../../context/TimeGeoContext";
export default function CurrentLocation() {
  const { geoData } = useTimeGeoContext();

  return (
    geoData && (
      <p className="mt-4 text-xl">
        <strong>{`${geoData.city || "Cidade desconhecida"}, ${geoData.region || "Estado desconhecido"}, ${geoData.country || "País desconhecido"}`}</strong>
      </p>
    )
  );
}
