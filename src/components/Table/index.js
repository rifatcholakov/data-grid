import React from 'react';

import styles from './index.module.css'

const Table = ({ headings, data, sort }) => {

    return (
        <div className={styles.contentWrapper}>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.headings}>
                        {headings.map(heading => (
                            <th
                                className={styles.title}
                                key={heading.field}
                                onClick={() => sort(heading.field)}
                            >
                                {heading.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, itemIndex) => (
                        <tr className={styles.dataRow} key={itemIndex}>
                            {headings.map((heading, itemIndex) => (
                                <td className={styles.cellData} key={itemIndex}>{item[heading.field]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table
