"use client";

import "leaflet/dist/leaflet.css";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { addressFields } from "@/constants/address";
import { useLocale } from "next-intl";

// Dynamically import react-leaflet components (client-only)
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const UseMapEvents = dynamic(
  () => import("react-leaflet").then((mod) => mod.useMapEvents),
  { ssr: false }
);

// Custom marker component
function LocationMarker({ geo, setGeo, handleChange }) {
  if (!UseMapEvents) return null;

  const MapEvents = UseMapEvents();
  MapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      console.log("CLICKED at", lat, lng);
      setGeo([lat, lng]);
      handleChange("Geo Location", [lat, lng]);
    },
  });

  return geo ? <Marker position={geo} /> : null;
}

export default function AddressForm() {
  const locale = useLocale();
  const [form, setForm] = useState({});
  const [geo, setGeo] = useState([35.6892, 51.389]);

  // Fix leaflet marker icons
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("leaflet").then((L) => {
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
          iconUrl: require("leaflet/dist/images/marker-icon.png"),
          shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
        });
      });
    }
  }, []);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...form, geo });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-lg">
      {addressFields.map((field, index) => (
        <div key={index} className="flex flex-col space-y-2">
          <Label>{field.label[locale]}</Label>

          {field.type === "text" || field.type === "number" ? (
            <Input
              type={field.type}
              placeholder={field.placeholder[locale]}
              onChange={(e) => handleChange(field.label.en, e.target.value)}
            />
          ) : field.type === "textarea" ? (
            <Textarea
              placeholder={field.placeholder[locale]}
              onChange={(e) => handleChange(field.label.en, e.target.value)}
            />
          ) : field.type === "leaflet" ? (
            <div className="h-64 w-full rounded overflow-hidden cursor-pointer">
              <MapContainer
                center={geo}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <LocationMarker
                  geo={geo}
                  setGeo={setGeo}
                  handleChange={handleChange}
                />
              </MapContainer>
            </div>
          ) : null}
        </div>
      ))}

      <Button type="submit" className="w-full">
        Save Address
      </Button>
    </form>
  );
}
