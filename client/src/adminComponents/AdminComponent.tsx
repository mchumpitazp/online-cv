import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Redux
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { fetchData } from '../redux/ActionCreators';

// Components
import Panel from "./PanelComponent";
import Item from './ItemComponent';

function Admin () {
    // Redux
    const dispatch = useAppDispatch();
    const data = useAppSelector((state: { data: any; }) => state.data);

    React.useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (data.isLoading) {
        return (
            <h5>LOADING ...</h5>
        )
    } else {
        return (
            <Routes>
                <Route path="*" element={<Navigate to="/admin" replace />} />
                <Route path="/" element={<Panel data={data.data}/>} />
                <Route path="/:item_title" element={<Item data={data}/>} />
            </Routes>
        ) 
    }
}

export default Admin;