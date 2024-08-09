import useFetch from "../customHooks/useFetch";
import { tableLength } from "../pages/Filter";
import gifImage from "../../assets/images/thinkingFaceThinking.gif";

export default function Loading() {
  const { isLoading } = useFetch(
    `https://dummyjson.com/users?limit=${tableLength}`,
    "users",
    "users",
  );

  return (
    isLoading && (
      <section className="mt-32 grid place-items-center">
        <img src={gifImage} className="size-32" alt="Loading..." />
      </section>
    )
  );
}