import React, { useState } from 'react';
//import { Dropdown, Selection } from 'react-dropdown';

const ChooseLeaderBoard = () => {
    const [category, setCategory] = useState(0);

    const DropDownMenu = () => {
        let options = ['one', 'two', 'three', 'four', 'five'];

        const dropDownStyle = {
            width: '15rem',
            textAlign: 'center',
        }

        async function handleChange(event) {
            // setCategory(index);
            // event.preventDefault();

            // This will set the index of the value passed from the options array

            // Modifying the default state, and apply.
            let category_state = category
            category_state = options.indexOf(event.target.value)
            setCategory(category_state)

            console.log(options.indexOf(event.target.value))

            // Another best option is to use them directly and render them with a switch statement.
        }

        return (
            <select style={dropDownStyle} onChange={handleChange} value={options[category]}>
                {options.map((op, index) => {
                    return (
                        <option value={op} key={index} >{op}</option>
                    )
                })}
            </select>
        )

    }

    return (
        <>
            <DropDownMenu />

        </>
    )
}

export default ChooseLeaderBoard
