import React, {FC, memo} from 'react';
import './Tab.css'
import {ITabProps} from "../../../interfaces/UI/ITab";

const Tab: FC<ITabProps> =
({
     text,
     value,
     isCurrent,
     tabsGroupId,
     change,
}) => {
    return (
        <label
            key={value}
            className={`Tab ${isCurrent ? `Tab_active` : ``}`}
        >
            <span>{text}</span>
            <input
                type="radio"
                name={tabsGroupId}
                value={value}
                id={value}
                checked={isCurrent}
                onChange={(event) => change(event.target.value)}
            />
        </label>
    );
};

export default memo(Tab);