import React from 'react';
import {Tabs} from "antd";
import TabPane from "antd/es/tabs/TabPane";
import ApplicationFromResident from "./Content/Application_From_Resident";

const ModalWindow = ({onCancel}) => {
    return (
        <>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Заявка от жителя" key="1">
                    <ApplicationFromResident onCancel={onCancel}/>
                </TabPane>
                <TabPane tab="Внутренняя заявка" key="2" className='first'>
                    SecondPages
                </TabPane>
            </Tabs>
        </>
    );
};

export default ModalWindow;