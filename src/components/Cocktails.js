import React, { useEffect, useState } from "react";
import {
    Card,
    Container,
    Button,
    Row
} from "react-bootstrap";
import DetailsModal from "./DetailsModal";
import BackToTop from "react-back-to-top-button";

const Cocktails = (props) => {
    const {
        loadCocktailCategory,
        cocktail,
        isPending,
        loadCocktailDetail,
        cocktailDetail,
        isPendingDetail,
        loadCocktailFilter,
        cocktailFilter
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

    const drinksList = cocktail ? 
        cocktail.drinks.map(cocktail => {
            return (
                <Card className="col-md-4 col-sm-6 min-h-25 mt-2" key={cocktail.idDrink}>
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
                            Ingredients
                        </Button>
                    </Card.Footer>
                </Card>
            )
        })
    : null;

    const drinksListFiltered = cocktailFilter ? 
        cocktailFilter.drinks.map(cocktail => {
            return (
                <Card className="col-md-4 col-sm-6 min-h-25 mt-2" key={cocktail.idDrink}>
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
                            Ingredients
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
                <select 
                    className="btn"
                    name="filter" 
                    onChange={filterHandler}
                    style={{backgroundColor: "Coral", fontFamily: "Permanent Marker"}}
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
                        className="btn btn-danger ml-1" 
                        onClick={() => setFilter(null)} 
                        style={{ fontFamily: "Permanent Marker"}}
                    >
                        Clear Filter
                    </Button>
                : null}
                <Row>
                    {filter ? drinksListFiltered : drinksList}
                    <DetailsModal
                        show={show}
                        handleClose={handleClose}
                        selectedCocktail={selectedCocktail}
                        loadCocktailDetail={loadCocktailDetail}
                        cocktailDetail={cocktailDetail}
                        isPendingDetail={isPendingDetail}
                    />
                </Row>
            </Container>
        </>
    );
}

export default Cocktails;