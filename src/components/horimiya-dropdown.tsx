/* -----------------------------------------------------------------------   * <copyright company="Microsoft Corporation"> *   Copyright (c) Microsoft Corporation.  All rights reserved. * </copyright> * ----------------------------------------------------------------------- *//* -----------------------------------------------------------------------   * <copyright company="Microsoft Corporation"> *   Copyright (c) Microsoft Corporation.  All rights reserved. * </copyright> * ----------------------------------------------------------------------- */

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

export function HorimiyaDropdownContent() {
  return (
    <DropdownMenuContent className="w-56 p-0" align="center">
      <div className="relative h-full py-6 w-full">
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ zIndex: 0 }}
        >
          <Image
            src={IMAGE_CONSTANTS.HORIMIYA_COVER}
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
            src={IMAGE_CONSTANTS.HORIMIYA_COVER}
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
                    this was the first anime that i've watched!
                  </p>

                  <p>
                    i feel when i watched this anime it had a good variety of viewpoints throughout the side characters and such.
                    this anime brings a smile to my face every single time that i see clips of it. i love this anime!!
                  </p>
                </div>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <Link href="https://www.crunchyroll.com/series/G9VHN9P43/horimiya" target="_blank">
            <DropdownMenuItem>
              <span className="flex w-full items-center justify-between">
                <span className="flex items-center gap-1">
                  Watch on Crunchyroll
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