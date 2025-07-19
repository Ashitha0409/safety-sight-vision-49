import { useEffect, useState } from "react";
import { app } from "@/lib/firebase";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { Badge } from "@/components/ui/badge";

interface CameraStatus {
  id: string;
  name: string;
  status: "Online" | "Offline";
  lastChecked: number;
  location?: string;
}

const db = getFirestore(app);

const LiveCameraStatus = () => {
  const [cameras, setCameras] = useState<CameraStatus[]>([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "cameras"), (snapshot) => {
      setCameras(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as CameraStatus[]
      );
    });
    return () => unsub();
  }, []);

  return (
    <div className="space-y-2">
      {!cameras.length && (
        <div className="text-sm text-muted-foreground">No cameras found.</div>
      )}
      {cameras.map((cam) => (
        <div
          key={cam.id}
          className="flex items-center justify-between rounded-lg p-2 bg-muted/30"
        >
          <div>
            <span className="font-medium">{cam.name}</span>
            {cam.location && (
              <span className="text-xs text-muted-foreground ml-2">
                ({cam.location})
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant={cam.status === "Online" ? "default" : "destructive"}
              className="text-xs"
            >
              {cam.status}
            </Badge>
            <span
              className={`h-3 w-3 rounded-full ${
                cam.status === "Online" ? "bg-green-500" : "bg-red-500"
              }`}
            />
          </div>
          <span className="text-xs text-gray-400 ml-2">
            {cam.lastChecked
              ? new Date(cam.lastChecked * 1000).toLocaleTimeString()
              : ""}
          </span>
        </div>
      ))}
    </div>
  );
};

export default LiveCameraStatus;
