import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  //DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import folder from "../assets/folder.png";
import text from "../assets/text.png";
import saved from "../assets/bookmark.png";
import cloud_upload from "../assets/upload-cloud-02.png";
import { transcribedData } from "@/data/transcribedFiles";
import { useState, ChangeEvent } from "react";



export default function MainPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      console.log(selectedFile?.name.toString());
      console.log(import.meta.env.VITE_REACT_RAPIDAPI_KEY);
      console.log(import.meta.env.VITE_REACT_RAPIDAPI_HOST);
    }
  };

  const handleUpload = async () => {
    //const fileToUse = selectedFile?.name.toString() as string;
    const url = "https://ardic-speech-to-text-service.p.rapidapi.com/stt";
    const data = new FormData();
    data.append("file", selectedFile as File);
    data.append("args", '{"return_type": "json", "stt_engine": "vosk"}');

    const options = {
      method: "POST",
      ContentType: "",
      headers: {
        "X-RapidAPI-Key":JSON.stringify(import.meta.env.VITE_REACT_RAPIDAPI_KEY),
        "X-RapidAPI-Host": JSON.stringify(import.meta.env.VITE_REACT_RAPIDAPI_HOST),
      },
      body: data,
    };
    try {
      if (selectedFile) {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="h-screen bg-slate-50 mt-3 font-inter p-4">
      <Dialog>
        <div className="flex flex-row relative justify-start space-x-96">
          <div className="flex flex-col justify-start mt-2">
            <Label className="font-bold text-lg">Welcome Shakirat</Label>
            <Label className="text-slate-300">
              Upload your audio and Video to convert to text
            </Label>
          </div>
          <DialogTrigger asChild>
            <Button className="absolute right-0 font-inter bg-blue-700">
              Transcribe
            </Button>
          </DialogTrigger>
        </div>

        <div className="flex flex-row items-start justify-start mt-7 gap-5 h-1/4">
          <Card className="bg-white w-5/6 h-full">
            <CardHeader className="flex items-start justify-start">
              <div className="rounded-full p-3 bg-slate-100">
                <img src={folder} alt="rocket" width={15} height={15} />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col items-start justify-start gap-1">
              <Label className="font-bold">100</Label>
              <Label>Uploaded files</Label>
            </CardContent>
          </Card>

          <Card className="bg-white w-5/6 h-full">
            <CardHeader className="flex items-start justify-start">
              <div className="rounded-full p-3 bg-slate-100">
                <img src={text} alt="rocket" width={15} height={15} />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col items-start justify-start gap-1">
              <Label className="font-bold">50</Label>
              <Label>Transcribed</Label>
            </CardContent>
          </Card>

          <Card className="bg-white w-5/6 h-full">
            <CardHeader className="flex items-start justify-start">
              <div className="rounded-full p-3 bg-slate-100">
                <img src={saved} alt="rocket" width={15} height={15} />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col items-start justify-start gap-1">
              <Label className="font-bold">20</Label>
              <Label>Saved</Label>
            </CardContent>
          </Card>
        </div>

        {/** Table Records */}
        <Card className="mt-5 w-full h-3/5 bg-white">
          <CardTitle className="p-4">
            <Label className="font-bold text-lg">Recent Files</Label>
          </CardTitle>
          <hr />
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <Checkbox />
                  </TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Date Created</TableHead>
                  <TableHead>LastUpdated</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transcribedData.map((transcribedData) => (
                  <TableRow key={transcribedData.id}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>{transcribedData.name}</TableCell>
                    <TableCell>{transcribedData.type}</TableCell>
                    <TableCell>{transcribedData.duration}</TableCell>
                    <TableCell>{transcribedData.dateCreated}</TableCell>
                    <TableCell>{transcribedData.lastUpdated}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/**Dialog and Modal Configurations */}
        <DialogContent className="font-inter w-5/6 h-5/6">
          <DialogHeader>
            <DialogTitle className="font-bold text-2xl">
              Transcribe Data
            </DialogTitle>
            <div className="flex flex-col items-start justify-start p-2 ">
              <Label className="font-bold mt-5 ">Transcription Language</Label>
              <br />
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Default" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Languages</SelectLabel>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="French">French</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className="flex flex-col mt-4 items-center w-full h-40 gap-1 rounded-lg border">
                <Label className="rounded-full bg-slate-100 p-4 mt-6">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".mp3, .mp4, .wav, .diff, .m4a, .wmv, .avi, .cat"
                    style={{ display: "none" }}
                  />
                  <img src={cloud_upload} width={15} height={15} />
                </Label>
                <Label className="font-normal">
                  <Label className="hover:text-orange-950 text-blue-900">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept=".mp3, .mp4, .wav, .diff, .m4a, .wmv, .avi, .cat"
                      style={{ display: "none" }}
                    />
                    Click to upload
                  </Label>{" "}
                  or drag and drop
                </Label>
                <Label className="font-light text-sm ">
                  The maximum file size is 1GB for audio and 10GB for video
                </Label>
                <Label className="font-light text-sm ">
                  Supported File formats are mp3, mp4, wav, diff, m4a, wmv, avi,
                  cat
                </Label>
              </div>

              <div className="grid w-full items-center mt-4 gap-1.5">
                <Label htmlFor="import" className="font-bold">
                  Import from Link
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Paste a DropBox, Google Drive or YouTube URL, here"
                />
              </div>
              <div className="flex items-center space-x-2 mt-3">
                <Checkbox id="speaker_identification" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Speaker Identification
                </label>
              </div>
            </div>
          </DialogHeader>
          <DialogFooter className="w-full mt-2">
            <Button onClick={handleUpload} className="w-full bg-blue-700">
              Transcribe File
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
