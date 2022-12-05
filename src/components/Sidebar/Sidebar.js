import styles from "./Sidebar.module.css"
import { Icon } from '@iconify/react';
export function Sidebar(){

    return (
        <div className={styles.sidebar}>
            <Icon icon="ic:baseline-catching-pokemon" width="60" height="60" />
            <h2>Pokemon</h2>
            
        </div>
    );
}