import React from 'react';
import { useEffect, useState } from 'react';
import firebase from '../FireBase';
import RotateLoader from "react-spinners/RotateLoader";

const LeaderBoard = () => {
    const [userData, setuserData] = useState([]);

    useEffect(() => {
        const firestore = firebase.database().ref('/Ecology');
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
            setuserData(userInfo);
        })
    }, [])

    const rowStyle = {
        paddingLeft: '3rem',
        paddingRight: '3rem',
        border: '1px solid black',
        textAlign: 'center',
    }

    const headerStyle = {
        textAlign: 'center',
        border: '1px solid black',

    }

    return (userData.length === 0 ? (<div className='flex justify-center items-center h-screen'><RotateLoader /></div>) :
        (
            <div style={{
                marginLeft: '4rem',
                marginRight: '2rem'
            }}>

                <div className='flex justify-center items-center pt-4 '>
                    <h1>category name</h1>
                </div>
                <table className="table-auto text-2xl" style={{
                    border: '1px solid black',
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
                            return <tbody >
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

export default LeaderBoard;
