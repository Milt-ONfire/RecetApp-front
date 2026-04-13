import Footer from "@/components/commons/Footer";
import Navbar from "@/components/commons/Navbar";
import { SideMenu } from "@/components/commons/SideMenu";
import { useState } from "react";
import { Outlet } from 'react-router-dom';

export default function Navigation() {

    const [opened, setOpened] = useState(false);

    return (
        <div className="lg:h-screen h-full max-h-fit md:flex md:flex-col bg-[#EEE]">
            <Navbar />

            <div className="flex flex-row flex-grow overflow-hidden min-h-screen h-screen">
                <div className={`${opened ? 'block' : '-left-52'} z-10 lg:z-auto h-full lg:h-screen absolute lg:static`}>
                    <SideMenu
                        icon={opened ? "fa-solid fa-circle-chevron-left " : "fa-solid fa-circle-chevron-right "}
                        action={() => setOpened(!opened)}
                    />
                </div>
                <div className="flex-1 overflow-auto bg-colorblancoprincipal pb-52">
                    <Outlet
                    />
                </div>
                <div className="fixed bottom-0 left-0 w-full z-50">
                    <Footer />
                </div>
            </div>
        </div>
    )
}