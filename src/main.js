import maplibregl from "maplibre-gl";
import { LidarControl } from "maplibre-gl-lidar";
import "maplibre-gl-lidar/style.css";
import "maplibre-gl/dist/maplibre-gl.css";

const map = new maplibregl.Map({
  container: "map",
  style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
  center: [-122.4, 37.8],
  zoom: 12,
  pitch: 60,
  maxPitch: 85, // Allow higher pitch for better 3D viewing
});

map.on("load", () => {
  // Add the LiDAR control
  const lidarControl = new LidarControl({
    title: "LiDAR Viewer",
    collapsed: true,
    pointSize: 2,
    colorScheme: "elevation",
    pickable: true, // Enable point picking for hover tooltips
  });

  map.addControl(lidarControl, "top-right");

  // Listen for events
  lidarControl.on("load", (event) => {
    console.log("Point cloud loaded:", event.pointCloud);
    lidarControl.flyToPointCloud();
  });

  // Load a point cloud programmatically
  lidarControl.loadPointCloud(
    "https://s3.amazonaws.com/hobu-lidar/autzen-classified.copc.laz"
  );
});