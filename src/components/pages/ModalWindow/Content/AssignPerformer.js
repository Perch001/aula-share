import React, {useState} from 'react';
import {Button, Divider, Input, Select, Space} from "antd";
import Emploess from './Emploess.json'
import {useDispatch} from "react-redux";
import {add_assign} from "../../../../store/actions/assignAction";

const AssignPerformer = ({assignEmployeesChange, closeWindow}) => {
    const [selectAssign, setSelectAssign] = useState([]);


    const handleEmploessSelect = (BIO) => {
        const isEmployeeSelected = selectAssign.some((selectedItem) => selectedItem.BIO === BIO);
        if (!isEmployeeSelected) {
            setSelectAssign([...selectAssign, {BIO}]);
        }
    };


    const handleAssignButtonClick = (assign) => {
        assignEmployeesChange(assign)
        closeWindow()
    }
    console.log(selectAssign)
    return (
        <>
            <Divider />
            <div className='flex justify-between mr-5'>
                <div>ФИО</div>
                <div>ДОЛЖНОСТЬ</div>
                <div>НОМЕР</div>
            </div>
            <div className='flex justify-between mb-10'>
                <Space>
                    <Input className='w-38 bg-gray-50'></Input>
                    <Select
                        className='w-28 bg-gray-50'
                        allowClear
                        defaultValue="All"
                        options={[
                            {
                                value: 'jack',
                                label: 'Jack',
                            },
                            {
                                value: 'lucy',
                                label: 'Lucy',
                            },
                            {
                                value: 'Yiminghe',
                                label: 'yiminghe',
                            },
                            {
                                value: 'disabled',
                                label: 'Disabled',
                            },
                        ]}></Select>
                    <Input className='w-40 bg-gray-50'></Input>
                </Space>
            </div>
            <div style={{ height: '400px', overflowY: 'scroll' }}>
                {Emploess.map((item) => (
                    <div key={item.number}>
                        <Button className='flex border-none shadow-none' onClick={() => handleEmploessSelect(item.BIO)}>
                            <div className="w-40">{item.BIO}</div>
                            <div className='w-40'>{item.Post}</div>
                            <div className=''>{item.Number}</div>
                        </Button>
                        <Divider/>
                    </div>
                ))}
            </div>
            <div>
                <Divider/>
                <div className='flex justify-end items-end'>
                    <Button className='text-white border-none bg-green-400 mt-2 pr-5 pl-5 text-center' onClick={() => handleAssignButtonClick(selectAssign)}>Назначить</Button>
                </div>
            </div>
        </>
    );
};

export default AssignPerformer;