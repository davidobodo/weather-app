export interface IButton {
    text?: string;
    type: "reset" | "button" | "submit";
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    fluid?: boolean;
    variant?: "outlined" | "filled";
}
