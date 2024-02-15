"use client";

import { useIsClient } from "usehooks-ts";
import { LoadingState } from "./loading-page";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";

export function Wrapper({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const isClient = useIsClient();
    if (!isClient) {
        return (
            <LoadingState />
        );
    };
    return (
        <>
            <Sidebar />
            <Navbar />
            {children}
        </>
    );
};