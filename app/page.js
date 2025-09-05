import Form from '@/components/Form'
import Note from '@/components/Notes'
export default function Home() {
  return (
    <>
      <main>
        <div className='text-center mt-5 mb-5 text-2xl'>Note App</div>
        <Form/>
        <Note/>
      </main>
    </>
  );
}
