import { IconSize } from "@/types/client-types";

export function Case({
    size = 20,
    color = "white"
}: IconSize) {
    return (
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.25 12.1499V16.4C18.25 17.4944 17.4631 18.4359 16.3782 18.58C14.2915 18.857 12.1624 19 10 19C7.83757 19 5.70854 18.857 3.62185 18.58C2.5369 18.4359 1.75 17.4944 1.75 16.4V12.1499M18.25 12.1499C18.7219 11.7476 19 11.1389 19 10.4889V6.70569C19 5.62475 18.2321 4.69082 17.1631 4.53086C16.0377 4.36247 14.8995 4.23315 13.75 4.14432M18.25 12.1499C18.0564 12.315 17.8302 12.4453 17.5771 12.5294C15.1953 13.3212 12.6477 13.75 10 13.75C7.35229 13.75 4.80469 13.3212 2.42289 12.5294C2.16984 12.4452 1.94361 12.3149 1.75 12.1499M1.75 12.1499C1.27808 11.7476 1 11.1389 1 10.4889V6.70569C1 5.62475 1.7679 4.69082 2.83694 4.53086C3.96233 4.36247 5.10049 4.23315 6.25 4.14432M13.75 4.14432V3.25C13.75 2.00736 12.7426 1 11.5 1H8.5C7.25736 1 6.25 2.00736 6.25 3.25V4.14432M13.75 4.14432C12.5126 4.0487 11.262 4 10 4C8.73804 4 7.48744 4.0487 6.25 4.14432M10 10.75H10.0075V10.7575H10V10.75Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};