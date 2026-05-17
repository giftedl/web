import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

const RADICLE_FRONTEND = "https://radicle.network"
const PLURALBUDDY_REPO = "rad:z2wgiQhWctsn915UpXRTXJDuf7w1G"
const PLURALSYNC_REPO = "rad:zxqCqSgaUsXM5a5Jd2fVBktEJi2J"

export const config = {
  matcher: ['/r/b(.*)', '/r/s(.*)'],
}

export function proxy(request: NextRequest, event: NextFetchEvent) {
  const getValidUrl = (repoId: string) =>
    `/nodes/${request.url.endsWith("?a=") ? "radicle.ayake.net" : "radicle.giftedly.dev"}/${repoId}/${request.nextUrl.pathname.slice(4, request.nextUrl.pathname.endsWith("?a") ? -2 : 0)}`

  if (request.nextUrl.pathname.startsWith("/r/b")){
    return NextResponse.redirect(new URL(getValidUrl(PLURALBUDDY_REPO), RADICLE_FRONTEND))}

  if (request.nextUrl.pathname.startsWith("/r/s")){
    return NextResponse.redirect(new URL(getValidUrl(PLURALSYNC_REPO), RADICLE_FRONTEND))}
  
}
