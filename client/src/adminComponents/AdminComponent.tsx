import React from "react";
import { Container, Table, Nav, NavLink, TabContent, TabPane, Button} from "reactstrap";

// Redux
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { fetchData } from '../redux/ActionCreators';

// Components
import Panel from "./PanelComponent";

function Admin () {
    // Redux
    const dispatch = useAppDispatch();
    const data = useAppSelector((state: { data: any; }) => state.data);

    // States
    const [loading, setLoading] = React.useState(true);
    const [currentTab, setCurrentTab] = React.useState('0');
    const [nameTab, setNameTab] = React.useState('')

    React.useEffect(() => {
        dispatch(fetchData());
        setLoading(false);
    }, [dispatch]);

    React.useEffect(() => {
        if (!loading) {
            const key: string = Object.keys(data.data)[0];
            setNameTab(key?.slice(0, -1));
        }
    }, [loading, data]);

    if (loading) {
        return (
            <h5>LOADING ...</h5>
        )
    } else {
        return (
            <>
                <Panel  data={data.data}
                        currentTab={currentTab} setCurrentTab={setCurrentTab}
                        nameTab={nameTab} setNameTab={setNameTab}/>
            </>
        ) 
    }
}

export default Admin;