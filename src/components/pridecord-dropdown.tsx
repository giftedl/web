/* -----------------------------------------------------------------------   * <copyright company="Microsoft Corporation"> *   Copyright (c) Microsoft Corporation.  All rights reserved. * </copyright> * ----------------------------------------------------------------------- */

import Image from "next/image";
import { DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from "./ui/dropdown-menu";
import { IMAGE_CONSTANTS } from "@/lib/image-constants";
import Link from "next/link";
import { ExternalLink, GitBranch, Shield } from "lucide-react";
import { Badge } from "./ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Discord } from "./discord";

export function PridecordDropdownContent() {
  return (
    <DropdownMenuContent className="w-56 p-0" align="center">
      <div className="relative h-full py-6 w-full">
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ zIndex: 0 }}
        >
          <Image
            src={IMAGE_CONSTANTS.PRIDECORD_COVER}
            fill
            alt="Pridecord Cover"
            className="w-full h-full object-cover opacity-75 2xl:blur-lg max-2xl:blur-2xl bg-white"
          />
        </div>
        <div
          className="relative flex justify-center items-center"
          style={{ zIndex: 1 }}
        >
          <Image
            src={IMAGE_CONSTANTS.PRIDECORD_COVER}
            width={940}
            height={940}
            alt="Pridecord Cover"
            className="rounded-xl size-32 object-fill min-w-[128px] min-h-[128px]"
          />
        </div>
      </div>
      <DropdownMenuSeparator className="mt-0" />

      <div className="p-1">
        <DropdownMenuGroup>
          <Link href="https://austinn.men" target="_blank">
            <DropdownMenuItem>
              <span className="flex w-full items-center justify-between">
                <span>Join Server</span>
                <ExternalLink className="ml-2" />
              </span>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span className="flex w-full items-center justify-between">
                <span>Roles</span>
                <span className="flex gap-1">
                  <Badge>Developer</Badge>
                  <Badge variant="outline">+1</Badge>
                </span>
              </span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Badge>
                    <Shield className="text-white dark:text-black" />
                    Developer
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Badge>
                    <GitBranch className="text-white dark:text-black" />
                    Lead Minecraft Developer
                  </Badge>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </div>
    </DropdownMenuContent>
  );
}
