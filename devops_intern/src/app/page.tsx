import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gray-50 dark:bg-gray-900">
      <main className="flex flex-col gap-10 row-start-2 items-center sm:items-start text-center sm:text-left">
        
        {/* Header */}
        <div className="flex items-center gap-3">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={24}
            priority
          />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            WEXA AI DevOps Dashboard
          </h1>
        </div>

        {/* Developer Info */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 w-full max-w-md text-center">
          <h2 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-3">
            👨‍💻 Created by SUHEL KHAN
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            AWS Certified Developer – Associate
            <br />
            Passionate about DevOps, Cloud, and CI/CD automation. Skilled in
            Docker, Kubernetes, GitHub Actions, and AWS services like EC2, ECR,
            and S3.
          </p>
        </div>

        {/* Project Description */}
        <p className="text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
          Welcome to the <strong>DevOps Internship Assessment</strong> project.
          <br />
          This demo app is built using{" "}
          <span className="text-indigo-600 font-semibold">Next.js</span>,
          containerized with{" "}
          <span className="text-indigo-600 font-semibold">Docker</span>, and
          deployed on{" "}
          <span className="text-indigo-600 font-semibold">Minikube</span> via{" "}
          <span className="text-indigo-600 font-semibold">GitHub Actions</span>.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-lg bg-indigo-600 text-white px-5 py-3 font-medium hover:bg-indigo-700 shadow"
            href="https://github.com/SUHEL782/Assignment"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source on GitHub
          </a>
          <a
            className="rounded-lg border border-indigo-600 text-indigo-600 px-5 py-3 font-medium hover:bg-indigo-50 dark:hover:bg-indigo-950 transition"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Next.js →
          </a>
        </div>

        {/* Tasks */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 w-full max-w-md">
          <h2 className="text-lg font-semibold mb-3 text-indigo-700 dark:text-indigo-300">
            🧩 Your DevOps Tasks
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-2">
            <li>Containerize this app using Docker</li>
            <li>Push the image to GitHub Container Registry (GHCR)</li>
            <li>Deploy to Minikube using Kubernetes manifests</li>
            <li>Automate build & deploy via GitHub Actions</li>
          </ul>
        </div>

        {/* Documentation */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 w-full max-w-2xl">
          <h2 className="text-lg font-semibold mb-3 text-indigo-700 dark:text-indigo-300">
            📄 Project Documentation
          </h2>
          <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 text-sm space-y-3">
            <li>
              <strong>Created Next.js App:</strong>{" "}
              Initialized with <code>npx create-next-app@latest</code>.
            </li>
            <li>
              <strong>Containerized with Docker:</strong>{" "}
              Used multi-stage builds for optimization.
            </li>
            <li>
              <strong>Automated CI/CD:</strong>{" "}
              Configured GitHub Actions to build & push to GHCR.
            </li>
            <li>
              <strong>Deployed on Minikube:</strong>{" "}
              Used <code>deployment.yaml</code> and <code>service.yaml</code> manifests.
            </li>
            <li>
              <strong>Tested and Verified:</strong>{" "}
              Confirmed working deployment and documented setup in README.
            </li>
          </ol>
        </div>

        {/* Deployment Status */}
        <div className="bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-700 rounded-xl p-4 w-full max-w-md text-center shadow-sm">
          <p className="text-green-800 dark:text-green-200 font-semibold">
            ✅ Successfully Deployed on Minikube using Kubernetes
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex gap-4 flex-wrap items-center justify-center text-gray-500 text-sm">
        <a
          href="https://nextjs.org"
          className="hover:text-indigo-600 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Next.js
        </a>
        <span>•</span>
        <a
          href="https://vercel.com"
          className="hover:text-indigo-600 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deployed on Vercel (or Minikube)
        </a>
      </footer>
    </div>
  );
}
