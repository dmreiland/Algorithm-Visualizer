import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  Image,
  Nav,
  Navbar,
  Modal,
  NavDropdown,
  OverlayTrigger,
  Popover,
  Row,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getDimensions, getMax } from '../../Helpers/getDimensions';
import './Header.css';

const MobileHeader = (props) => {
  const {
    algorithm,
    animationSpeed,
    device,
    fenceToggle,
    ready,
    resizeGrid,
    resetFences,
    resetVisited,
    run: propRun,
    setAlgorithm,
    speed: propsSpeed,
  } = props;

  const [screenWidth, screenHeight] = getDimensions();
  const [maxWidth, maxHeight] = getMax();
  const [width, setWidth] = useState(Math.ceil(screenWidth));
  const [height, setHeight] = useState(Math.ceil(screenHeight));
  const [speed, setSpeed] = useState(propsSpeed);
  const [show, setShow] = useState();
  const [expanded, setExpanded] = useState(false);

  const mobile = device === 'mobile';
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const collapseNav = () => setExpanded(false);

  const run = () => {
    if (algorithm === '') {
      alert('Please select an algorithm');
    }
    if (!ready) {
      alert(
        'Please choose a start and finish point before running by clicking on the desired squares'
      );
    }
    if (ready && algorithm) {
      propRun();
    }
  };

  const gitHubImage = (
    <Image
      src="/images/github.png"
      className={'github-img'}
      alt={'Github'}
      fluid
    />
  );
  const linkedInImage = (
    <Image
      src="/images/linkedin.png"
      alt={'LinkedIn'}
      className={'linkedin-img'}
      fluid
    />
  );

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      bg="dark"
      variant="dark"
      collapseOnSelect
    >
      <Navbar.Brand
        href="https://github.com/Walker-TW/Algorithm-Visualizer"
        children={'Algo-Visualiser'}
      />
      <Navbar.Toggle
        onClick={() => setExpanded(expanded ? false : 'lg')}
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Container fluid>
          <Col md={{ span: 2 }}>
            <Nav className="mr-auto">
              <NavDropdown title="Algorithms" id="collapsible-nav-dropdown">
                <OverlayTrigger
                  trigger={('hover', 'focus')}
                  placement={'bottom'}
                  overlay={
                    <Popover id={`dijkstra-popover`}>
                      <Popover.Title as="h2">{`Dijkstra`}</Popover.Title>
                      <Popover.Content>
                        <p>
                          <strong>Weighted</strong>
                        </p>
                        <p>Running Time:</p>
                        <p>O( | E | log | V | )</p>
                        <p>Always finds the shortest path.</p>
                        <p>
                          Uses distance of nodes to choose the direction to
                          travel.
                        </p>
                      </Popover.Content>
                    </Popover>
                  }
                  children={
                    <NavDropdown.Item
                      id={'set-dijkstra'}
                      onClick={() => setAlgorithm('Dijkstra')}
                      children={'Dijkstra'}
                      active={algorithm === 'Dijkstra'}
                    />
                  }
                />
                <OverlayTrigger
                  trigger={('hover', 'focus')}
                  placement={'bottom'}
                  overlay={
                    <Popover id={`astar-e-popover`}>
                      <Popover.Title as="h3">{'A* (Euclidean)'}</Popover.Title>
                      <Popover.Content>
                        <p>
                          <strong>Weighted</strong>
                        </p>
                        <p>Running Time:</p>
                        <p>O( log ( h* )( x ) )</p>
                        <p>Will not always find the shortest path.</p>
                        <p>
                          Uses as the crow flies heuristic to decide direction
                          of search.
                        </p>
                      </Popover.Content>
                    </Popover>
                  }
                  children={
                    <NavDropdown.Item
                      id={'set-astar-euclidean'}
                      onClick={() => setAlgorithm('A* Euclidean')}
                      children={'A* (Euclidean Distance)'}
                      active={algorithm === 'A* Euclidean'}
                    />
                  }
                />
                <OverlayTrigger
                  trigger={('hover', 'focus')}
                  placement={'bottom'}
                  overlay={
                    <Popover id={'astar-m-popover'}>
                      <Popover.Title as="h3">{'A* (Manhatten)'}</Popover.Title>
                      <Popover.Content>
                        <p>
                          <strong>Weighted</strong>
                        </p>
                        <p>Running Time:</p>
                        <p>O( log ( h* )( x ) )</p>
                        <p>Will find the shortest path</p>
                        <p>
                          Uses the “taxi cab” heuristic for non diagonal graphs.
                        </p>
                      </Popover.Content>
                    </Popover>
                  }
                  children={
                    <NavDropdown.Item
                      id={'set-astar-manhatten'}
                      onClick={() => setAlgorithm('A* Manhatten')}
                      children={'A* (Manhatten Distance)'}
                      active={algorithm === 'A* Manhatten'}
                    />
                  }
                />
                <OverlayTrigger
                  trigger={('hover', 'focus')}
                  placement={'bottom'}
                  overlay={
                    <Popover id={'dfs-popover'}>
                      <Popover.Title as="h3">
                        {'Depth First Search'}
                      </Popover.Title>
                      <Popover.Content>
                        <p>
                          <strong>Not Weighted</strong>
                        </p>
                        <p>Running Time:</p>
                        <p>O( | V | + | E | )</p>
                        <p>Will not find the shortest path</p>
                        <p>Searches every branch of a graph</p>
                      </Popover.Content>
                    </Popover>
                  }
                  children={
                    <NavDropdown.Item
                      id={'set-depth-first-search'}
                      onClick={() => setAlgorithm('Depth First Search')}
                      children={'Depth First Search'}
                      active={algorithm === 'Depth First Search'}
                    />
                  }
                />
                <OverlayTrigger
                  trigger={('hover', 'focus')}
                  placement={'bottom'}
                  overlay={
                    <Popover id={'bfs-popover'}>
                      <Popover.Title as="h3">
                        {'Breadth First Search'}
                      </Popover.Title>
                      <Popover.Content>
                        <p>
                          <strong>Not Weighted</strong>
                        </p>
                        <p>Running Time:</p>
                        <p>O( | V | + | E | )</p>
                        <p>Will find the shortest path</p>
                        <p>
                          Will search paths only after its current path has been
                          fully explored.
                        </p>
                      </Popover.Content>
                    </Popover>
                  }
                  children={
                    <NavDropdown.Item
                      id={'set-breadth-first-search'}
                      onClick={() => setAlgorithm('Breadth First Search')}
                      children={'Breadth First Search'}
                      active={algorithm === 'Breadth First Search'}
                    />
                  }
                />
              </NavDropdown>
            </Nav>
          </Col>
          <Col md={{ span: 4 }}>
            <Nav>
              <Button
                id="maze-btn"
                style={{ border: '2px solid cyan', color: 'cyan' }}
                variant="dark"
                children={'How To Use'}
                onClick={handleShow}
              />
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>How To Use</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Container>
                    <Row>
                      1. Place a start and end point by clicking on the grid!
                      (You can remove them by clicking on them again)
                    </Row>
                    <Row>
                      {' '}
                      2. Then place fences by checking "Fence Mode" and clicking
                      on the grid.{' '}
                    </Row>
                    <Row>
                      3. Choose an algorithm via the "Algorithms" dropdown.{' '}
                    </Row>
                    <Row>
                      4. Run it via pressing the green "Run Algorithm" button.{' '}
                    </Row>
                    <Row>5. Enjoy!</Row>
                  </Container>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              <Button
                id="run-btn"
                style={{ border: '2px solid chartreuse', color: 'chartreuse' }}
                variant="dark"
                onClick={
                  mobile
                    ? () => {
                        run();
                        collapseNav();
                      }
                    : run
                }
                children={
                  algorithm
                    ? `Let's Run ${algorithm}`
                    : 'Please Select Algorithm'
                }
                disabled={!ready || algorithm === ''}
              />
              <Dropdown as={ButtonGroup}>
                <Button
                  id="reset-btn"
                  variant="dark"
                  style={{ border: '2px solid red', color: 'red' }}
                  children={'Reset Fences'}
                  onClick={resetVisited}
                />
                <Dropdown.Toggle
                  split
                  variant="dark"
                  style={{ border: '2px solid red', color: 'red' }}
                  id="dropdown-custom-2"
                />
                <Dropdown.Menu>
                  <Dropdown.Item
                    id="fence-reset-btn"
                    onClick={resetFences}
                    variant="dark"
                    children={'Reset Fences'}
                  />
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Col>
          <Col md={{ span: 4 }}>
            <Nav navbar="true">
              <Container>
                <Form inline>
                  <Form.Check
                    type="switch"
                    id="fence-check"
                    name="fences"
                    label="Fence mode"
                    style={{ color: 'white' }}
                    onChange={fenceToggle}
                  />
                </Form>
              </Container>
              <DropdownButton title="Settings" size="sm" variant="dark">
                <Container variant="dark">
                  <Row>
                    <Form variant="dark" inline>
                      <Col>
                        Grid Size
                        <FormControl
                          size="sm"
                          type="text"
                          placeholder={`Width (Currently ${width})`}
                          onChange={(e) => {
                            setWidth(e.target.value);
                          }}
                        />
                        <Form.Control
                          type="range"
                          size="sm"
                          min="1"
                          max={maxWidth}
                          value={width}
                          onChange={(e) => {
                            setWidth(e.target.value);
                            resizeGrid([e.target.value, height]);
                          }}
                          custom
                        />
                        <NavDropdown.Divider />
                        <FormControl
                          type="text"
                          size="sm"
                          placeholder={`Height (Currently ${height})`}
                          onChange={(e) => {
                            setHeight(e.target.value);
                          }}
                          className="Row-Input"
                        />
                        <Form.Control
                          type="range"
                          min="1"
                          max={maxHeight}
                          value={height}
                          onChange={(e) => {
                            setHeight(e.target.value);
                            resizeGrid([width, e.target.value]);
                          }}
                          custom
                        />
                        <NavDropdown.Divider />
                        <Form.Label children={'Draw Square'} />
                        <Form.Control
                          type="range"
                          size="sm"
                          min="1"
                          max="50"
                          value={(height, width)}
                          onChange={(e) => {
                            setWidth(e.target.value);
                            setHeight(e.target.value);
                            resizeGrid([height, height]);
                          }}
                          custom
                        />
                        <NavDropdown.Divider />
                        <Form.Label children={'Animation Speed'} />
                        <Form.Control
                          type="range"
                          min="1"
                          max="5"
                          value={speed}
                          onChange={(e) => {
                            setSpeed(e.target.value);
                            animationSpeed(e.target.value);
                          }}
                          custom
                        />
                      </Col>
                    </Form>
                  </Row>
                </Container>
              </DropdownButton>
              <DropdownButton
                title="Contact The Team"
                size="sm"
                id="contact-info"
              >
                <Container>
                  <Row>
                    <NavDropdown.Item id={'bassel'} children={'Bassel'} />
                    <a
                      className={'image-link'}
                      href="https://github.com/basselalsayed"
                      children={gitHubImage}
                    />
                    <a
                      className={'image-link'}
                      href="https://www.linkedin.com/in/bsas/"
                      children={linkedInImage}
                    />
                  </Row>
                  <Row>
                    <NavDropdown.Item id={'tom'} children={'Tom'} />
                    <a
                      className={'image-link'}
                      href="https://github.com/Walker-TW"
                      children={gitHubImage}
                    />
                    <a
                      className={'image-link'}
                      href="https://www.linkedin.com/in/thomas-w-walker"
                      children={linkedInImage}
                    />
                  </Row>
                </Container>
              </DropdownButton>
            </Nav>
          </Col>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default MobileHeader;

MobileHeader.propTypes = {
  algorithm: PropTypes.string.isRequired,
  animationSpeed: PropTypes.func.isRequired,
  device: PropTypes.string.isRequired,
  fenceToggle: PropTypes.func.isRequired,
  ready: PropTypes.bool.isRequired,
  resetFences: PropTypes.func.isRequired,
  resetVisited: PropTypes.func.isRequired,
  resizeGrid: PropTypes.func.isRequired,
  run: PropTypes.func.isRequired,
  setAlgorithm: PropTypes.func.isRequired,
  speed: PropTypes.string.isRequired,
};
