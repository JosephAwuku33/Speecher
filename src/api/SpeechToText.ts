import { AssemblyAI } from "assemblyai";

const client = new AssemblyAI({
  apiKey: import.meta.env.VITE_ASSEMBLY_API_KEY,
});

export const handleTranscription = async (file: string) => {
  //const audioURL = 'https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3';
  const audioURL = file.toString();
  const transcript = await client.transcripts.create({ audio_url: audioURL });
  if (transcript.status === "error") {
    console.log(transcript.error);
  }
  console.log(transcript.text);
  return { transcript };
};

