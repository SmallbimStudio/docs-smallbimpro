// src/app/docs/layout.tsx
import { Navigation } from "@/components/navigation";
import { DocsSidebar } from "@/components/docs-sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="hidden md:block w-64 shrink-0">
            <div className="sticky top-6">
              <DocsSidebar />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-3xl">
            {children}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-gray-50 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-gray-600">
            © 2025 SmallBIM Studio. สงวนสิทธิ์ทุกประการ.
          </div>
        </div>
      </footer>
    </>
  );
}