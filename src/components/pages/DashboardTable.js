import React from 'react';
import {Badge, Table} from "antd";
import {useSelector} from "react-redux";
const DashboardTable = () => {
    const applicationSelect = useSelector(state => state.appl.application)
    const selectApplication = useSelector((state) =>
        state.appl.application.slice().reverse()
    );
    const colums =
        [
            {
                "title": "ID",
                "dataIndex": "id",
                "key": "id"
            },
            {
                "title": "Статус",
                "dataIndex": "status",
                "key": "status",
                render: () => <Badge status="warning" text="Ожидание" />
            },
            {
                "title": "Адрес",
                "dataIndex": "applicantAddress",
                "key": "applicantAddress"
            },
            {
                "title": "Помещение",
                "dataIndex": "room",
                "key": "room"
            },
            {
                "title": "Номер помещ.",
                "dataIndex": "applicantNumber",
                "key": "roomID"
            },
            {
                "title": "Тел. заявителя",
                "dataIndex": "applicantPhone",
                "key": "applicantPhone"
            },
            {
                "title": "Описание",
                "dataIndex": "description",
                "key": "description"
            },
            {
                "title": "Дата создания",
                "dataIndex": "date",
                "key": "date"
            },
            {
                "title": "Срок исполнения",
                "dataIndex": "executionData",
                "key": "executionData"
            },
            {
                "title": "Категория работ",
                "dataIndex": "categoriesWorks",
                "key": "categoriesWorks"
            },
            {
                "title": "Исполнитель",
                "dataIndex": "assignEmployees",
                "key": "assignEmployees"
            },
            {
                "title": "Стоимость",
                "dataIndex": "paid",
                "key": "paid"
            },
            {
                "title": "Оценка",
                "dataIndex": "evaluation",
                "key": "evaluation"
            }

        ]
    //console.log(applicationSelect)
    return (
        <div>
            <Table columns={colums} dataSource={selectApplication} className='mx-16' pagination={true} size={"small"}/>
        </div>
    );
};

export default DashboardTable;