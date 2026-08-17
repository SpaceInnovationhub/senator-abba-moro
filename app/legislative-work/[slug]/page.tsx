import type { Metadata } from "next";
import { notFound } from "next/navigation";

import LegislativeRecordContent from "@/components/legislation/LegislativeRecordContent";
import LegislativeRecordHero from "@/components/legislation/LegislativeRecordHero";

import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import TopBar from "@/components/layouts/TopBar";

import {
  getLegislativeRecordBySlug,
  legislativeRecords,
} from "@/data/legislation";

interface LegislativeRecordPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return legislativeRecords.map((record) => ({
    slug: record.slug,
  }));
}

export async function generateMetadata({
  params,
}: LegislativeRecordPageProps): Promise<Metadata> {
  const { slug } = await params;

  const record = getLegislativeRecordBySlug(slug);

  if (!record) {
    return {
      title: "Legislative Record Not Found",
    };
  }

  return {
    title: `${record.title} | Senator Abba Moro`,
    description: record.summary,
  };
}

export default async function LegislativeRecordPage({
  params,
}: LegislativeRecordPageProps) {
  const { slug } = await params;

  const record = getLegislativeRecordBySlug(slug);

  if (!record) {
    notFound();
  }

  return (
    <>
      <TopBar />
      <Navbar />

      <main>
        <LegislativeRecordHero record={record} />
        <LegislativeRecordContent record={record} />
      </main>

      <Footer />
    </>
  );
}