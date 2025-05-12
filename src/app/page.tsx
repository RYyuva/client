
"use client";

import dynamic from "next/dynamic";
import { LatLngTuple } from "leaflet";
import { useState } from "react";

const DynamicMap = dynamic(() => import("../components/Map"), {
  ssr: false,
});

export default function Home() {
  const [ll, setLL] = useState<LatLngTuple>([13.08268, 80.270721]);

  return (
    <main className="flex h-screen w-full">
      <section className="bg-red-200 h-full w-full">
        <DynamicMap latlng={[ll, setLL]} />
      </section>
    </main>
  );
}
