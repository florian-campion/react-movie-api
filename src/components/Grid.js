import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Perso from "./Perso";

const Grid = (props) => {
    let [gridState, setGridState] = useState('card');

    return (
        <Container>
            <div className="grid">
                <ul>
                    <li onClick={() => setGridState('card')}>Card</li>
                    <li onClick={() => setGridState('list')}>List</li>
                </ul>
                <Row>
                {
                    props.datas.map(item => (
                        <Col 
                            sm={(gridState == 'card') ? 6 : 12 }
                            md={(gridState == 'card') ? 3 : 12 }
                        >
                            <Perso key={item.id} datas={item} />
                        </Col>
                    ))
                }
                </Row>
            </div>
        </Container>
    )
}

export default Grid;