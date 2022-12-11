import { Container } from "reactstrap";
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

function Records(props) {
    if (!props.records) {
        return( <Loading /> );
    }
    else {
        const recordsSorted = [...props.records]

        recordsSorted.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });

        const records = recordsSorted.map((rec) => {
            const recSource = (rec.source.startsWith('files/')) ? `${baseUrl}${rec.source}` : rec.source
            
            return(
                <a key={rec._id} className="link-colored-secondary" href={recSource} target="_blank" rel="noopener noreferrer">
                    <h4>
                    <small className='me-2'><i className="fa fa-link fa-lg"></i></small>
                    {rec.name}
                    </h4>
                </a>
            );
        })

        return(
            <Container id="records" className="d-flex-gapped">
                <h2 ref={props.inputRef}><strong>Records</strong></h2>

                {records}
            </Container>
        );
    }
}

export default Records;