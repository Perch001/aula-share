import React, {useState} from 'react';
import {Button} from "antd/lib";
import {DatePicker, Input, Modal} from "antd";
import {FileExcelOutlined, PlusOutlined, SearchOutlined} from "@ant-design/icons";
import ModalWindow from "./ModalWindow/ModalWindow";

const DashboardButtons = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={false} width={700}>
                <ModalWindow onCancel={handleCancel}/>
            </Modal>
            <div className='flex px-14 pr-14 pt-4 pb-2'>
                <Button onClick={showModal}
                        className='flex bg-green-400 text-white mx-4 border-none pt-0 mt-0'>
                    <PlusOutlined className="text-xl"/>
                    <div className='mt-1.5 ml-1'>
                        Создать
                    </div>
                </Button>
                <div className='mt-1 mr-2'>От</div>
                <DatePicker className='mr-5'/>
                <div className='mt-1 mr-2'>До</div>
                <DatePicker className='mr-1'/>
                <Button className='border-none shadow-none pt-0'>
                    <SearchOutlined className='text-lg'/>
                </Button>
                <Button className='border-green-400 text-green-400 mr-4 ml-5'>
                    Сбросить фильтр
                </Button>
                <Button className='flex bg-green-400 text-white border-none'>
                    <FileExcelOutlined className='pt-1.5 pl-3 pr-1'/>
                    <div className='mt-0.5 pr-3'>
                        Экспорт
                    </div>
                </Button>
            </div>
        </>
    );
};

export default DashboardButtons;