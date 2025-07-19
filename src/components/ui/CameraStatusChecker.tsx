import React, { useEffect, useState } from "react";

interface CameraProps {
  name: string;
  url: string;
}

const CameraStatus = ({ name, url }: CameraProps) => {
  const [status, setStatus] = useState<"Online" | "Offline">("Offline");

  // Trick: Try to load camera stream as <img> (works with motionjpeg or preview snapshot endpoints)
  const checkCamera = () => {
    const img = new Image();
    img.src = `${url}?timestamp=${new Date().getTime()}`; // cache breaker

    img.onload = () => {
      setStatus("Online");
    };

    img.onerror = () => {
      setStatus("Offline");
    };
  };

  useEffect(() => {
    checkCamera();
    const interval = setInterval(checkCamera, 10000); // Check every 10s
    return () => clearInterval(interval);
  }, [url]);

  return (
    <div className="p-3 flex items-center gap-4 rounded-lg bg-white shadow">
      <div className="text-lg font-semibold">{name}</div>
      <div
        className={`font-bold ${
          status === "Online" ? "text-green-600" : "text-red-600"
        }`}
      >
        {status}
      </div>
      <div
        className={`h-3 w-3 rounded-full ${
          status === "Online" ? "bg-green-500" : "bg-red-500"
        }`}
      ></div>
    </div>
  );
};

export default CameraStatus;
