import { IconSize } from "@/types/client-types";

export function SquaresPlus({
    size = 18,
    color = "white"
}: IconSize) {
    return (
        <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 0C1.34315 0 0 1.34315 0 3V5.25C0 6.90685 1.34315 8.25 3 8.25H5.25C6.90685 8.25 8.25 6.90685 8.25 5.25V3C8.25 1.34315 6.90685 0 5.25 0H3Z" fill={color}/>
            <path d="M12.75 0C11.0931 0 9.75 1.34315 9.75 3V5.25C9.75 6.90685 11.0931 8.25 12.75 8.25H15C16.6569 8.25 18 6.90685 18 5.25V3C18 1.34315 16.6569 0 15 0H12.75Z" fill={color}/>
            <path d="M3 9.75C1.34315 9.75 0 11.0931 0 12.75V15C0 16.6569 1.34315 18 3 18H5.25C6.90685 18 8.25 16.6569 8.25 15V12.75C8.25 11.0931 6.90685 9.75 5.25 9.75H3Z" fill={color}/>
            <path d="M14.625 10.5C14.625 10.0858 14.2892 9.75 13.875 9.75C13.4608 9.75 13.125 10.0858 13.125 10.5V13.125H10.5C10.0858 13.125 9.75 13.4608 9.75 13.875C9.75 14.2892 10.0858 14.625 10.5 14.625H13.125V17.25C13.125 17.6642 13.4608 18 13.875 18C14.2892 18 14.625 17.6642 14.625 17.25V14.625H17.25C17.6642 14.625 18 14.2892 18 13.875C18 13.4608 17.6642 13.125 17.25 13.125H14.625V10.5Z" fill={color}/>
        </svg>
    );
};