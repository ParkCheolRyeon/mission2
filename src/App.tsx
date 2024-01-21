import { useEffect } from "react";
import "./App.css";
import MissionTwo from "./pages";
import { Toaster } from "./components/ui/toaster";

function App() {
  // useEffect(() => {
  //   const handleBeforeUnload = (event: BeforeUnloadEvent) => {
  //     const message = "새로고침하면 데이터가 소실 됩니다.";
  //     event.returnValue = message;
  //     return message;
  //   };
  //   window.addEventListener("beforeunload", handleBeforeUnload);
  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);
  return (
    <div className="w-full h-full bg-red-50">
      <MissionTwo />
      <Toaster />
    </div>
  );
}

export default App;
