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

        function handleChange(event) {
            // setCategory(index);
            event.preventDefault();
            console.log(event.target.value)
            
            // This will set the index of the value passed from the options array
            setCategory(options.indexOf(event.target.value))
            console.log(category)

            // Another best option is to use them directly and render them with a switch statement.
        }

        return (
            <select style={dropDownStyle} onChange={handleChange}>
                {options.map((op, index) => {
                    return (
                        <option value={op} key = {index} >{op}</option>
                    )
                })}
            </select>

            /*<Dropdown
            placeholder="Select an option"
            className="my-className"
            
            value="one"
            onChange={(value) => console.log('change!', value)}
            onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
            onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
        onOpen={() => console.log('open!')}
        />*/
        )

    }

    return (
        <>
            <DropDownMenu />

        </>
    )
}

export default ChooseLeaderBoard
