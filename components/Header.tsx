"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  rightContent?: React.ReactNode;
}

  const handleBack = () => {
    router.back();
  };

  return (
<div className="flex items-center justify-between w-full">
        <div className="w-10">
          {showBackButton && (
            <Button variant="ghost" size="icon" onClick={handleBack}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
        </div>
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="w-10 flex justify-end">
          {rightContent}
        </div>
      </div>
      <h1 className="text-xl font-semibold">{title}</h1>
      <div className="w-10"></div> {/* Placeholder for alignment */}
    </header>
  );
}