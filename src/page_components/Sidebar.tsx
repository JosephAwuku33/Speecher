//import React from 'react';
import { Label } from "@/components/ui/label";
import abclogo from "../assets/abc logo.png";
import bin from "../assets/bin.png";
import bookmark from "../assets/bookmark.png";
import folder from "../assets/folder.png";
import home from "../assets/home.png";
import questionCircle from "../assets/question-circle.png";
import settings from "../assets/settings.png";
import share from "../assets/share.png";
import rocket from "../assets/rocket-alt.png";
import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  return (
    <nav className=" h-screen  w-60 relative left-0 top-0">
      <img src={abclogo} alt="ABC Logo" className="" />

      <ul className="mt-2 font-inter">
        <li className="mb-1">
          <a href="#" className="block p-2">
            <div className="flex flex-row gap-2 items-start justify-start ml-3">
              <img src={home} alt="home" />
              <Label htmlFor="home">Home</Label>
            </div>
          </a>
        </li>

        <li className="mb-1">
          <a href="#" className="block p-2">
            <div className="flex flex-row gap-2 items-start justify-start ml-3">
              <img src={folder} alt="folder" />
              <Label htmlFor="folder">All Files</Label>
            </div>
          </a>
        </li>

        <li className="mb-1">
          <a href="#" className="block p-2">
            <div className="flex flex-row gap-2 items-start justify-start ml-3">
              <img src={bookmark} alt="bookmark" />
              <Label htmlFor="Bookmark">Saved</Label>
            </div>
          </a>
        </li>

        <li className="mb-1">
          <a href="#" className="block p-2">
            <div className="flex flex-row gap-2 items-start justify-start ml-3">
              <img src={share} alt="share" />
              <Label htmlFor="Integrations">Integrations</Label>
            </div>
          </a>
        </li>

        <li className="mb-1">
          <a href="#" className="block p-2">
            <div className="flex flex-row gap-2 items-start justify-start ml-3">
              <img src={bin} alt="bin" />
              <Label htmlFor="trash">Trash</Label>
            </div>
          </a>
        </li>

        <li className="mb-1">
          <a href="#" className="block p-2">
            <div className="flex flex-row gap-2 items-start justify-start ml-3">
              <img src={settings} alt="settings" />
              <Label htmlFor="settings">Settings</Label>
            </div>
          </a>
        </li>

        <li className="mb-1">
          <a href="#" className="block p-2">
            <div className="flex flex-row gap-2 items-start justify-start ml-3">
              <img src={questionCircle} alt="question" />
              <Label htmlFor="Help and Support">Help and Support</Label>
            </div>
          </a>
        </li>
      </ul>

      <Card className="ml-3 w-5/6 h-1/4 bg-slate-200 absolute bottom-0 mb-3">
        <CardHeader className="flex items-center justify-center h-3">
          <img src={rocket} alt="rocket" width={20} height={20} />
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-start p-2">
          <Label className="font-bold font-inter text-center">Upgrade Account</Label>
          <Label className="text-xs text-center leading-tight text-slate-500 mt-1">
            Access to Unlimited Transcription
          </Label>

          <Button className="mx-auto mt-5 font-inter bg-blue-700 w-4/5 h-1/2" >Upgrade</Button>
        </CardContent>
      </Card>
    </nav>
  );
}
