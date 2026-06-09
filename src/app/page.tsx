export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-zinc-50 p-8 text-center dark:bg-black">
      <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl dark:text-zinc-50">
        Welcome 👋
      </h1>
      <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
        Aapka app taiyaar hai. Yahaan se shuru karein!
      </p>
      <a
        href="https://nextjs.org/docs"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-black px-6 py-3 text-base font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      >
        Get Started
      </a>
      <footer className="mt-8 text-sm text-zinc-500 dark:text-zinc-500">
        Built with Next.js
      </footer>
    </main>
  );
}
