import MainLayout from "@/components/MainLayout";
import { ogObjectFactory } from "@/lib/og";

import { Metadata } from "next/types";

export const metadata: Metadata = ogObjectFactory({
  title: "Quíenes somos | Futuro Digital",
  description: "",
  ogImageTitle: "",
  ogImageEyebrow: "Quíenes somos",
});

export default function Page() {
  return (
    <MainLayout>
      <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            🏗️ <br />
            Quíenes somos
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">Pronto...</p>
        </div>
      </div>
    </MainLayout>
  );
}
