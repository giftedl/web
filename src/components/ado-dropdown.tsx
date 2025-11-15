
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
import { AppleMusicIcon } from "./ui/svgs/appleMusicIcon";
import { Spotify } from "./ui/svgs/spotify";

export function AdoDropdownContent() {
  return (
    <DropdownMenuContent className="w-56 p-0" align="center">
      <div className="relative h-full py-6 w-full">
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ zIndex: 0 }}
        >
          <Image
            src={IMAGE_CONSTANTS.ADO_COVER}
            fill
            alt="Ado Cover"
            className="w-full h-full object-cover opacity-75 2xl:blur-lg max-2xl:blur-2xl bg-white"
          />
        </div>
        <div
          className="relative flex justify-center items-center"
          style={{ zIndex: 1 }}
        >
          <Image
            src={IMAGE_CONSTANTS.ADO_COVER}
            width={940}
            height={940}
            alt="Ado Cover"
            className="rounded-full object-fill w-[130px] h-[130px]"
          />
        </div>
      </div>
      <DropdownMenuSeparator className="mt-0" />

      <div className="p-1">
        <DropdownMenuGroup>
          <Link href="https://music.apple.com/us/artist/ado/1492604670" target="_blank">
            <DropdownMenuItem>
              <span className="flex w-full items-center justify-between">
                <span className="flex items-center gap-1">
                  Listen on <AppleMusicIcon /> Apple Music
                </span>
                <ExternalLink className="ml-2" />
              </span>
            </DropdownMenuItem>
          </Link>
          <Link href="spotify:artist:6mEQK9m2krja6X1cfsAjfl" target="_blank">
            <DropdownMenuItem>
              <span className="flex w-full items-center justify-between">
                <span className="flex items-center gap-1">
                  Listen on <Spotify /> Spotify
                </span>
                <ExternalLink className="ml-2" />
              </span>
            </DropdownMenuItem>
          </Link>
          <Link href="https://open.spotify.com/artist/6mEQK9m2krja6X1cfsAjfl" target="_blank">
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