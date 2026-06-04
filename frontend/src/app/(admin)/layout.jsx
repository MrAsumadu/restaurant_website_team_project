import NavBar from "./navbar";
import AdminGuard from "./AdminGuard";

export const dynamic = "force-dynamic";

export default function DashboardLayout({ children }) {
  return (
    <AdminGuard>
      <section className="h-full">
        <NavBar />
        <div className="ml-56 h-screen overflow-y-auto bg-gray-50 px-10 ">
          <main>{children}</main>
        </div>
      </section>
    </AdminGuard>
  );
}
