"use client";

import { Separator } from "@/components/ui/separator";
import { Cards } from "./cards";
import { TextItems } from "./text-items";
import { SparklesFunction } from "@/components/svg/sparkles";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { LightBulb } from "@/components/svg/light-bulb";
import { CursorArrow } from "@/components/svg/cursor-arrow";
import { DevicePhone } from "@/components/svg/device-phone";
import { Bolt } from "@/components/svg/bolt";
import { SquaresPlus } from "@/components/svg/squares-plus";


const ResonData = [
    {
        id: 1,
        header: "Expertise That Drives Reault",
        caption: "Our team of seasoned professionals brings years of experience and expertise to the table.",
        href: "/about",
        icon: <SparklesFunction size={30} />
    },
    {
        id: 2,
        header: "Tailored Business Solutions",
        caption: "We understand that every business is unique. That's why our solutions are customized.",
        href: "/about",
        icon: <LightBulb size={30} />
    },
    {
        id: 3,
        header: "Cutting-Edge Web Design",
        caption: "Leave a lasting impression on your audience with our top-notch web design services.",
        href: "/about",
        icon: <CursorArrow size={30} />
    }
];

const ResonData2 = [
    {
        id: 1,
        header: "Mobile-First Approach",
        caption: "In today's mobile-centric world, we prioritize mobile-first design to ensure your website.",
        href: "/about",
        icon: <DevicePhone size={30} />
    },
    {
        id: 2,
        header: "Marketing Strategies",
        caption: "Our data-driven marketing strategies allow us to target the right audience with precision.",
        href: "/about",
        icon: <Bolt size={30} />
    },
    {
        id: 3,
        header: "Search Engine Optimization",
        caption: "(SEO) Mastery Boost your online visibility with our expert SEO techniques.",
        href: "/about",
        icon: <SquaresPlus size={30} />
    },
];

export function ReasonToChose() {
    const matches = useMediaQuery('(max-width: 1024px)');
    return (
        <div className="flex flex-col items-center justify-center px-10 pt-10 md:pt-24 mt-10 md:mt-0 space-y-8 lg:space-y-16">
            <TextItems />
            <div>
                <div className={cn(
                    "grid",
                    matches ? "grid-cols-1 gap-y-8" : "grid-cols-3 gap-x-4"
                )}>
                    {ResonData.map((items) => (
                        <Cards
                            id={items.id}
                            key={items.id}
                            header={items.header}
                            caption={items.caption}
                            icon={items.icon}
                            href={items.href}
                        />
                    ))}
                </div>
                <Separator
                    className="my-10 bg-gray-12"
                    orientation="horizontal"
                />
                <div className={cn(
                    "grid lg:pt-0",
                    matches ? "grid-cols-1 gap-y-8" : "grid-cols-3 gap-x-4"
                )}>
                    {ResonData2.map((items) => (
                        <Cards
                            id={items.id}
                            key={items.id}
                            header={items.header}
                            caption={items.caption}
                            icon={items.icon}
                            href={items.href}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};