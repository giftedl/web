/* -----------------------------------------------------------------------   * <copyright company="Microsoft Corporation"> *   Copyright (c) Microsoft Corporation.  All rights reserved. * </copyright> * ----------------------------------------------------------------------- */

import Link from "next/link";
import { Discord } from "./discord";
import { Card } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { MongodbIconDark } from "./ui/svgs/mongodbIconDark";
import { NextjsIconDark } from "./ui/svgs/nextjsIconDark";
import { ReactDark } from "./ui/svgs/reactDark";
import { Spotify } from "./ui/svgs/spotify";
import { Typescript } from "./ui/svgs/typescript";
import { Vscode } from "./ui/svgs/vscode";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export function AboutMeCard() {
  return (
    <Card className="p-4">
      <ScrollArea className={`w-full h-[300px] ${inter.className}`}>
        <div className="space-y-3 pr-3 font-inter text-[15px]">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            about me ^_^
          </h2>
          <p className="leading-7">
            hello there! welcome to my site! i'm a full stack web developer from
            America. i usually mess around with these technologies:
          </p>
          <div className="flex gap-4">
            <NextjsIconDark className="size-6" />
            <ReactDark className="size-6" />
            <Vscode className="size-6" />
            <Typescript className="size-6" />
            <Discord className="size-6" />
            <MongodbIconDark className="size-6" />
          </div>
          <p className="leading-7">
            you can often see me around chatting on Pridecord or programming.
            i've made numerous projects over the years throughout various
            different stacks so i'm pretty active in coding.
          </p>
          <p className="leading-7">
            additionally i also enjoy listening to music a lot. i don't really
            have many favorite songs so to speak but i'm often listening to a
            variety of genres, with my all-time favorite being japanese pop
            music (j-pop).
          </p>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            pronoun identity
          </h3>
          <p className="tracking-7">
            i'm <PronounNonconforming /> & <CrossPronominal />! these mean that even though i identify with pronouns as she/they, i'm still a male.
            i'd prefer if you would <b>not</b> refer to me with masculine pronouns. certain masculine terms used usually neutrally (ie. bro) is okay.

          </p>
        </div>
      </ScrollArea>
    </Card>
  );
}

function PronounNonconforming() {
  return (
    <Link
      href="https://lgbtqia.wiki/wiki/Pronoun_Non-Conforming"
      className="inline-flex items-center gap-1 text-accent-foreground hover:!underline underline-offset-4 align-middle"
    >
      <span className="size-6 flex items-center justify-center overflow-hidden rounded shrink-0 align-middle">
        <Image
          src="/image/pronoun-non-conforming-flag.png"
          alt="Pronouns Non-conforming"
          width={220}
          height={132}
          className="object-contain rounded inline-block"
        />
      </span>
      <span className="align-middle ">Pronouns Non-Conforming</span>
    </Link>
  );
}

function CrossPronominal() {
  return (
    <Link
      href="https://lgbtqia.wiki/wiki/Crosspronominal"
      className="inline-flex items-center gap-1 text-accent-foreground hover:!underline underline-offset-4 align-middle"
    >
      <span className="size-6 flex items-center justify-center overflow-hidden rounded shrink-0 align-middle">
        <Image
          src="/image/crosspronominal-flag.png"
          alt="Crosspronominal"
          width={220}
          height={132}
          className="object-contain rounded inline-block"
        />
      </span>
      <span className="align-middle">Cross Pronominal</span>
    </Link>
  );
}
