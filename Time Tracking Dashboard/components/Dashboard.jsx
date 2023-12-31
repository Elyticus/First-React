import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    const setIconColors = () => {
      const icons = document.getElementsByClassName("icons");
      if (icons.length >= 6) {
        icons[0].style.backgroundColor = "hsl(15, 100%, 70%)";
        icons[1].style.backgroundColor = "hsl(195, 74%, 62%)";
        icons[2].style.backgroundColor = "hsl(348, 100%, 68%)";
        icons[3].style.backgroundColor = "hsl(145, 58%, 55%)";
        icons[4].style.backgroundColor = "hsl(264, 64%, 52%)";
        icons[5].style.backgroundColor = "hsl(43, 84%, 65%)";
      }
    };

    setIconColors();
  }, []);
};

export default Dashboard;
