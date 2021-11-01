import { useState, useEffect } from "react";

const useStickyNav = () => {
    const [isNavSticky, setIsNavSticky] = useState(false);

    const handleScroll = () => setIsNavSticky(window.scrollY > 258);

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        return () => document.removeEventListener("scroll", handleScroll);
    }, []);

    return {
        isNavSticky
    };
};

export default useStickyNav;
