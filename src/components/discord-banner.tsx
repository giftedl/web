'use client';

import { ReactNode, Suspense } from "react";
import { Discord } from "@/components/discord";
import { QueryClientProvider, useQuery } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/query-core";
import { getDiscordAccountData } from "@/app/actions";
import Image from "next/image"

export function DiscordSocialBanner() {
    const queryClient = new QueryClient()

    return (
        <Suspense
            fallback={
                <></> as ReactNode
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

    return <Image
        src={query.data?.banner}
        width={128}
        height={128}
        className="transition-all hidden lg:group-hover:block absolute z-0 opacity-30 top-0 w-full rounded-t-md max-lg:hidden"
        style={{
            maskImage: "linear-gradient(to top, transparent 0%, black 99%, black 100%)"
        }}/>
}