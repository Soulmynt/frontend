import React, {useState} from "react";
import styles from "./collapsible.module.css"
import { Arrow } from "../../icons/Arrow";


const Collapsible = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)} className={styles.collapsibleButton}>
                {title}
                <Arrow className={isOpen ? styles.arrowUp : styles.arrowDown} />
            </button>
            {isOpen && (
                <div className={styles.collapsibleContent}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default Collapsible;
