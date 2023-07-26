import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Nav, NavLink, TabContent, TabPane, Button} from "reactstrap";
import ItemDeleteModal from './ItemDeleteModalComponent';

interface PanelProps {
    data: any
}

function Panel (props: PanelProps) {
    const [activeTab, setActiveTab] = React.useState('');
    const [modal, setModal] = React.useState(false);
    const [itemId, setItemId] = React.useState('');

    React.useEffect(() => {
        const key: string = Object.keys(props.data)[0];
        setActiveTab(key);
    }, [setActiveTab, props]);

    const toggleModal = (itemId: string) => {
        setItemId(itemId);
        setModal(!modal);
    }

    const keys = Object.keys(props.data);
    const values = Object.values(props.data);

    const renderTable = (arrObj: any) => {
        let headers = Object.keys(arrObj[0])
                            .filter(key => key !== '_id' && key !== '__v');
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
                    <Link  to={activeTab + '/edit'}
                            state={{item_id: itemObj._id}} relative='path'>
                        <Button color='primary'>
                            <i className='fa fa-pencil'></i>
                        </Button>
                    </Link>
                    &nbsp;
                    &nbsp;
                    <Button color='danger' onClick={() => toggleModal(itemObj._id)}>
                        <i className='fa fa-trash'></i>
                    </Button>
                </td>
            )

            return ( <tr key={itemObj['_id']}>{rowData}</tr> );
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
        return (
            <TabPane tabId={keys[i]} key={i}>
                {renderTable(arrObj)}
            </TabPane>
        );
    });

    const renderNav = keys.map((key: string, i: number) => {
        return (
            <NavLink key={i} onClick={() => setActiveTab(key)}
                     className = { activeTab === key ? 'active' : '' } >
                {key}
            </NavLink>
        )
    });

    return (
        <div className="admin">
            <Container id='panel'>
                <h2 className='admin-title'>Admin Panel</h2>

                <Nav tabs>
                    {renderNav}
                </Nav>

                <div className="d-flex justify-content-end">
                    <Link to={activeTab + '/new'}>
                        <Button className="my-3" color='success'>
                            + New {activeTab?.slice(0, -1)}
                        </Button>
                    </Link>
                </div>
                
                <TabContent activeTab={activeTab}>
                    {renderTabContent}
                </TabContent>

                <ItemDeleteModal    itemTitle={activeTab}
                                    itemId={itemId} 
                                    isOpen={modal} 
                                    setModal={setModal}/>
            </Container>
        </div>
        
    )
}

export default Panel;