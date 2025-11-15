import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GitHub } from "@/components/github";
import { Discord } from "@/components/discord";
import { Bluesky } from "@/components/ui/svgs/bluesky";
import { ReactNode } from "react";
import { DiscordSocialIcon } from "@/components/discord-social-icon";
import { DiscordSocialBanner } from "@/components/discord-banner";
import Image from "next/image";
import { BlueskySocialIcon } from "@/components/bluesky-social-icon";
import { BlueskySocialBanner } from "@/components/bluesky-banner";
import { cn } from "@/lib/utils";

const socialData = [
    {
        link: "https://github.com/giftedl",
        icon: <Image src="https://github.com/giftedl.png" width={128} height={128} className="size-10 rounded-3xl border mx-auto"/>,
        platformIcon: <GitHub className="mx-auto size-8 fill-black dark:fill-white"/>,
        banner: null,
        name: "GitHub",
        username: "@giftedl"
    },
    {
        link: "https://discord.com/users/1252031635692720224",
        icon: <DiscordSocialIcon />,
        platformIcon: <Discord className="mx-auto size-8"/>,
        banner: <DiscordSocialBanner />,
        name: "Discord",
        username: "@giftedly"
    },
    {
        link: "https://bsky.app/profile/giftedly.dev",
        icon: <BlueskySocialIcon />,
        platformIcon: <Bluesky className="mx-auto size-8"/>,
        banner: <BlueskySocialBanner />,
        name: "Bluesky",
        username: "@giftedly.dev"
    }
]

export function SocialCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-1">
                    Where can you find me?
                </CardTitle>
            </CardHeader>
            <CardContent className="h-full">
                <div className="xl:grid grid-cols-3 gap-2 xl:h-full">
                    {socialData.map((social) => (
                        <Link href={social.link} key={social.name} target="_blank">
                            <Button
                                variant="outline"
                                className={
                                    cn(
                                        "group h-full max-xl:my-2 text-center cursor-pointer w-full grid grid-cols-1 py-5 relative",
                                    )
                                }
                            >
                                <div className="z-1 grid grid-cols-1 text-center gap-2">
                                    {social.platformIcon}

                                    <span className="text-md">{social.name}</span>
                                </div>
                            </Button>
                        </Link>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}