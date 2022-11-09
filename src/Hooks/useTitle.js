import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    if (title.length === 0) {
      document.title = "Photography: Hire for Photography Services";
    } else {
      document.title = `${title} - Photography: Hire for Photography Services`;
    }
  }, [title]);
};

export default useTitle;
