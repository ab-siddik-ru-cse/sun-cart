import { Suspense } from "react";
import RegisterClient from "./RegisterClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <RegisterClient />
    </Suspense>
  );
}