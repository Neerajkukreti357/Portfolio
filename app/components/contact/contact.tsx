'use client'

import { useState } from 'react';
import {
  Send,
  Mail,
  MapPin,
  CheckCircle2,
  Loader2,
  ArrowUpRight,
  Clock,
  CircleDot,
} from 'lucide-react';
import { useReveal } from '@/app/hooks/useReveal';
import {
  SiGithub,
  SiDribbble,
} from "react-icons/si";

import {
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa";

type Status = 'idle' | 'sending' | 'sent';

export function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    window.setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      window.setTimeout(() => setStatus('idle'), 3500);
    }, 1200);
  };

  const socials = [
    { Icon: SiGithub, href: '#', label: 'GitHub' },
    { Icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
    { Icon: FaTwitter, href: '#', label: 'Twitter' },
    { Icon: SiDribbble, href: '#', label: 'Dribbble' },
  ];

  return (
    <section id="contact" className="relative py-10 sm:py-15">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} grid gap-8 lg:grid-cols-12 lg:items-start`}>
          {/* left — copy + cards */}
          <div className="lg:col-span-5">
            <span className="font-mono md:text-2xl text-xl font-medium uppercase tracking-[0.3em] text-cyan-300">Contact</span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              {`Let's work`} <span className="text-gradient-animated">together</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
             {` Have a project in mind or just want to say hi? My inbox is always open.
              I'll get back to you within 24 hours.`}
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="mailto:hello@alexrivera.dev"
                className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-cyan/40 hover:bg-white/[0.05]"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet/25 to-cyan/25 text-white">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-white/40">Email</span>
                    <span className="text-sm text-white/85">hello@alexrivera.dev</span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-white/30 transition-all group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

            
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-white/65 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/40 hover:text-cyan-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* right — terminal form */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-ink-3/60 backdrop-blur-md">
              {/* title bar */}
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-rose-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <div className="ml-3 flex items-center gap-1.5 font-mono text-xs text-white/45">
                  <CircleDot className="h-3.5 w-3.5 text-cyan-300" />
                  <span>alex.dev — new-message.ts</span>
                </div>
              </div>

              {/* form body */}
              <form onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-7">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name">
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="c-input"
                      required
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@email.com"
                      className="c-input"
                      required
                    />
                  </Field>
                </div>
                <Field label="Message">
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="c-input resize-none"
                    required
                  />
                </Field>

                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <span className="font-mono text-[11px] text-white/40">
                    {status === 'sent'
                      ? 'message sent — talk soon'
                      : status === 'sending'
                        ? 'transmitting…'
                        : 'ready to send'}
                  </span>
                  <button
                    type="submit"
                    disabled={status !== 'idle'}
                    className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet to-cyan px-6 py-3 text-sm font-semibold text-ink glow-violet transition-transform hover:scale-[1.03] active:scale-95 disabled:opacity-80"
                  >
                    {status === 'idle' && (<><Send className="h-4 w-4" /> Send Message</>)}
                    {status === 'sending' && (<><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>)}
                    {status === 'sent' && (<><CheckCircle2 className="h-4 w-4" /> Message Sent!</>)}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .c-input {
          width: 100%;
          border-radius: 0.6rem;
          background: rgba(10,10,15,0.65);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 0.8rem 0.95rem;
          font-size: 0.875rem;
          color: #fff;
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        .c-input::placeholder { color: rgba(255,255,255,0.32); }
        .c-input:focus {
          outline: none;
          border-color: rgba(34,211,238,0.55);
          box-shadow: 0 0 0 3px rgba(34,211,238,0.13);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[10px] font-medium uppercase tracking-wider text-white/45">
        {label}
      </span>
      {children}
    </label>
  );
}
