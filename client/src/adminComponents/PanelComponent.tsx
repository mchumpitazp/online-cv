import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Nav, NavLink, TabContent, TabPane, Button} from "reactstrap";
import ItemDeleteModal from './ItemDeleteModalComponent';

interface PanelProps {
    data: any
}

function Panel (props: PanelProps) {
    const [currentTab, setCurrentTab] = React.useState('0');
    const [nameTab, setNameTab] = React.useState('');
    const [modal, setModal] = React.useState(true);
    const [itemId, setItemId] = React.useState('');

    React.useEffect(() => {
        const key: string = Object.keys(props.data)[0];
        setNameTab(key);
    }, [setNameTab, props]);

    React.useEffect(() => {
        setModal(modal => !modal);
    }, [itemId]);

    const keys = Object.keys(props.data);
    const values = Object.values(props.data);

    // Toggle states
    const toggleTab = (strIndex: string, name: string) => {
        setCurrentTab(strIndex);
        setNameTab(name);
    }

    const renderNav = keys.map((key: string, index: number) => {
        const strIndex = index.toString();
        return (
            <NavLink key={key}
                className = { currentTab === strIndex ? 'active' : '' }
                onClick={() => toggleTab(strIndex, key)}>
                {key}
            </NavLink>
        )
    });

    const renderTable = (arrObj: any) => {
        let headers = Object.keys(arrObj[0]);
        let i = headers.indexOf('_id');
        headers.splice(i, 1);
        i = headers.indexOf('__v');
        headers.splice(i, 1);
        headers.push('actions');

        const tableHeaders = headers.map((header: string, i: number) => {
            return ( <th key={i}>{header}</th> );
        });

        const tableData = arrObj.map((itemObj: any) => {
            const newObj = Object.keys(itemObj)
                                .filter(key => headers.includes(key))
                                .reduce((cur, key) => { return Object.assign(cur, { [key]: itemObj[key] })}, {});

            const values = Object.values(newObj);
            const rowData = values.map((value: any, i: number) => ( <td key={i}>{value}</td>));
            rowData.push(
                <td key={rowData.length}>
                    <Link  to={nameTab + '/edit'}
                            state={{item_id: itemObj._id}} relative='path'>
                        <Button color='primary'>
                            <i className='fa fa-pencil'></i>
                        </Button>
                    </Link>
                    &nbsp;
                    &nbsp;
                    <Button color='danger' onClick={() => setItemId(itemObj._id)}>
                        <i className='fa fa-trash'></i>
                    </Button>
                </td>
            )

            return ( <tr id={itemObj['_id']} key={itemObj['_id']}>{rowData}</tr> );
        })

        return (
            <Table dark>
                <thead>
                    <tr>
                        {tableHeaders}
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </Table>
        );
    };

    const renderTabContent = values.map((arrObj: any, i: number) => {
        const strIndex = i.toString();    
        if (arrObj.length === 0) {
            return (
                <TabPane tabId={strIndex} key={i}>
                    <span>Empty table.</span>
                </TabPane>
            );
        }
        
        return (
            <TabPane tabId={strIndex} key={i}>
                {renderTable(arrObj)}
            </TabPane>
        );
    });

    return (
        <div className="admin">
            <Container id='panel'>

                <h2 className='admin-title'>Admin Panel</h2>

                <Nav tabs>
                    {renderNav}
                </Nav>

                <div className="d-flex justify-content-end">
                    <Link to={nameTab + '/new'}>
                        <Button className="my-3" color='success'>
                            + New {nameTab?.slice(0, -1)}
                        </Button>
                    </Link>
                </div>
                
                <TabContent activeTab={currentTab}>
                    {renderTabContent}
                </TabContent>

                <ItemDeleteModal    itemTitle={nameTab}
                                    itemId={itemId} 
                                    isOpen={modal} 
                                    setModal={setModal}/>


            </Container>
        </div>
        
    )
}

export default Panel;