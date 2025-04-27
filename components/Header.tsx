"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}

export function Header({ title, showBackButton = false }: HeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-sm">
      {showBackButton ? (
        <Button variant="ghost" size="icon" onClick={handleBack}>
          <ArrowLeft className="h-5 w-5" />
          <span className="sr-only">Back</span>
        </Button>
      ) : (
        <div className="w-10"></div> // Placeholder for alignment
      )}
      <h1 className="text-xl font-semibold">{title}</h1>
      <div className="w-10"></div> {/* Placeholder for alignment */}
    </header>
  );
}