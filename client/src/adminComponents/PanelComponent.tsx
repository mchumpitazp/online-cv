import React from 'react';
import { Container, Table, Nav, NavLink, TabContent, TabPane, Button} from "reactstrap";

interface PanelProps {
    data: any,
    currentTab: string,
    nameTab: string,
    setCurrentTab: (curr: string) => void,
    setNameTab: (name: string) => void
}

function Panel (props: PanelProps) {
    React.useEffect(() => {
        const key: string = Object.keys(props.data)[0];
        props.setNameTab(key?.slice(0, -1));
    }, [props]);

    const keys = Object.keys(props.data);
    const values = Object.values(props.data);

    // Toggle states
    const toggleTab = (strIndex: string, name: string) => {
        props.setCurrentTab(strIndex);
        props.setNameTab(name);
    }

    const renderNav = keys.map((key: string, index: number) => {
        const strIndex = index.toString();
        return (
            <NavLink key={key}
                className = { props.currentTab === strIndex ? 'active' : '' }
                onClick={() => toggleTab(strIndex, key.slice(0, -1))}>
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
                    <Button color='primary'>
                        Edit
                    </Button>
                    &nbsp;
                    <Button color='danger'>
                        Delete
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
        <div id="admin">
            <Container>

                <h2>Admin Panel</h2>

                <Nav tabs>
                    {renderNav}
                </Nav>

                <div className="d-flex justify-content-end">
                    <Button className="my-3" color='success'>
                        + New {props.nameTab}
                    </Button>
                </div>
                
                <TabContent activeTab={props.currentTab}>
                    {renderTabContent}
                </TabContent>


            </Container>
        </div>
        
    )
}

export default Panel;