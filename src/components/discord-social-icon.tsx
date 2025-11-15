'use client';

import { ReactNode, Suspense } from "react";
import { Discord } from "@/components/discord";
import { QueryClientProvider, useQuery } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/query-core";
import { getDiscordAccountData } from "@/app/actions";
import Image from "next/image"

export function DiscordSocialIcon() {
    const queryClient = new QueryClient()

    return (
        <Suspense
            fallback={
                <Discord className="mx-auto size-6"/> as ReactNode
            }
        >
            <QueryClientProvider client={queryClient}>
                <RenderedSocialIcon />
            </QueryClientProvider>
        </Suspense>
    )
}

function RenderedSocialIcon() {
    const query = useQuery({ queryKey: ['account-data'], queryFn: getDiscordAccountData })

    if (query.isLoading) return null;

    return <Image src={query.data?.avatar} width={128} height={128} className="size-10 rounded-3xl border mx-auto"/>
}