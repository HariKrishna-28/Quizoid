import React from 'react';
import { useEffect, useState } from 'react';
import firebase from '../firebase';
import RotateLoader from "react-spinners/RotateLoader";
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
// //import { useParams } from 'react-router-dom';

const DisplayLeaderBoard = ({ tableName }) => {
    const [userData, setuserData] = useState([]);
    const name = `/${tableName}`;
    // ////console.log(name);

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
                    //category: data[id].category,
                })
            }

            let data_ = userInfo.sort(sortData);
            //console.log(data_)
            if (data_.length <= 10) {
                setuserData(data_.reverse())
            }
            else {
                setuserData(data_.slice(data_.length - 10, data_.length).reverse());
                // setuserData(data_)
            }
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

    // const rowStyle = {
    //     paddingRight: '4rem',
    //     paddingLeft: '4rem',
    //     // paddingTop: '0.5rem',
    //     textAlign: 'center',
    //     // paddingBottom: '1rem',
    //     // margin: '25rem',
    //     // border: '1px solid #7dced0',
    //     // backgroundColor: '#7dced0',
    //     // borderRadius: '10',
    //     // border: '1px solid black',
    // }

    // const headerStyle = {
    //     textAlign: 'center',
    //     // border: '1px solid #7dced0',
    //     // border: '1px solid black',
    //     // backgroundColor: '#7dced0',
    //     // borderRadius: '10',
    // }



    return (userData.length === 0 ?
        (
            <div className='flex justify-center items-center h-screen'><RotateLoader /></div>
        )
        :
        (
            <>
                <div className="my-8 lg:mx-64 flex flex-col rounded-md  lg:rounded-lg shadow-xl overflow-hidden bg-yellow-400">
                    <table className="text-sm lg:table-auto lg:text-xl">
                        <thead>
                            <tr className='bg-gray-600 text-white'>
                                <th className='text-center'>Position</th>
                                <th className='text-center'>Name </th>
                                <th className='text-center'>Score </th>
                            </tr>
                        </thead>

                        {
                            userData.map((data, index) => {
                                return <tbody >
                                    <tr className='bg-white'>
                                        <td className='px-8 py-1 lg:px-16 text-center'> {parseInt(index) + 1}</td>
                                        <td className='px-8 py-1 lg:px-16 text-center'> {data.userName} </td>
                                        <td className='px-8 py-1 lg:px-16 text-center'> {data.userScore} </td>
                                    </tr>
                                </tbody>
                            })
                        }

                    </table>

                </div >
            </>
        )

    )

}

export default DisplayLeaderBoard;