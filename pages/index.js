import Head from 'next/head';
import Link from 'next/link';
import { subjects } from '../data/subjects';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Head>
        <title>Quiz SD Kelas 2 - Kurikulum Merdeka</title>
        <meta name="description" content="Quiz online untuk siswa SD kelas 2 sesuai Kurikulum Merdeka" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-[var(--primary)] mb-2">
          Quiz SD Kelas 2
        </h1>
        <p className="text-center text-[var(--foreground)] opacity-80 mb-8">
          Pilih mata pelajaran yang ingin kamu pelajari!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <Link
              href={`/quiz/${subject.id}`}
              key={subject.id}
              className={`${subject.color} hover:opacity-90 transition-opacity rounded-lg p-6 text-white shadow-lg transform hover:scale-105 duration-200`}
            >
              <div className="flex items-center space-x-4">
                <span className="text-4xl">{subject.icon}</span>
                <div>
                  <h2 className="text-xl font-bold">{subject.name}</h2>
                  <p className="text-sm opacity-90">{subject.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center text-[var(--foreground)] opacity-60">
          <p className="text-sm">
            © 2025 Quiz SD Kelas 2 - Dibuat dengan ❤️ untuk pendidikan Indonesia
          </p>
        </div>
      </main>
    </div>
  );
}
