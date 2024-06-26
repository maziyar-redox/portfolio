import { IconSize } from "@/types/client-types";

export function ArrowSmallUp({
    size = 18,
    color = "white"
}: IconSize) {
    return (
        <svg width={size} height={size - 2} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.76983 5.79062C9.47125 6.07772 8.99647 6.06841 8.70937 5.76983L5 1.83208L1.29062 5.76983C1.00353 6.06841 0.528747 6.07772 0.230167 5.79062C-0.0684109 5.50353 -0.0777207 5.02875 0.209374 4.73017L4.45937 0.230167C4.60078 0.0831084 4.79599 -9.75562e-07 5 -9.93398e-07C5.20401 -1.01123e-06 5.39922 0.0831084 5.54062 0.230167L9.79062 4.73017C10.0777 5.02875 10.0684 5.50353 9.76983 5.79062Z" fill={color} />
        </svg>        
    );
};