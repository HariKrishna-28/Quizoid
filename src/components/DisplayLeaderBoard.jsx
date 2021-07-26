import React from 'react';
import { useEffect, useState } from 'react';
import firebase from '../FireBase';
import RotateLoader from "react-spinners/RotateLoader";
//import { useParams } from 'react-router-dom';

const DisplayLeaderBoard = ({ tableName }) => {
    const [userData, setuserData] = useState([]);
    const name = `/${tableName}`;
    //console.log(name);

    useEffect(() => {
        const firestore = firebase.database().ref(name);
        const values = firestore;
        values.on('value', (response) => {
            const data = response.val();
            let userInfo = [];
            for (let id in data) {
                userInfo.push({
                    id: id,
                    userName: data[id].userName,
                    userScore: data[id].userScore,
                    category: data[id].category,
                })
            }

            let data_ = userInfo.sort(sortData);
            setuserData(data_.slice(data_.length - 10, data_.length).reverse());
        })
    }, [name])

    /**
     * This acts as a comparision function
     * @param {Object} el1 
     * @param {Object} el2 
     * @returns {Number}
     */
    const sortData = (el1, el2) => {
        return (el1.userScore - el2.userScore);
    }

    const rowStyle = {
        marginLeft: '5rem',
        marginRight: '5rem',
        paddingRight: '3rem',
        paddingLeft: '3rem',
        border: '1px solid black',
        textAlign: 'center',
        backgroundColor: '#7dced0',
    }

    const headerStyle = {
        textAlign: 'center',
        border: '1px solid black',
        backgroundColor: '#7dced0',

    }



    return (userData.length === 0 ? (<div className='flex justify-center items-center h-screen'><RotateLoader /></div>) :
        (
            <div style={{
                textAlign: 'center',

            }}>

                {/* <div className='flex justify-center items-center pt-4 '>
                    <h2>{tableName}</h2>
                </div> */}
                <table className="table-auto text-xl" style={{
                    border: '0px solid black',
                    marginTop: '2rem',

                }}>
                    <thead>
                        <tr>
                            <th style={headerStyle}>Position</th>
                            <th style={headerStyle}>Name </th>
                            {/*<th style={headerStyle}>Category </th> */}
                            <th style={headerStyle}>Score </th>
                        </tr>
                    </thead>
                    {
                        userData.map((data, index) => {
                            return <tbody>
                                <tr>
                                    <td style={rowStyle}> {parseInt(index) + 1}</td>
                                    <td style={rowStyle}> {data.userName} </td>
                                    {/*<td style={rowStyle}> {data.category} </td> */}
                                    <td style={rowStyle}> {data.userScore} </td>
                                </tr>
                            </tbody>
                        })
                    }

                </table>
            </div>
        )

    )

}

export default DisplayLeaderBoard;
