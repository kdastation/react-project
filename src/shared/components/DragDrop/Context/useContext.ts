import useTypedContext from "@/shared/lib/hooks/useTypedContext";
import { Context } from "./Context";

export const useContext = () => {
  const ctx = useTypedContext(Context);

  return ctx;
};
