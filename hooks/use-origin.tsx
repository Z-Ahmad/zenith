import { useEffect, useState } from "react";

//gets origin url of application

export const useOrigin = () => {
  const [mounted, setMounted] = useState(false);
  const origin = typeof window !== "undefined" && 
    window.location.origin ? window.location.origin: "";

  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) {
    return ""
  }

  return origin;
}