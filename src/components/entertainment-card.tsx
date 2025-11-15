"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { IMAGE_CONSTANTS } from "@/lib/image-constants";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { PridecordDropdownContent } from "./pridecord-dropdown";
import { FragrantFlowerDropdownContent } from "./fragrant-flower-dropdown";
import { HorimiyaDropdownContent } from "./horimiya-dropdown";
import { useSong } from "@/lib/use-song";
import { State } from "use-last-fm";
import { MusicDropdownContent } from "./music-dropdown";
import { AdoDropdownContent } from "./ado-dropdown";
import { CafuneDropdownContent } from "./cafune-dropdown";

export function EntertainmentCard() {
  const song = useSong();

  return (
    <Card className="w-full">
      <CardContent className="2xl:grid 2xl:grid-cols-6 pb-2 gap-4 md:gap-2">
        <div className="pb-6 2xl:h-full">
          <small className="font-semibold">Communities</small>
          <div className="my-2" />
          <div className="w-full 2xl:h-full">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="h-full w-full cursor-pointer !px-0 max-2xl:!px-3"
                  variant="outline"
                >
                  <div className="w-full">
                    <div className="flex flex-col items-center justify-center w-full">
                      <div className="relative aspect-[3/4] 2xl:max-w-[175px] 2xl:h-[234px] max-2xl:max-h-[200px] w-full flex items-center justify-center">
                        <div
                          className="absolute inset-0 w-full h-full rounded-xl overflow-hidden"
                          style={{ zIndex: 0 }}
                        >
                          <Image
                            src={IMAGE_CONSTANTS.PRIDECORD_COVER}
                            fill
                            alt="Pridecord Cover"
                            className="w-full h-full object-cover opacity-75 max-2xl:blur-2xl blur-md bg-white"
                          />
                        </div>
                        <div className="relative flex items-center justify-center z-10">
                          <Image
                            src={IMAGE_CONSTANTS.PRIDECORD_COVER}
                            width={940}
                            height={940}
                            alt="Pridecord Cover"
                            className="rounded-xl object-fill w-[128px] h-[128px] md:w-[128px] md:h-[128px]"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="pt-3">Pridecord</div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <PridecordDropdownContent />
            </DropdownMenu>
          </div>
        </div>
        <div className="pb-6 2xl:h-full col-span-2">
          <small className="font-semibold">Anime</small>
          <div className="my-2" />
          <div className="w-full 2xl:h-full 2xl:grid grid-cols-2 gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="h-full w-full cursor-pointer !px-0 max-2xl:!px-3"
                  variant="outline"
                >
                  <div className="w-full">
                    <div className="flex flex-col items-center justify-center w-full">
                      <div className="relative aspect-[3/4] 2xl:max-w-[175px] 2xl:h-[234px] max-2xl:max-h-[200px] w-full flex items-center justify-center">
                        <div
                          className="absolute inset-0 w-full h-full rounded-xl overflow-hidden"
                          style={{ zIndex: 0 }}
                        >
                          <Image
                            src={IMAGE_CONSTANTS.FRAGRANT_FLOWER_COVER}
                            fill
                            alt="Fragrant Flowers Cover"
                            className="w-full h-full object-cover opacity-75 max-2xl:blur-2xl blur-md bg-white"
                          />
                        </div>
                        <div className="relative flex items-center justify-center z-10">
                          <Image
                            src={IMAGE_CONSTANTS.FRAGRANT_FLOWER_COVER}
                            width={940}
                            height={940}
                            alt="Fragrant Flowers Cover"
                            className="rounded-xl object-fill w-[130px] h-[180px]"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="pt-3 text-wrap mx-2 ">
                      Fragrant Flowers Blooms with Dignity
                    </div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <FragrantFlowerDropdownContent />
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="h-full w-full cursor-pointer !px-0 max-2xl:!px-3 max-2xl:mt-3"
                  variant="outline"
                >
                  <div className="w-full">
                    <div className="flex flex-col items-center justify-center w-full">
                      <div className="relative aspect-[3/4] 2xl:max-w-[175px] 2xl:h-[234px] max-2xl:max-h-[200px] w-full flex items-center justify-center">
                        <div
                          className="absolute inset-0 w-full h-full rounded-xl overflow-hidden"
                          style={{ zIndex: 0 }}
                        >
                          <Image
                            src={IMAGE_CONSTANTS.HORIMIYA_COVER}
                            fill
                            alt="Horimiya Cover"
                            className="w-full h-full object-cover opacity-75 max-2xl:blur-2xl blur-md bg-white"
                          />
                        </div>
                        <div className="relative flex items-center justify-center z-10">
                          <Image
                            src={IMAGE_CONSTANTS.HORIMIYA_COVER}
                            width={940}
                            height={940}
                            alt="Horimiya Cover"
                            className="rounded-xl object-fill w-[130px] h-[180px]"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="pt-3 text-wrap mx-2 ">Horimiya</div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <HorimiyaDropdownContent />
            </DropdownMenu>
          </div>
        </div>
        <div className="pb-6 2xl:h-full col-span-3">
          <small className="font-semibold">Music</small>
          <div className="my-2" />
          <div className="w-full 2xl:h-full 2xl:grid grid-cols-3 gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="h-full w-full cursor-pointer !px-0 max-2xl:!px-3"
                  variant="outline"
                >
                  <div className="w-full">
                    <div className="flex flex-col items-center justify-center w-full">
                      {song.albumArt !== undefined && song.albumArt !== "" && (
                        <div className="relative aspect-[3/4] 2xl:max-w-[175px] 2xl:h-[234px] max-2xl:max-h-[200px] w-full flex items-center justify-center">
                          <div
                            className="absolute inset-0 w-full h-full rounded-xl overflow-hidden"
                            style={{ zIndex: 0 }}
                          >
                            <Image
                              src={song.albumArt}
                              fill
                              alt={`${(song.lastFM as State).song?.name ?? "nothing :("} - ${(song.lastFM as State).song?.artist ?? "Nothing playing"}`}
                              className="w-full h-full object-cover opacity-75 max-2xl:blur-2xl blur-md bg-white"
                            />
                          </div>
                          <div className="relative flex items-center justify-center z-10">
                            <Image
                              src={song.albumArt}
                              width={940}
                              height={940}
                              alt={`${(song.lastFM as State).song?.name ?? "nothing :("} - ${(song.lastFM as State).song?.artist ?? "Nothing playing"}`}
                              className="rounded-xl object-fill w-[128px] h-[128px] md:w-[128px] md:h-[128px]"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="pt-3">
                      <span className="text-muted-foreground italic uppercase text-xs">
                        Currently listening to
                      </span>{" "}
                      <br />
                      <span className="text-wrap mx-2">
                        {(song.lastFM as State).song?.name ?? "nothing :("}{" "}
                        {(song.lastFM as State).song !== null && (
                          <>
                            by{" "}
                            {(song.lastFM as State).song?.artist ??
                              "Nothing playing"}
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              {song.albumArt !== undefined && song.albumArt !== "" && (
                <MusicDropdownContent song={song} />
              )}
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="h-full w-full cursor-pointer !px-0 max-2xl:!px-3 max-2xl:mt-3"
                  variant="outline"
                >
                  <div className="w-full">
                    <div className="flex flex-col items-center justify-center w-full">
                      <div className="relative aspect-[3/4] 2xl:max-w-[175px] 2xl:h-[234px] max-2xl:max-h-[200px] w-full flex items-center justify-center">
                        <div
                          className="absolute inset-0 w-full h-full rounded-xl overflow-hidden"
                          style={{ zIndex: 0 }}
                        >
                          <Image
                            src={IMAGE_CONSTANTS.ADO_COVER}
                            fill
                            alt="Ado Cover"
                            className="w-full h-full object-cover opacity-75 max-2xl:blur-2xl blur-md bg-white"
                          />
                        </div>
                        <div className="relative flex items-center justify-center z-10">
                          <Image
                            src={IMAGE_CONSTANTS.ADO_COVER}
                            width={940}
                            height={940}
                            alt="Ado Cover"
                            className="rounded-full object-fill w-[130px] h-[130px]"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="pt-3 text-wrap mx-2 ">
                      <span className="text-muted-foreground italic uppercase text-xs">
                        Favorite J-pop artist
                      </span>{" "}
                      <br />
                      <span>Ado</span>
                    </div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <AdoDropdownContent />
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="h-full w-full cursor-pointer !px-0 max-2xl:!px-3 max-2xl:mt-3"
                  variant="outline"
                >
                  <div className="w-full">
                    <div className="flex flex-col items-center justify-center w-full">
                      <div className="relative aspect-[3/4] 2xl:max-w-[175px] 2xl:h-[234px] max-2xl:max-h-[200px] w-full flex items-center justify-center">
                        <div
                          className="absolute inset-0 w-full h-full rounded-xl overflow-hidden"
                            style={{
                              zIndex: 0
                            }}
                        >
                          <Image
                            src={IMAGE_CONSTANTS.CAFUNE_COVER}
                            fill
                            alt="Cafuné Cover"
                            className="w-full h-full object-cover opacity-75 max-2xl:blur-2xl blur-md bg-white"
                          />
                        </div>
                        <div className="relative flex items-center justify-center z-10">
                          <Image
                            src={IMAGE_CONSTANTS.CAFUNE_COVER}
                            width={940}
                            height={940}
                            alt="Cafuné Cover"
                            className="rounded-full object-fill w-[130px] h-[130px]"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="pt-3 text-wrap mx-2 ">
                      <span className="text-muted-foreground italic uppercase text-xs">
                        Favorite Indie Pop artist
                      </span>{" "}
                      <br />
                      <span>Cafuné</span>
                    </div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <CafuneDropdownContent />
            </DropdownMenu>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
