import { IconSize } from "@/types/client-types";

export function BarsBottomRight({
    size = 18,
    color = "white"
}: IconSize) {
    return (
        <svg width={size} height={size} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0.75C0 0.335786 0.335786 0 0.75 0H17.25C17.6642 0 18 0.335786 18 0.75C18 1.16421 17.6642 1.5 17.25 1.5H0.75C0.335786 1.5 0 1.16421 0 0.75ZM0 6C0 5.58579 0.335786 5.25 0.75 5.25H17.25C17.6642 5.25 18 5.58579 18 6C18 6.41421 17.6642 6.75 17.25 6.75H0.75C0.335786 6.75 0 6.41421 0 6ZM8.25 11.25C8.25 10.8358 8.58579 10.5 9 10.5H17.25C17.6642 10.5 18 10.8358 18 11.25C18 11.6642 17.6642 12 17.25 12H9C8.58579 12 8.25 11.6642 8.25 11.25Z" fill={color} />
        </svg>
    );
};