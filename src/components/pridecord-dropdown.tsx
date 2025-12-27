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
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Related People</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="w-86" >
                {[
                  {
                    name: "Austin",
                    username: "@auxtinn",
                    badges: ["Owner"],
                    link: "https://austinn.dev",
                    discord: "288897433805651968",
                    pronouns: "he/him",
                  },
                  {
                    name: "Shane",
                    username: "@jetcrooked",
                    badges: ["Owner"],
                    discord: "238353818125991936",
                    pronouns: "he/him",
                    link: "#",
                  },
                  {
                    name: "Scar",
                    username: "@scarland.",
                    badges: ["Friend", "Sr. Mod"],
                    discord: "616326184170422343",
                    pronouns: "he/hxm/it/rot",
                    link: "https://rentry.co/scriptured",
                  },
                  {
                    name: "Kris",
                    username: "@kel3159",
                    badges: ["Friend", "Helper"],
                    discord: "526137220353097746",
                    pronouns: "they/them",
                    link: "#",
                  },
                  {
                    name: "Raine",
                    username: "@raincloudzy",
                    badges: ["Friend", "Mod"],
                    discord: "296648819465125888",
                    link: "#",
                    pronouns: "they/any",
                  }
                ].map((person) => (
                  <Tooltip key={person.name}>
                    <TooltipContent>{person.pronouns}</TooltipContent>
                    <TooltipTrigger asChild>
                      <Link
                        href={person.link}
                        target={person.link === "#" ? "" : "_blank"}
                      >
                        <DropdownMenuItem className="flex justify-between">
                          <span className="flex gap-1">
                            {person.name}{" "}
                            <span className="text-muted-foreground flex gap-1 items-center">
                              {person.username}{" "}
                              {person.link !== "#" && (
                                <ExternalLink size={12} />
                              )}
                            </span>
                          </span>
                          <span className="flex gap-1 items-center">
                            <Link
                              href={`https://discord.com/users/${person.discord}`}
                              target="_blank"
                            >
                              <Badge className="bg-[#cdd1fb]" onClick={event => event.stopPropagation()}>
                                <Discord />
                              </Badge>
                            </Link>
                            {person.badges.map((badge) => (
                              <Badge key={badge}>{badge}</Badge>
                            ))}
                          </span>
                        </DropdownMenuItem>
                      </Link>
                    </TooltipTrigger>
                  </Tooltip>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </div>
    </DropdownMenuContent>
  );
}
