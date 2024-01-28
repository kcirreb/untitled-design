import Editor from "@/components/editor";
import Header from "@/components/header";
import Template from "@/components/template";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-12 gap-10">
      <Header />
      <Editor />
      <Template />
    </main>
  );
}
