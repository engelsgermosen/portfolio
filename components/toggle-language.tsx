"use client";

import * as React from "react";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage, useTranslation } from "@/components/language-provider";

const ToggleLanguage = () => {
  const { locale, setLocale } = useLanguage();
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="size-[38px] cursor-pointer rounded-[10px] border-border bg-card hover:border-primary"
        >
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{t.language.label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => setLocale("es")}
          aria-checked={locale === "es"}
        >
          {t.language.spanish}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => setLocale("en")}
          aria-checked={locale === "en"}
        >
          {t.language.english}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ToggleLanguage;
