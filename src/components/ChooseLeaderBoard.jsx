import React, { useState } from 'react';
//import { Dropdown, Selection } from 'react-dropdown';

const ChooseLeaderBoard = () => {
    const [category, setCategory] = useState(undefined);

    const DropDownMenu = () => {
        let options = ['one', 'two', 'three', 'four', 'five'];

        const dropDownStyle = {
            width: '15rem',
            textAlign: 'center',
        }

        function handleChange(index) {
            setCategory(index);
            console.log(category)

        }

        return (

            <select style={dropDownStyle}>
                {options.map((op, index) => {
                    return (
                        <option value={op} onChange={handleChange(op)} >{op}</option>
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
        />*/)

    }

    return (
        <>
            <DropDownMenu />

        </>
    )
}

export default ChooseLeaderBoard
