import Editor from "@/components/editor";
import Header from "@/components/header";
import Demo from "@/components/demo";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-12 gap-10">
      <Header />
      <div className="flex flex-col gap-4 w-full">
        <div className="text-3xl font-bold">Editor</div>
        <Editor />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="text-3xl font-bold">Demo</div>
        <Demo />
      </div>
    </main>
  );
}
