import DashDesktopSidebar from "@/components/dashboard/DashDesktopSidebar";
import DashNavbar from "@/components/dashboard/DashNavbar";

export default function DashboardLayout({ children }) {
    return (
        <div
            className={`antialiased flex flex-col`}
        >
            <DashNavbar />
            <div className="flex">
                <DashDesktopSidebar />
                {children}
            </div>
        </div>
    );
}
