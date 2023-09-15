import React from 'react';
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <div className='flex bg-white'>
                <div className='logo'></div>
                <div className='ml-2 mt-3 mr-14 text-2xl'>AULA</div>
                <NavLink
                    className='NavLink'
                    to="/"
                    style={({isActive}) => isActive ? {borderBottom: "3px solid #2EB85C", color: 'black'} : {borderBottom: "none"}}
                >Заявки</NavLink>
                <NavLink
                    className='NavLink'
                    to="/notifications"
                    style={({isActive}) => isActive ? {borderBottom: "3px solid #2EB85C", color: 'black'} : {borderBottom: "none"}}
                >Уведомления</NavLink>
                <NavLink
                    className='NavLink'
                    to="/Analytics"
                    style={({isActive}) => isActive ? {borderBottom: "3px solid #2EB85C", color: 'black'} : {borderBottom: "none"}}
                >Аналитика</NavLink>
                <NavLink
                    className='NavLink'
                    to="/Residents"
                    style={({isActive}) => isActive ? {borderBottom: "3px solid #2EB85C", color: 'black'} : {borderBottom: "none"}}
                >Жители</NavLink>
                <NavLink
                    className='NavLink'
                    to="/Staff"
                    style={({isActive}) => isActive ? {borderBottom: "3px solid #2EB85C", color: 'black'} : {borderBottom: "none"}}
                >Сотрудники</NavLink>
                <NavLink
                    className='NavLink'
                    to="/AtHome"
                    style={({isActive}) => isActive ? {borderBottom: "3px solid #2EB85C", color: 'black'} : {borderBottom: "none"}}
                >Дома</NavLink>
                <NavLink
                    className='NavLink'
                    to="/UK"
                    style={({isActive}) => isActive ? {borderBottom: "3px solid #2EB85C", color: 'black'} : {borderBottom: "none"}}
                >УК</NavLink>
            </div>
        </div>
    );
};

export default Navbar;