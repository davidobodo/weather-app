import { useState, useEffect } from "react";

const useStickyNav = () => {
    const [isNavSticky, setIsNavSticky] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 258) {
            setIsNavSticky(true);
        } else {
            setIsNavSticky(false);
        }
    };

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        return () => document.removeEventListener("scroll", handleScroll);
    }, []);

    return {
        isNavSticky
    };
};

export default useStickyNav;
