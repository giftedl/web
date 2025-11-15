"use client";

import { QueryClient } from "@tanstack/query-core";
import { ReactNode, Suspense } from "react";
import { Discord } from "@/components/discord";
import { QueryClientProvider, useQuery } from "@tanstack/react-query";
import { getDiscordAccountData } from "@/app/actions";
import Image from "next/image";

export function BlueskySocialIcon() {
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

export function RenderedSocialIcon() {
    const query = useQuery({ queryKey: ['account-data-bsky'], queryFn: blueskyFetchFunction })

    if (query.isLoading) return null;

    return <Image src={query.data?.avatar} width={128} height={128} className="size-10 rounded-3xl border mx-auto"/>
}

export type BlueskyProfile = {
    avatar: string;
    banner: string;
}

export const blueskyFetchFunction = async () => {
    return await (await fetch("https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=giftedly.dev")).json();
}