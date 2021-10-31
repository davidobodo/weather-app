export interface IButton extends IButtonStyles {
    text: string;
    type: "reset" | "button" | "submit";
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    variant?: "outlined" | "filled";
    testId?: string;
}

export interface IButtonStyles {
    fluid?: boolean;
}
