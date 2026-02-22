"use client";

import { Suspense } from "react";
import { initI18n } from "@/lib/i18n";

initI18n();

export function I18nProvider({ children }: { children: React.ReactNode }) {
	return <Suspense fallback={null}>{children}</Suspense>;
}
