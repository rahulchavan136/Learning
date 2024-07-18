import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const GetData = () => {
    const [data, setData] = useState([]);
    const [filterCompleted, setFilterCompleted] = useState([]);
    const [filterUnCompleted, setFilterUnCompleted] = useState([]);


    const fetchApiData = async () => {
        const response = await axios.get(apiUrl);
        // const result = await response.json();
        const result = response.data
        setData(result);

        setFilterCompleted(result.filter((d) => d.completed === true));
        setFilterUnCompleted(result.filter((d) => d.completed === false));

    };

    useEffect(() => {
        fetchApiData();
    }, []);

    const handleDelete = (id) => {
        setData(data.filter((d) => d.id !== id))
        setFilterCompleted(filterCompleted.filter((d) => d.id !== id));
        setFilterUnCompleted(filterUnCompleted.filter((d) => d.id !== id));
    };

    const handleCompleted = () => {
        console.log("completed=>", filterCompleted);
        setData(filterCompleted)
    }
    const handleUnCompleted = () => {
        console.log("Uncompleted=>", filterUnCompleted);
        setData(filterUnCompleted)
    }

    return (
        <Container className='mt-5'>
            <div className='mb-5 text-center'>
                <Button variant='success' onClick={handleCompleted}>Completed</Button> &nbsp;
                <Button variant='danger' onClick={handleUnCompleted}>UnCompleted</Button>
            </div>

            {data.map((newData) => {
                return (
                    <ul key={newData.id}>
                        <p>
                            <Button variant='danger' onClick={() => handleDelete(newData.id)}>
                                Remove
                            </Button> &nbsp; &nbsp; <span style={{ fontWeight: "bolder" }}>{newData.completed === true ? '✓' : '✕'} &nbsp; </span>{newData.id} &nbsp; {newData.title}
                        </p>
                    </ul>
                );
            })}

        </Container>
    );
};

export default GetData;
