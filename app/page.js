import Form from '@/components/Form'
import Note from '@/components/Notes'
import { Suspense } from "react";
export default function Home() {
  return (
    <>
      <main>
        <div className='text-center mt-5 mb-5 text-2xl'>Notes App</div>
        <Suspense fallback={<div>Loading form...</div>}>
        <Form/>
        </Suspense>
        <Note/>
      </main>
    </>
  );
}
