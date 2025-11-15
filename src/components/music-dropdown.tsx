/* -----------------------------------------------------------------------   * <copyright company="Microsoft Corporation"> *   Copyright (c) Microsoft Corporation.  All rights reserved. * </copyright> * ----------------------------------------------------------------------- */

import Image from "next/image";
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "./ui/dropdown-menu";
import { IMAGE_CONSTANTS } from "@/lib/image-constants";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { NetflixIcon } from "./ui/svgs/netflixIcon";
import type { useSong } from "@/lib/use-song";
import { Spotify } from "./ui/svgs/spotify";
import { State } from "use-last-fm";

export function MusicDropdownContent({
  song,
}: {
  song: ReturnType<typeof useSong>;
}) {
  return (
    <DropdownMenuContent className="w-56 p-0" align="center">
      {song.albumArt !== "" && song.albumArt !== undefined && (
        <div className="relative h-full py-6 w-full">
          <div
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ zIndex: 0 }}
          >
            <Image
              src={song.albumArt}
              fill         
              alt={`${(song.lastFM as State).song?.name ?? "nothing :("} - ${(song.lastFM as State).song?.artist ?? "Nothing playing"}`}
              className="w-full h-full object-cover opacity-75 2xl:blur-lg max-2xl:blur-2xl bg-white"
            />
          </div>
          <div
            className="relative flex justify-center items-center"
            style={{ zIndex: 1 }}
          >
            <Image
              src={song.albumArt}
              width={940}
              height={940}  
              alt={`${(song.lastFM as State).song?.name ?? "nothing :("} - ${(song.lastFM as State).song?.artist ?? "Nothing playing"}`}
              className="rounded-xl object-fill w-[130px] h-[130px]"
            />
          </div>
        </div>
      )}

      <DropdownMenuSeparator className="mt-0" />

      <div className="p-1">
        <DropdownMenuGroup>
          <Link href={song.linkURI} target="_blank">
            <DropdownMenuItem>
              <span className="flex w-full items-center justify-between">
                <span className="flex items-center gap-1">
                  Listen on <Spotify /> Spotify
                </span>
                <ExternalLink className="ml-2" />
              </span>
            </DropdownMenuItem>
          </Link>
          <Link href={song.songURL} target="_blank">
            <DropdownMenuItem>
              <span className="flex w-full items-center justify-between">
                <span className="flex items-center gap-1">
                  Listen on <Spotify /> Spotify (web)
                </span>
                <ExternalLink className="ml-2" />
              </span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </div>
    </DropdownMenuContent>
  );
}
