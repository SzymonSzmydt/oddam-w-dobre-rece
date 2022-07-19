import "./css/organizations.css";
import { Ornament } from '../../Ornament';
import { SmallBtn } from '../../../buttons/SmallBtn';
import { OrganizationsList } from "./OrganizationsList";
import { useState } from "react";

const fundations = [
    {
        title: 'Fundacja “Dbam o Zdrowie”',
        text: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
        address: 'Egestas, sed, tempus'
    },
    {
        title: 'Fundacja “Dla dzieci”',
        text: 'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.',
        address: 'Ut, aliquam, purus, sit, amet'
    },
    {
        title: 'Fundacja “Bez domu”',
        text: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
        address: 'Mi, quis, hendrerit, dolor'
    },
    {
        title: 'Fundacja “Ciepły posiłek”',
        text: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
        address: 'Egestas, sed, tempus'
    },
    {
        title: 'Fundacja “Pomagamy!”',
        text: 'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.',
        address: 'Ut, aliquam, purus, sit, amet'
    },
    {
        title: 'Fundacja “Pod dachem”',
        text: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
        address: 'Mi, quis, hendrerit, dolor'
    },
    {
        title: 'Fundacja “Ciepło serc”',
        text: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
        address: 'Egestas, sed, tempus'
    },
    {
        title: 'Fundacja “Na wzgórzu”',
        text: 'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.',
        address: 'Ut, aliquam, purus, sit, amet'
    }
];

const org = [
    {
        title: 'Organization “Lorem Ipsum 1”',
        text: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
        address: 'Egestas, sed, tempus'
    },
    {
        title: 'Organization “Lorem Ipsum 2”',
        text: 'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.',
        address: 'Ut, aliquam, purus, sit, amet'
    },
    {
        title: 'Organization “Lorem Ipsum 3”',
        text: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
        address: 'Mi, quis, hendrerit, dolor'
    },
    {
        title: 'Organization “Lorem Ipsum 4”',
        text: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
        address: 'Egestas, sed, tempus'
    },
    {
        title: 'Organization “Lorem Ipsum 5”',
        text: 'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.',
        address: 'Ut, aliquam, purus, sit, amet'
    },
    {
        title: 'Organization “Lorem Ipsum 6”',
        text: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
        address: 'Mi, quis, hendrerit, dolor'
    }
];

const local = [
    {
        title: 'Zbiórka “Lorem Ipsum 1”',
        text: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
        address: 'Egestas, sed, tempus'
    },
    {
        title: 'Zbiórka “Lorem Ipsum 2”',
        text: 'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.',
        address: 'Ut, aliquam, purus, sit, amet'
    },
    {
        title: 'Zbiórka “Lorem Ipsum 3”',
        text: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
        address: 'Mi, quis, hendrerit, dolor'
    }
];

export function Organizations() {
    const [ todos, setTodos ] = useState(fundations);
    const [ currentPage, setCurrentPage ] = useState(1);

    const todosPerPage = 3;

    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => 
    <SmallBtn key={number} name={number} onClick={(e)=> setCurrentPage(number)}/> );

    const pages = renderPageNumbers.length > 1 ? renderPageNumbers : 
    <div style={{color: "transparent", fontSize: "1.375rem", padding: "1rem"}}>1</div>;

    return (
        <div className="organizations">
            <Ornament title="Komu pomagamy?"/>
            <div className="help small-help">
                <SmallBtn name="Fundacjom" onClick={()=> setTodos(fundations)}/>
                <SmallBtn name="Organizacją pozarządowym" onClick={()=> setTodos(org)}/>
                <SmallBtn name="Lokalnym zbiórkom" onClick={()=> setTodos(local)}/>
            </div>
            <p className="organizations-text">
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            { currentTodos.map(( e, index) => 
                <OrganizationsList 
                    key={index} 
                    title={e.title} 
                    text={e.text}
                    address={e.address} 
                />
            )}
            <div className="pages">
                { pages }
            </div>
            
        </div>
    )
}