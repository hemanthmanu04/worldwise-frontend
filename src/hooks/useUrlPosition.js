import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const Latitude = searchParams.get("lat");
  const Longitude = searchParams.get("lng");

  return [Latitude, Longitude];
}
