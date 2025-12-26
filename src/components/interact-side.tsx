import { Check, ExternalLink, X } from "lucide-react";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export function InteractCard() {
  return (
    <Card className="px-4 py-2">
      <Tabs defaultValue="likes">
        <TabsList>
          <TabsTrigger value="likes">likes</TabsTrigger>
          <TabsTrigger value="dni">DNI</TabsTrigger>
        </TabsList>

        <TabsContent value="likes" className={inter.className}>
          <div className="pl-4 flex pt-4 items-center gap-2 font-bold">
            <Check size={16} /> i like people who:
          </div>
          <ul className="my-6 pl-4 ml-6 text-[15px] list-disc [&>li]:mt-2">
            <li>are also in or related to tech</li>
            <li>love cats :3</li>
            <li>like similar music genres to me</li>
            <li>funny!</li>
          </ul>
          <small className="text-sm pl-4 leading-none font-medium">
            don't take this as i won't like you if you aren't the above. i talk
            to about anyone!
          </small>
        </TabsContent>

        <TabsContent value="dni" className={inter.className}>
          <div className="pl-4 flex pt-4 items-center gap-2 font-bold text-red-400">
            <X size={16} /> do not interact (DNI) with me if:
          </div>

          <ul className="my-6 pl-4 ml-6 text-[15px] list-disc [&>li]:mt-2">
            <li>you are racist, sexist and/or ableist</li>
            <li>
              <i>anti-lgbtq+</i>: you are homophobic and/or transphobic
            </li>
            <li >
              <i>anti-cross-orientation</i>: you openly hate or significantly point out people who are lesbian FTM or
              vice versa (
              <Link
                href="https://rentry.co/ftmles"
                className="hover:!underline underline-offset-4 dark:text-pink-200"
                target="_blank"
              >
                whats this?
              </Link>
              )
            </li>
            <li>
              <i>pro-ship</i>: you make illegal ships, etc.
            </li>
            <li>
              <i>problematic slurs</i>: you say slurs you cannot reclaim (slurs
              directly against another person)
            </li>
          </ul>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
