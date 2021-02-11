import React, { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const DetailsModal = (props) => {
    const {
        show,
        handleClose,
        selectedCocktail,
        loadCocktailDetail,
        cocktailDetail
    } = props;

    useEffect(() => {
        loadCocktailDetail(selectedCocktail)
    }, [selectedCocktail]);

    const cocktailData = cocktailDetail ? 
        cocktailDetail.drinks.map(cocktail => {
            return(
                <Modal 
                    show={show} 
                    onHide={handleClose} 
                    key={cocktail.idDrink}
                >
                    <Modal.Header closeButton>
                    <Modal.Title>{cocktail.strDrink}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>Ingredients:</h5>
                        <ul className="list-group">
                            {cocktail.strIngredient1 ? 
                                <li className="list-group-item">{cocktail.strIngredient1}</li>
                                : null
                            }
                            {cocktail.strIngredient2 ? 
                                <li className="list-group-item">{cocktail.strIngredient2}</li>
                                : null
                            }
                            {cocktail.strIngredient3 ? 
                                <li className="list-group-item">{cocktail.strIngredient3}</li>
                                : null
                            }
                            {cocktail.strIngredient4 ? 
                                <li className="list-group-item">{cocktail.strIngredient4}</li>
                                : null
                            }
                            {cocktail.strIngredient5 ? 
                                <li className="list-group-item">{cocktail.strIngredient5}</li>
                                : null
                            }
                            {cocktail.strIngredient6 ? 
                                <li className="list-group-item">{cocktail.strIngredient6}</li>
                                : null
                            }
                            {cocktail.strIngredient7 ? 
                                <li className="list-group-item">{cocktail.strIngredient7}</li>
                                : null
                            }
                            {cocktail.strIngredient8 ? 
                                <li className="list-group-item">{cocktail.strIngredient8}</li>
                                : null
                            }
                            {cocktail.strIngredient9 ? 
                                <li className="list-group-item">{cocktail.strIngredient9}</li>
                                : null
                            }
                            {cocktail.strIngredient10 ? 
                                <li className="list-group-item">{cocktail.strIngredient10}</li>
                                : null
                            }
                            {cocktail.strIngredient11 ? 
                                <li className="list-group-item">{cocktail.strIngredient11}</li>
                                : null
                            }
                            {cocktail.strIngredient12 ? 
                                <li className="list-group-item">{cocktail.strIngredient12}</li>
                                : null
                            }
                            {cocktail.strIngredient13 ? 
                                <li className="list-group-item">{cocktail.strIngredient13}</li>
                                : null
                            }
                            {cocktail.strIngredient14 ? 
                                <li className="list-group-item">{cocktail.strIngredient14}</li>
                                : null
                            }
                            {cocktail.strIngredient15 ? 
                                <li className="list-group-item">{cocktail.strIngredient15}</li>
                                : null
                            }
                        </ul>
                        <h5 className="mt-2">Instructions:</h5>
                        <ul className="list-group">
                            <li className="list-group-item">{cocktail.strInstructions}</li>
                        </ul>
                        <h5 className="mt-2">Glass to serve in:</h5>
                        <ul className="list-group">
                            <li className="list-group-item">{cocktail.strGlass}</li>
                        </ul>
                        <h5 className="mt-2">The finished article:</h5>
                        <img className="w-50 mx-auto mt-2" src={cocktail.strDrinkThumb} />
                        <h1 className="mt-2">Enjoy! 🍹</h1>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            );
        })
    : null; 
    
    return(
        <>
            {cocktailData}
        </>
    );
}

export default DetailsModal;