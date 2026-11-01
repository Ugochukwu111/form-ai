
"use client";

import { useRef, useState } from "react";
import {
  UserRound,
  Mail,
  Sparkles,
  ArrowRight,
  ImagePlus,
  ShieldCheck,
} from "lucide-react";

export default function SignUpPage() {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (event) => {
    const file = event.target.files?.[0];

    if (file) {
      setSelectedImage(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle signup here
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 py-12">
      <div className="w-full max-w-md">

        {/* Brand */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center bg-primary text-white">
            <Sparkles size={24} />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-primary">
            Form<span className="text-success">Ai</span>
          </h1>

          <p className="mt-2 text-sm text-muted">
            Less typing. More getting things done.
          </p>
        </div>

        {/* Form Card */}
        <div className="border border-border bg-surface p-7 shadow-sm sm:p-9">
          <div className="mb-7">
            <h2 className="text-2xl font-bold text-text">
              Create your account
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-muted">
              Get started with smarter, faster form filling.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-semibold text-text"
              >
                Username
              </label>

              <div className="group relative">
                <UserRound
                  size={18}
                  aria-hidden="true"
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted transition-colors group-focus-within:text-primary"
                />

                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                  autoComplete="username"
                  required
                  minLength={3}
                  className="w-full border border-border bg-white py-3 pl-11 pr-4 text-sm text-text outline-none transition-all placeholder:text-gray-400 hover:border-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-text"
              >
                Email address
              </label>

              <div className="group relative">
                <Mail
                  size={18}
                  aria-hidden="true"
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted transition-colors group-focus-within:text-primary"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="w-full border border-border bg-white py-3 pl-11 pr-4 text-sm text-text outline-none transition-all placeholder:text-gray-400 hover:border-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>
            </div>

            {/* AI Image Selection */}
            <div className="border border-dashed border-border bg-background p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-green-100 text-success">
                  <ImagePlus size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-text">
                    Have a document?
                  </p>

                  <p className="mt-1 text-xs text-muted">
                    Let AI help you fill out your details.
                  </p>
                </div>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                className="sr-only"
                tabIndex={-1}
              />

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="mt-4 flex w-full items-center justify-center gap-2 bg-success px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success active:scale-[0.99]"
              >
                <Sparkles size={17} />
                {selectedImage ? "Choose another image" : "Fill with AI"}
              </button>

              {selectedImage && (
                <p
                  className="mt-3 truncate text-xs text-success"
                  role="status"
                  aria-live="polite"
                >
                  Selected: {selectedImage.name}
                </p>
              )}

              <p className="mt-3 text-center text-xs text-muted">
                Image selection only. Supported formats depend on your browser.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 bg-primary px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.99]"
            >
              Create Account
              <ArrowRight size={17} />
            </button>
          </form>

          {/* Login */}
          <p className="mt-7 text-center text-sm text-muted">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-semibold text-primary underline-offset-4 hover:text-success hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Log in
            </a>
          </p>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted">
          <ShieldCheck size={15} />
          Your information deserves to stay secure.
        </div>
      </div>
    </main>
  );
}
