import React, {useState} from 'react';
import {Button, Checkbox, DatePicker, Divider, Input, Modal, Select} from "antd";
import TextArea from "antd/es/input/TextArea";
import {CalendarOutlined, UsergroupAddOutlined} from "@ant-design/icons";
import ExecutorModal from "./ExecutorModal";
import AssignPerformer from "./AssignPerformer";
import {useDispatch, useSelector} from "react-redux";
import {add_app} from "../../../../store/actions/applicationAction";
import moment from "moment";

const ApplicationFromResident = ({onCancel}) => {
    const [applicantPhone, setApplicantPhone] = useState('');
    const [additionalPhone, setAdditionalPhone] = useState('');
    const [applicantAddress, setApplicantAddress] = useState('');
    const [applicantType, setApplicantType] = useState('');
    const [applicantNumber, setApplicantNumber] = useState('');
    const [categoriesWorks, setCategoriesWorks] = useState('');
    const [description, setDescription] = useState('');
    const [assignEmployees, setAssignEmployees] = useState([]);
    const [executionData, setExecutionData] = useState('')
    const [paid, setPaid] = useState(false)
    const [date, setCreateTime] = useState('');
    const dispatch = useDispatch();

    const [errorStatus, setErrorStatus] = useState('')

    const [isVisibleModalExecutor, setVisibleModalExecutor] = useState(false)
    const [isVisibleModalAssign, setVisibleModalAssign] = useState(false)


    const testAddApplication = () => {
        if(applicantPhone === ''){
            setErrorStatus('error')
        }else{
            handleAddApplication();
        }
    }

    const handleAddApplication = () => {
        const getAssignEmployeesText = () => {
            const employeeNames = assignEmployees.map(item => item.BIO);
            return employeeNames.join(', ');
        };
        const getCategoriesWorks = () => {
            try{
                const CategoriesName = categoriesWorks.map(item => item);
                return CategoriesName.join(', ');
            }catch (e){
                console.log(e)
            }
        }


        setCreateTime(moment().format('ll'));
        console.log(assignEmployees)
        const applicationState = {
            id: Date.now(),
            status: 'Ожидание',
            applicantPhone,
            additionalPhone,
            applicantAddress,
            applicantType,
            applicantNumber,
            categoriesWorks: getCategoriesWorks(),
            description,
            assignEmployees: getAssignEmployeesText(),
            paid: paid ? 'Платная' : "Бесплатно",
            executionData,
            date
        }

        dispatch(add_app(applicationState));

        setApplicantPhone('');
        setAdditionalPhone('');
        setApplicantAddress('');
        setApplicantType('');
        setApplicantNumber('');
        setCategoriesWorks([]);
        setDescription('');
        setAssignEmployees([]);
        setExecutionData('');
        setPaid(false);

        onCancel();
    }
    const handleChangeCategory = (value) => {
        setCategoriesWorks(value)
    }
    const handleChangeAdditionalType = (value) => {
        setApplicantType(value)
    }

    const showModalExecutor = () => {
        setVisibleModalExecutor(true);
    };
    const handleOkExecutor = () => {
        setVisibleModalExecutor(false);
    };
    const handleCancelExecutor = () => {
        setVisibleModalExecutor(false);
    };

    const showModalAssign = () => {
        setVisibleModalAssign(true);
    };
    const handleOkAssign = () => {
        setVisibleModalAssign(false);
    };
    const handleCancelAssign = () => {
        setVisibleModalAssign(false);
    };


    const handleDataMomentChange = (dataMoment) => {
        setExecutionData(dataMoment)
    };
    const handleAssignEmployees = (assign) => {
        setAssignEmployees(assign);
    }

    const SelectAction = [
        {
            value: 'Сантехника',
            label: 'Сантехника',
        },
        {
            value: 'Электрика',
            label: 'Электрика',
        },
        {
            value: 'Отопление',
            label: 'Отопление',
        },
        {
            value: 'Гарантийные работы',
            label: 'Гарантийные работы',
        },
        {
            value: 'Видеонаблюдение',
            label: 'Видеонаблюдение',
        },
        {
            value: 'Вентиляция',
            label: 'Вентиляция',
        },
        {
            value: 'Плотнические работы',
            label: 'Плотнические работы',
        },
        {
            value: 'Ремонтные работы',
            label: 'Ремонтные работы',
        },
        {
            value: 'Дезинфекция и дератизация',
            label: 'Дезинфекция и дератизация',
        },
        {
            value: 'Пожарная безопасность',
            label: 'Пожарная безопасность',
        },
        {
            value: 'Благоустройство',
            label: 'Благоустройство',
        },
        {
            value: 'Лифтовое оборудование',
            label: 'Лифтовое оборудование',
        },
        {
            value: 'Охрана',
            label: 'Охрана',
        },
        {
            value: 'Прочее',
            label: 'Прочее',
        },
    ]
    const SelectTypeAction = [
        {
            value: 'Жилой дом',
            label: 'Жилой дом',
        },
        {
            value: 'Квартира',
            label: 'Квартира',
        },
        {
            value: 'Комната',
            label: 'Комната',
        },
        {
            value: 'Другое',
            label: 'Другое',
        },
    ]
    return (
        <>
            <Modal visible={isVisibleModalExecutor} onOk={handleOkExecutor} onCancel={handleCancelExecutor} footer={false} width={250}>
                <ExecutorModal onDataMomentChange={handleDataMomentChange} showModalClose = {handleCancelExecutor}/>
            </Modal>
            <Modal title='Исполнители' visible={isVisibleModalAssign} onOk={handleOkAssign} onCancel={handleCancelAssign} footer={false} width={550}>
                <AssignPerformer assignEmployeesChange = {handleAssignEmployees} closeWindow={handleCancelAssign}/>
            </Modal>
            <div>
                <div className='flex mb-3'>
                    <div>
                        <div>Телефон заявителя</div>
                        <Input status={errorStatus} onChange={(e) => setApplicantPhone(e.target.value)}/>
                    </div>
                    <div className='ml-11'>
                        <div>Дополнительный телефон</div>
                        <Input status={errorStatus} onChange={(e) => setAdditionalPhone(e.target.value)}/>
                    </div>
                </div>


                <div className='flex justify-between'>
                    <div>
                        <div>Адрес</div>
                        <Input status={errorStatus} onChange={(e) => setApplicantAddress(e.target.value)}/>
                    </div>
                    <div>
                        <div>Тип помещения</div>
                        <Select
                            style={{
                                width: 200,
                            }}
                            placeholder="Тип помещения"
                            onChange={handleChangeAdditionalType}
                            options={SelectTypeAction}
                        >
                        </Select>
                    </div>
                    <div>
                        <div>Номер помещения</div>
                        <Input status={errorStatus} onChange={(e) => setApplicantNumber(e.target.value)}/>
                    </div>
                </div>



                <div className='mt-2'>
                    <div>Категории работ</div>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{
                            width: '100%',
                        }}
                        placeholder="Выберите категрию"
                        options={SelectAction}
                        onChange={handleChangeCategory}
                    >
                    </Select>
                </div>


                <div className='mt-2'>
                    <div>Описание</div>
                    <TextArea status={errorStatus} cols="100" onChange={(e) => setDescription(e.target.value)}></TextArea>
                </div>
                {assignEmployees.length === 0 ?
                    <div>
                        <div className='flex items-center justify-between my-2 mb-4'>
                            <Button
                                className='flex border-none shadow-none pt-0 mb-2 pb-2 mt-1'
                                onClick={showModalAssign}
                            >
                                <UsergroupAddOutlined className='text-green-400 text-xl mr-2'/>
                                <div className='mt-2'>
                                    Назначить исполнителя
                                </div>
                            </Button>
                            <div className='mt-2'>
                                <Button className='flex border-none shadow-none' onClick={showModalExecutor}>
                                    <CalendarOutlined className='text-green-400 mt-1 mr-2'/>
                                    {executionData ?
                                        <div>{executionData}</div>
                                        :
                                        <div>
                                            Выберите Дату
                                        </div>
                                    }
                                </Button>
                            </div>
                            <div className='flex mt-3'>
                                <Checkbox onChange={(e) => setPaid(e.target.checked)}> Платная </Checkbox>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <div>
                            <div className='flex items-center justify-between'>
                                <Button
                                    className='flex border-none shadow-none pt-0 pb-2 mt-1 bg-gray-300 h-10 rounded-none'
                                    onClick={showModalAssign}
                                >
                                    <UsergroupAddOutlined className='text-green-400 text-xl mr-2'/>
                                    <div className='mt-2'>
                                        Назначить исполнителя
                                    </div>
                                </Button>
                                <div className='mt-2'>
                                    <Button className='flex border-none shadow-none' onClick={showModalExecutor}>
                                        <CalendarOutlined className='text-green-400 mt-1 mr-2'/>
                                        {executionData ?
                                            <div>{executionData}</div>
                                            :
                                            <div>
                                                Выберите Дату
                                            </div>
                                        }
                                    </Button>
                                </div>
                                <div className='flex mt-3'>
                                    <Checkbox onChange={(e) => setPaid(e.target.checked)}> Платная </Checkbox>
                                </div>
                            </div>
                            <div className='flex bg-gray-300 mt-0'>
                                {assignEmployees.map(item => (
                                    <div key={item.number}>
                                        <div className='px-4 py-2 mx-2 my-4 bg-white rounded-md'>{item.BIO}</div>
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className='mt-5'>
                <Button onClick={testAddApplication} className='bg-green-400 text-white border-none'>Сохранить</Button>
            </div>
        </>
    );
};

export default ApplicationFromResident;