// cameraStatusUpdater.ts

import fetch from 'node-fetch';
import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// ✅ Initialize Firebase Admin SDK (requires GOOGLE_APPLICATION_CREDENTIALS)
initializeApp({
  credential: applicationDefault(),
});

const db = getFirestore();

// ✅ Camera details
const cameras = [
  {
    id: 'cam1',
    name: 'Main Gate',
    url: 'http://10.85.175.215:8080',
    location: 'Entrance Area',
  },
];

async function checkCameraStatus(camera: {
  id: string;
  name: string;
  url: string;
  location?: string;
}) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000); // 5s timeout

    const res = await fetch(camera.url, {
      method: 'HEAD',
      signal: controller.signal,
    });

    clearTimeout(timeout);
    console.log(`✅ Camera ${camera.name} is Online`);
    return 'Online';
  } catch (err) {
    console.log(`❌ Camera ${camera.name} is Offline`);
    return 'Offline';
  }
}

async function updateCameraStatuses() {
  const timestamp = Math.floor(Date.now() / 1000);

  for (const cam of cameras) {
    const status = await checkCameraStatus(cam);

    await db.collection('cameras').doc(cam.id).set(
      {
        name: cam.name,
        url: cam.url,
        location: cam.location || 'Unknown',
        status,
        lastChecked: timestamp,
      },
      { merge: true }
    );
  }
}

updateCameraStatuses();
