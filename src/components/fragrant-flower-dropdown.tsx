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
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { IMAGE_CONSTANTS } from "@/lib/image-constants";
import Link from "next/link";
import { ExternalLink, GitBranch, Shield } from "lucide-react";
import { Badge } from "./ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Discord } from "./discord";
import { NetflixIcon } from "./ui/svgs/netflixIcon";

export function FragrantFlowerDropdownContent() {
  return (
    <DropdownMenuContent className="w-56 p-0" align="center">
      <div className="relative h-full py-6 w-full">
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ zIndex: 0 }}
        >
          <Image
            src={IMAGE_CONSTANTS.FRAGRANT_FLOWER_COVER}
            fill
            alt="Fragrant Flowers Cover"
            className="w-full h-full object-cover opacity-75 2xl:blur-lg max-2xl:blur-2xl bg-white"
          />
        </div>
        <div
          className="relative flex justify-center items-center"
          style={{ zIndex: 1 }}
        >
          <Image
            src={IMAGE_CONSTANTS.FRAGRANT_FLOWER_COVER}
            width={940}
            height={940}
            alt="Fragrant Flowers Cover"
            className="rounded-xl object-fill w-[130px] h-[180px]"
          />
        </div>
      </div>
      <DropdownMenuSeparator className="mt-0" />

      <div className="p-1">
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>About</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <div className="p-4 text-muted-foreground text-sm text-wrap max-w-[300px] space-y-1">
                  <p>
                    this is one of the best pieces of media I've ever watched.
                    period. i still see reels to this day about this romance
                    piece and i loved every single moment of this anime. {"<"}3.
                  </p>

                  <p>
                    i cannot wait for a sequel if that is ever to get announced.
                    i loved all of the characters along with the overall plot
                    structure of this anime.
                  </p>
                </div>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <Link href="https://www.netflix.com/title/82024665" target="_blank">
            <DropdownMenuItem>
              <span className="flex w-full items-center justify-between">
                <span className="flex items-center gap-1">
                  Watch on <NetflixIcon /> Netflix
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
