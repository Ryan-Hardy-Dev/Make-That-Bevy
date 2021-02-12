import React, { useEffect, useState } from "react";
import {
    Card,
    Container,
    Button,
    Row,
    Form,
    InputGroup
} from "react-bootstrap";
import DetailsModal from "./DetailsModal";
import BackToTop from "react-back-to-top-button";
import SearchIcon from '@material-ui/icons/Search';

const Cocktails = (props) => {
    const {
        loadCocktailCategory,
        cocktail,
        isPending,
        loadCocktailDetail,
        cocktailDetail,
        loadCocktailFilter,
        cocktailFilter,
        loadCocktailSearch,
        cocktailSearch
    } = props;

    useEffect(() => {
        loadCocktailCategory("cocktail")
    }, []);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [selectedCocktail, setSelectedCocktail] = useState(null);
    const buttonHandler = (cocktail) => {
        const cocktailId = cocktail.idDrink
        handleShow();
        return (
            cocktailId ? 
                setSelectedCocktail(cocktailId) 
            : null
        )
    }

    const [filter, setFilter] = useState(null);
    const filterHandler = (event) => {
        setFilter(event.target.value);
    }

    useEffect(() => {
        loadCocktailFilter(filter)
    }, [filter]);

    let textInput = React.createRef();
    const [search, setSearch] = useState(null);
    const handleSearchClick = () => {
        setSearch(textInput.current.value)
        setFilter(null)
    }

    useEffect(() => {
        loadCocktailSearch(search)
    }, [search]);

    const drinksList = cocktail ? 
        cocktail.drinks.map(cocktail => {
            return (
                <Card className="col-md-4 col-sm-6 min-h-25 mt-2 border-info" key={cocktail.idDrink}>
                    <Card.Img variant="top" className="w-50 mx-auto mt-2" src={cocktail.strDrinkThumb} />
                    <Card.Body>
                        <Card.Title className="text-center">{cocktail.strDrink}</Card.Title>
                    </Card.Body>
                    <Card.Footer className="text-center bg-transparent">
                        <Button 
                            variant="primary" 
                            onClick={() => buttonHandler(cocktail)}
                            key={cocktail.idDrink}
                            className="w-100 btn-outline-dark"
                            style={{backgroundColor: "pink", fontFamily: "Permanent Marker"}}
                        >
                            View Ingredients
                        </Button>
                    </Card.Footer>
                </Card>
            )
        })
    : null;

    const drinksListFiltered = cocktailFilter ? 
        cocktailFilter.drinks.map(cocktail => {
            return (
                <Card className="col-md-4 col-sm-6 min-h-25 mt-2 border-info" key={cocktail.idDrink}>
                    <Card.Img variant="top" className="w-50 mx-auto mt-2" src={cocktail.strDrinkThumb} />
                    <Card.Body>
                        <Card.Title className="text-center">{cocktail.strDrink}</Card.Title>
                    </Card.Body>
                    <Card.Footer className="text-center bg-transparent">
                        <Button 
                            variant="primary" 
                            onClick={() => buttonHandler(cocktail)}
                            key={cocktail.idDrink}
                            className="w-100 btn-outline-dark"
                            style={{backgroundColor: "pink", fontFamily: "Permanent Marker"}}
                        >
                            View Ingredients
                        </Button>
                    </Card.Footer>
                </Card>
            )
        })
    : null;

    const drinksListSearched = cocktailSearch ? 
        cocktailSearch.drinks.map(cocktail => {
            return (
                <Card className="col-md-4 col-sm-6 min-h-25 mt-2 border-info" key={cocktail.idDrink}>
                    <Card.Img variant="top" className="w-50 mx-auto mt-2" src={cocktail.strDrinkThumb} />
                    <Card.Body>
                        <Card.Title className="text-center">{cocktail.strDrink}</Card.Title>
                    </Card.Body>
                    <Card.Footer className="text-center bg-transparent">
                        <Button 
                            variant="primary" 
                            onClick={() => buttonHandler(cocktail)}
                            key={cocktail.idDrink}
                            className="w-100 btn-outline-dark"
                            style={{backgroundColor: "pink", fontFamily: "Permanent Marker"}}
                        >
                            View Ingredients
                        </Button>
                    </Card.Footer>
                </Card>
            )
        })
    : null;

    return(
        isPending === true ?
            <div className="text-center mt-5">
                <div className="spinner-border spinner-border-xl" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        :
        <>
            <BackToTop
                showOnScrollUp={false}
                showAt={100}
                speed={1500}
                easing="easeInOutQuint"
                style={{zIndex: "10"}}
            >
                ☝️
                <br/>
                <h6 style={{ fontFamily: "Permanent Marker"}}>Back To Top</h6>
            </BackToTop>
            <Container>
                <h1 className="text-center" style={{ fontFamily: "Permanent Marker"}}>Cocktails</h1>
                <Row className="btn-block ml-1">
                    <select 
                        className="btn h-25"
                        name="filter" 
                        onChange={filterHandler}
                        style={{backgroundColor: "Pink", fontFamily: "Permanent Marker"}}
                    >
                        <option selected disabled>Filter</option>
                        <option value="vodka">Vodka</option>
                        <option value="gin">Gin</option>
                        <option value="rum">Rum</option>
                        <option value="whiskey">Whiskey</option>
                        <option value="tequila">Tequila</option>
                        <option value="brandy">Brandy</option>
                        <option value="champagne">Champagne</option>
                    </select>
                    {filter ?
                        <Button 
                            className="btn btn-danger h-25 ml-2" 
                            onClick={() => setFilter(null)} 
                            style={{ fontFamily: "Permanent Marker"}}
                        >
                            Clear Filter
                        </Button>
                    : null}
                </Row>
                <Row className="btn-block mx-auto">
                    <Form.Group className="mt-1">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <Button className="btn btn-info" onClick={() => {handleSearchClick()}}>
                                    <SearchIcon/>
                                </Button>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                style={{fontFamily: "Permanent Marker"}}
                                className="border-info"
                                ref={textInput}
                            />
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row>
                    {(() => {
                        if (filter) {
                            return (
                                drinksListFiltered
                            )
                        } else if (search) {
                            return (
                                drinksListSearched
                            )
                        } else {
                            return (
                                drinksList
                            )
                        }
                    })()}
                    <DetailsModal
                        show={show}
                        handleClose={handleClose}
                        selectedCocktail={selectedCocktail}
                        loadCocktailDetail={loadCocktailDetail}
                        cocktailDetail={cocktailDetail}
                    />
                </Row>
            </Container>
        </>
    );
}

export default Cocktails;